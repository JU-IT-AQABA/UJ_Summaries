/**
 * script.js - Main JavaScript for UJ Summaries Platform
 * ======================================================
 * 
 * كيف تعمل البيانات:
 * 1. collegesData (من data.js): هيكل الكليات/التخصصات بدون مواد
 * 2. pending_admin_data (من localStorage): المواد المُضافة عبر الأدمن
 * 3. mergedCollegesData: يدمج الاثنين → هذا ما يُعرض على الموقع
 * 
 * عند الإضافة من الأدمن → تُحفظ في localStorage → الموقع يقرأها تلقائياً
 */

/* ============================================================
   1. STATE MANAGEMENT
   ============================================================ */
const AppState = {
  currentLang: localStorage.getItem('site_language') || 'ar',
  currentTheme: localStorage.getItem('site_theme') || 'dark',
  currentView: 'home',
  selectedCollege: null,
  selectedSpec: null,
  selectedCourse: null,
  currentFileTab: 'all',
  currentCourseFilter: 'all',
  searchQuery: '',
};

window.currentLang = AppState.currentLang;

/* ============================================================
   2. MERGED DATA - يدمج data.js مع localStorage
   ============================================================ */

/**
 * buildMergedData:
 * يأخذ collegesData (الهيكل الأساسي) ويدمج معه
 * pending_admin_data من localStorage (المواد المُضافة عبر الأدمن)
 * ويعيد نسخة مدموجة كاملة
 */
function buildMergedData() {
  // Deep clone collegesData لتجنب التعديل المباشر
  const merged = JSON.parse(JSON.stringify(collegesData));

  // أضف الكليات الجديدة من الأدمن (إن وجدت)
  const pendingColleges = JSON.parse(localStorage.getItem('pending_admin_colleges') || '[]');
  pendingColleges.forEach((pendingCollege) => {
    if (!merged.find((c) => c.id === pendingCollege.id)) {
      merged.push(JSON.parse(JSON.stringify(pendingCollege)));
    }
  });

  // أضف المواد المُضافة عبر الأدمن
  const pendingCourses = JSON.parse(localStorage.getItem('pending_admin_data') || '[]');

  pendingCourses.forEach((entry) => {
    const college = merged.find((c) => c.id === entry.collegeId);
    if (!college) return;

    const spec = college.specializations.find((s) => s.id === entry.specId);
    if (!spec) return;

    // تحقق أن المادة غير مضافة مسبقاً (بالـ id)
    const exists = spec.courses.find((c) => c.id === entry.id);
    if (exists) {
      // حدّث الملفات والمدرسين إن تغيروا
      exists.files = entry.files;
      exists.instructors = entry.instructors;
    } else {
      spec.courses.push({
        id: entry.id,
        name: entry.name,
        instructors: entry.instructors,
        files: entry.files,
      });
    }
  });

  return merged;
}

// يُبنى عند التحميل وعند أي تغيير
window.mergedCollegesData = buildMergedData();

/**
 * refreshMergedData:
 * يُعاد استدعاؤها عند أي تغيير في localStorage
 * (مثلاً بعد الإضافة من الأدمن في tab آخر)
 */
function refreshMergedData() {
  window.mergedCollegesData = buildMergedData();
  updateStats();
}

// تحديث تلقائي عند تغيير localStorage (مفيد لو الأدمن مفتوح في tab آخر)
window.addEventListener('storage', (e) => {
  if (
    e.key === 'pending_admin_data' ||
    e.key === 'pending_admin_colleges' ||
    e.key === '_last_update'
  ) {
    refreshMergedData();
    rerenderCurrentView();
  }
});

/* ============================================================
   3. INITIALIZATION
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initNavigation();
  initSearch();
  renderCollegesGrid('colleges-grid');
  updateStats();
  setFooterYear();
  initNavbarScroll();
  initMobileMenu();
});

/* ============================================================
   4. THEME MANAGEMENT
   ============================================================ */
function initTheme() {
  updateThemeIcon();
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleTheme);
  }
}

function toggleTheme() {
  AppState.currentTheme = AppState.currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', AppState.currentTheme);
  localStorage.setItem('site_theme', AppState.currentTheme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = document.getElementById('theme-icon');
  if (icon) {
    icon.textContent = AppState.currentTheme === 'dark' ?  '☀️' : '🌙';
  }
}

/* ============================================================
   5. LANGUAGE MANAGEMENT
   ============================================================ */
function initLanguage() {
  applyLanguage(AppState.currentLang, false);

  const langBtn = document.getElementById('lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');

  if (langBtn) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = langDropdown.classList.toggle('open');
      langBtn.setAttribute('aria-expanded', isOpen);
    });
  }

  document.addEventListener('click', () => {
    if (langDropdown) {
      langDropdown.classList.remove('open');
      if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
    }
  });

  document.querySelectorAll('.lang-option').forEach((opt) => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = opt.dataset.lang;
      applyLanguage(lang, true);
      if (langDropdown) langDropdown.classList.remove('open');
    });

    opt.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        opt.click();
      }
    });
  });
}

function applyLanguage(lang, rerender = true) {
  AppState.currentLang = lang;
  window.currentLang = lang;

  localStorage.setItem('site_language', lang);

  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', dir);

  const langLabels = { ar: 'عربي', en: 'EN', fr: 'FR' };
  const currentLangLabel = document.getElementById('current-lang-label');
  if (currentLangLabel) currentLangLabel.textContent = langLabels[lang] || lang.toUpperCase();

  document.querySelectorAll('.lang-option').forEach((opt) => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  document.querySelectorAll('[id$="-back-icon"]').forEach((el) => {
    el.textContent = lang === 'ar' ? '←' : '→';
  });

  translatePage();

  if (rerender) {
    rerenderCurrentView();
  }

  document.title = t('site_title');
}

function translatePage() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    el.setAttribute('placeholder', t(key));
  });
}

function t(key) {
  const lang = AppState.currentLang;
  if (translations[lang] && translations[lang][key] !== undefined) {
    return translations[lang][key];
  }
  if (translations.ar && translations.ar[key] !== undefined) {
    return translations.ar[key];
  }
  return key;
}

function getName(obj, lang) {
  if (!obj) return '';
  const l = lang || AppState.currentLang;
  if (typeof obj === 'string') return obj;
  if (obj[l] !== undefined && obj[l] !== '') return obj[l];
  if (obj.ar !== undefined) return obj.ar;
  return '';
}

/* ============================================================
   6. SPA NAVIGATION
   ============================================================ */
function initNavigation() {
  document.querySelectorAll('[data-view]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const view = link.dataset.view;
      if (view === 'home') showView('home');
      else if (view === 'colleges') showCollegesView();
      else if (view === 'search') showSearchView();
    });
  });

  const logoLink = document.getElementById('nav-logo-link');
  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      showView('home');
    });
  }

  document.getElementById('specs-back-btn')?.addEventListener('click', () => showCollegesView());
  document.getElementById('courses-back-btn')?.addEventListener('click', () => {
    if (AppState.selectedCollege) showSpecsView(AppState.selectedCollege);
  });
  document.getElementById('course-back-btn')?.addEventListener('click', () => {
    if (AppState.selectedCollege && AppState.selectedSpec) {
      showCoursesView(AppState.selectedCollege, AppState.selectedSpec);
    }
  });

  // File tabs
  document.querySelectorAll('.files-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.files-tab').forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      AppState.currentFileTab = tab.dataset.tab;
      renderFiles();
    });
  });

  // Course filter buttons
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      AppState.currentCourseFilter = btn.dataset.filter;
      renderCourses();
    });
  });
}

function showView(viewName) {
  document.querySelectorAll('.view').forEach((v) => v.classList.remove('active'));
  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) targetView.classList.add('active');

  AppState.currentView = viewName;

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.toggle('active', link.dataset.view === viewName);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMobileMenu();
}

function rerenderCurrentView() {
  const view = AppState.currentView;
  if (view === 'home') {
    renderCollegesGrid('colleges-grid');
    translatePage();
  } else if (view === 'colleges') {
    showCollegesView();
  } else if (view === 'specs' && AppState.selectedCollege) {
    // Re-fetch college from mergedData to get updated courses
    const freshCollege = window.mergedCollegesData.find((c) => c.id === AppState.selectedCollege.id);
    if (freshCollege) showSpecsView(freshCollege);
  } else if (view === 'courses' && AppState.selectedCollege && AppState.selectedSpec) {
    const freshCollege = window.mergedCollegesData.find((c) => c.id === AppState.selectedCollege.id);
    const freshSpec = freshCollege?.specializations.find((s) => s.id === AppState.selectedSpec.id);
    if (freshCollege && freshSpec) showCoursesView(freshCollege, freshSpec);
  } else if (view === 'course-detail' && AppState.selectedCourse) {
    showCourseDetail(AppState.selectedCollege, AppState.selectedSpec, AppState.selectedCourse);
  } else if (view === 'search') {
    performSearch(AppState.searchQuery);
  }
  translatePage();
}

/* ============================================================
   7. COLLEGES VIEW
   ============================================================ */
function showCollegesView() {
  showView('colleges');
  renderCollegesGrid('colleges-grid-page');
  setBreadcrumb('colleges-breadcrumb', [
    { label: t('breadcrumb_home'), viewFn: () => showView('home') },
    { label: t('colleges_title'), active: true },
  ]);
}

function renderCollegesGrid(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  // ← استخدام mergedCollegesData بدلاً من collegesData
  const data = window.mergedCollegesData || collegesData;

  data.forEach((college) => {
    const card = document.createElement('div');
    card.className = 'college-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', getName(college.name));
    card.style.setProperty('--card-color', college.color);

    const specCount = college.specializations.length;
    const courseCount = college.specializations.reduce(
      (sum, s) => sum + s.courses.length, 0
    );

    card.innerHTML = `
      <span class="college-icon" aria-hidden="true">${college.icon}</span>
      <h3 class="college-name">${getName(college.name)}</h3>
      <div class="college-meta">
        <span class="college-meta-badge">📂 ${specCount} ${t('specializations_title')}</span>
        <span class="college-meta-badge">📖 ${courseCount} ${t('courses_title')}</span>
      </div>
      <span class="college-arrow" aria-hidden="true">${AppState.currentLang === 'ar' ? '←' : '→'}</span>
    `;

    card.addEventListener('click', () => showSpecsView(college));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showSpecsView(college);
      }
    });

    container.appendChild(card);
  });
}

/* ============================================================
   8. SPECIALIZATIONS VIEW
   ============================================================ */
function showSpecsView(college) {
  AppState.selectedCollege = college;
  showView('specs');

  setBreadcrumb('specs-breadcrumb', [
    { label: t('breadcrumb_home'), viewFn: () => showView('home') },
    { label: t('colleges_title'), viewFn: () => showCollegesView() },
    { label: getName(college.name), active: true },
  ]);

  const titleEl = document.getElementById('specs-page-title');
  if (titleEl) titleEl.textContent = getName(college.name);

  const container = document.getElementById('spec-grid');
  if (!container) return;
  container.innerHTML = '';

  college.specializations.forEach((spec) => {
    const card = document.createElement('div');
    card.className = 'spec-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', getName(spec.name));

    card.innerHTML = `
      <div class="spec-icon" style="background: ${college.color}22; color: ${college.color};" aria-hidden="true">
        ${college.icon}
      </div>
      <div class="spec-info">
        <div class="spec-name">${getName(spec.name)}</div>
        <div class="spec-count">📖 ${spec.courses.length} ${t('courses_title')}</div>
      </div>
      <span class="spec-arrow" aria-hidden="true">${AppState.currentLang === 'ar' ? '‹' : '›'}</span>
    `;

    card.addEventListener('click', () => showCoursesView(college, spec));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showCoursesView(college, spec);
      }
    });

    container.appendChild(card);
  });
}

/* ============================================================
   9. COURSES VIEW
   ============================================================ */
function showCoursesView(college, spec) {
  AppState.selectedCollege = college;
  AppState.selectedSpec = spec;
  AppState.currentCourseFilter = 'all';
  showView('courses');

  document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
  document.getElementById('filter-all-btn')?.classList.add('active');

  document.getElementById('filter-all-btn').textContent = t('filter_all');
  document.getElementById('filter-summary-btn').textContent = t('tab_summaries');
  document.getElementById('filter-testbank-btn').textContent = t('tab_testbank');

  setBreadcrumb('courses-breadcrumb', [
    { label: t('breadcrumb_home'), viewFn: () => showView('home') },
    { label: t('colleges_title'), viewFn: () => showCollegesView() },
    { label: getName(college.name), viewFn: () => showSpecsView(college) },
    { label: getName(spec.name), active: true },
  ]);

  const titleEl = document.getElementById('courses-page-title');
  if (titleEl) titleEl.textContent = getName(spec.name);

  renderCourses();
}

function renderCourses() {
  const spec = AppState.selectedSpec;
  if (!spec) return;

  const container = document.getElementById('courses-grid');
  if (!container) return;
  container.innerHTML = '';

  const filter = AppState.currentCourseFilter;

  // نتحقق من آخر نسخة من mergedData للتخصص الحالي
  const freshCollege = window.mergedCollegesData?.find((c) => c.id === AppState.selectedCollege?.id);
  const freshSpec = freshCollege?.specializations.find((s) => s.id === spec.id) || spec;

  if (freshSpec.courses.length === 0) {
    container.innerHTML = `
      <div class="no-files" style="grid-column: 1/-1;">
        <span class="no-files-icon">📭</span>
        <p class="no-files-text">${t('no_files')}</p>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-top:8px;">
          ${AppState.currentLang === 'ar'
            ? 'أضف مواد من خلال <a href="admin.html" style="color:var(--accent-secondary)">صفحة الأدمن</a>'
            : 'Add courses via the <a href="admin.html" style="color:var(--accent-secondary)">Admin Panel</a>'}
        </p>
      </div>
    `;
    return;
  }

  freshSpec.courses.forEach((course) => {
    const summaryCount = course.files.filter((f) => f.type === 'summary').length;
    const testbankCount = course.files.filter((f) => f.type === 'testbank').length;

    if (filter === 'summary' && summaryCount === 0) return;
    if (filter === 'testbank' && testbankCount === 0) return;

    const card = document.createElement('div');
    card.className = 'course-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', getName(course.name));

    const instructorText = course.instructors.length
      ? course.instructors.map((i) => getName(i)).join('، ')
      : '—';

    const badges = [];
    if (summaryCount > 0) badges.push(`<span class="file-type-badge badge-summary">📄 ${summaryCount} ${t('tab_summaries')}</span>`);
    if (testbankCount > 0) badges.push(`<span class="file-type-badge badge-testbank">📝 ${testbankCount} ${t('tab_testbank')}</span>`);
    if (badges.length === 0) badges.push(`<span class="file-type-badge" style="background:var(--bg-input); color:var(--text-muted)">📂 ${t('no_files')}</span>`);

    card.innerHTML = `
      <h3 class="course-name">${getName(course.name)}</h3>
      <div class="course-instructors">
        <span>👨‍🏫</span>
        <span>${instructorText}</span>
      </div>
      <div class="course-files-count">${badges.join('')}</div>
    `;

    // pass freshCollege/freshSpec so navigation stays correct
    card.addEventListener('click', () =>
      showCourseDetail(freshCollege || AppState.selectedCollege, freshSpec, course)
    );
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showCourseDetail(freshCollege || AppState.selectedCollege, freshSpec, course);
      }
    });

    container.appendChild(card);
  });

  if (container.children.length === 0) {
    container.innerHTML = `
      <div class="no-files" style="grid-column: 1/-1;">
        <span class="no-files-icon">📭</span>
        <p class="no-files-text">${t('no_files')}</p>
      </div>
    `;
  }
}

/* ============================================================
   10. COURSE DETAIL VIEW
   ============================================================ */
function showCourseDetail(college, spec, course) {
  AppState.selectedCollege = college;
  AppState.selectedSpec = spec;
  AppState.selectedCourse = course;
  AppState.currentFileTab = 'all';
  showView('course-detail');

  document.querySelectorAll('.files-tab').forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.tab === 'all');
    tab.setAttribute('aria-selected', tab.dataset.tab === 'all' ? 'true' : 'false');
  });

  document.getElementById('tab-all').textContent = t('tab_all');
  document.getElementById('tab-summary').textContent = t('tab_summaries');
  document.getElementById('tab-testbank').textContent = t('tab_testbank');

  setBreadcrumb('course-breadcrumb', [
    { label: t('breadcrumb_home'), viewFn: () => showView('home') },
    { label: t('colleges_title'), viewFn: () => showCollegesView() },
    { label: getName(college.name), viewFn: () => showSpecsView(college) },
    { label: getName(spec.name), viewFn: () => showCoursesView(college, spec) },
    { label: getName(course.name), active: true },
  ]);

  const titleEl = document.getElementById('course-detail-title');
  if (titleEl) titleEl.textContent = getName(course.name);

  const metaRow = document.getElementById('course-meta-row');
  if (metaRow) {
    const instructorText = course.instructors.length
      ? course.instructors.map((i) => getName(i)).join(' / ')
      : '—';
    const instrLabel = course.instructors.length > 1 ? t('course_instructors') : t('course_instructor');

    metaRow.innerHTML = `
      <div class="course-meta-item">
        <span>🏛️</span>
        <span>${t('course_college')}:</span>
        <strong>${getName(college.name)}</strong>
      </div>
      <div class="course-meta-item">
        <span>📂</span>
        <span>${t('course_specialization')}:</span>
        <strong>${getName(spec.name)}</strong>
      </div>
      <div class="course-meta-item">
        <span>👨‍🏫</span>
        <span>${instrLabel}:</span>
        <strong>${instructorText}</strong>
      </div>
      <div class="course-meta-item">
        <span>📁</span>
        <span>${t('course_files_count')}:</span>
        <strong>${course.files.length}</strong>
      </div>
    `;
  }

  renderFiles();
}

function renderFiles() {
  const course = AppState.selectedCourse;
  if (!course) return;

  const container = document.getElementById('files-grid');
  if (!container) return;
  container.innerHTML = '';

  const tab = AppState.currentFileTab;
  const filtered = tab === 'all' ? course.files : course.files.filter((f) => f.type === tab);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-files" style="grid-column: 1/-1;">
        <span class="no-files-icon">📭</span>
        <p class="no-files-text">${t('no_files')}</p>
        <p class="no-files-sub" style="color:var(--text-muted)">${t('search_no_results_desc')}</p>
      </div>
    `;
    return;
  }

  filtered.forEach((file) => {
    const isSummary = file.type === 'summary';
    const typeLabel = isSummary ? t('file_summary') : t('file_testbank');
    const typeIcon = isSummary ? '📄' : '📝';
    const typeClass = isSummary ? 'summary' : 'testbank';
    const badgeClass = isSummary ? 'badge-summary' : 'badge-testbank';

    const card = document.createElement('div');
    card.className = 'file-card';
    card.setAttribute('role', 'listitem');

    const preparedBy = file.preparedBy ? getName(file.preparedBy) : null;
    const preparedByHtml = preparedBy
      ? `<div class="file-card-meta">✏️ ${t('file_prepared_by')}: ${preparedBy}</div>`
      : '';

    let viewUrl = file.path;
    let downloadUrl = file.path;

    // إذا كان رابط Google Drive، نستخرج הـ ID لعمل رابط تحميل مباشر
    const driveMatch = file.path.match(/drive\.google\.com\/file\/d\/([^\/]+)/);
    if (driveMatch && driveMatch[1]) {
      viewUrl = file.path;
      downloadUrl = `https://drive.google.com/uc?export=download&id=${driveMatch[1]}`;
    } else if (!viewUrl.startsWith('http')) {
      // إذا كان مسار محلي، نقوم بتشفيره لتجنب مشاكل المسافات
      viewUrl = encodeURI(viewUrl);
      downloadUrl = encodeURI(downloadUrl);
    }

    card.innerHTML = `
      <div class="file-card-header">
        <div class="file-type-icon ${typeClass}" aria-hidden="true">${typeIcon}</div>
        <div class="file-card-info">
          <div class="file-card-title">${getName(file.title)}</div>
          <span class="file-type-badge ${badgeClass}">${typeLabel}</span>
        </div>
      </div>
      ${preparedByHtml}
      <div class="file-card-actions">
        <a class="btn-view" href="${viewUrl}" target="_blank" rel="noopener noreferrer" aria-label="${t('file_view')}: ${getName(file.title)}">
          <span>👁️</span>
          <span>${t('file_view')}</span>
        </a>
        <a class="btn-download" href="${downloadUrl}" download target="_blank" rel="noopener noreferrer" aria-label="${t('file_download')}: ${getName(file.title)}" title="${t('file_download')}">
          ⬇️
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

/* ============================================================
   11. SEARCH FUNCTIONALITY
   ============================================================ */
function initSearch() {
  const heroInput = document.getElementById('hero-search-input');
  const heroBtn = document.getElementById('hero-search-btn');

  if (heroInput) {
    heroInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') triggerSearch(heroInput.value);
    });
  }
  if (heroBtn) {
    heroBtn.addEventListener('click', () => triggerSearch(heroInput?.value || ''));
  }

  const pageInput = document.getElementById('search-page-input');
  const pageBtn = document.getElementById('search-page-btn');

  if (pageInput) {
    pageInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') performSearch(pageInput.value);
    });
    pageInput.addEventListener('input', () => {
      if (pageInput.value.length >= 2) performSearch(pageInput.value);
    });
  }
  if (pageBtn) {
    pageBtn.addEventListener('click', () => performSearch(pageInput?.value || ''));
  }
}

function showSearchView(query = '') {
  showView('search');
  AppState.searchQuery = query;

  const pageInput = document.getElementById('search-page-input');
  if (pageInput) {
    pageInput.value = query;
    pageInput.focus();
  }

  if (query) performSearch(query);
  else {
    const header = document.getElementById('search-results-header');
    const list = document.getElementById('search-results-list');
    if (header) header.innerHTML = '';
    if (list) list.innerHTML = '';
  }
}

function triggerSearch(query) {
  AppState.searchQuery = query.trim();
  showSearchView(AppState.searchQuery);
}

function performSearch(query) {
  AppState.searchQuery = query;
  const q = query.trim();
  const header = document.getElementById('search-results-header');
  const list = document.getElementById('search-results-list');
  if (!list) return;

  if (!q || q.length < 1) {
    if (header) header.innerHTML = '';
    list.innerHTML = '';
    return;
  }

  // searchData في data.js يستخدم mergedCollegesData تلقائياً
  const results = searchData(q, AppState.currentLang);

  if (header) {
    const countText = results.length === 1
      ? `${results.length} ${t('search_results_count')}`
      : `${results.length} ${t('search_results_count_plural')}`;

    header.innerHTML = `
      <span style="color:var(--text-secondary); font-size:0.95rem;">
        ${t('search_results_for')}: <strong style="color:var(--text-primary)">"${escapeHtml(q)}"</strong>
      </span>
      <span class="results-count-badge">${countText}</span>
    `;
  }

  if (results.length === 0) {
    list.innerHTML = `
      <div class="no-files" style="padding: 60px 20px;">
        <span class="no-files-icon">🔍</span>
        <p class="no-files-text">${t('search_no_results')}</p>
        <p class="no-files-sub" style="color:var(--text-muted)">${t('search_no_results_desc')}</p>
      </div>
    `;
    return;
  }

  list.innerHTML = '';
  results.forEach(({ college, specialization, course }) => {
    const card = document.createElement('div');
    card.className = 'search-result-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');

    card.innerHTML = `
      <div class="search-result-icon" style="background: ${college.color}22;" aria-hidden="true">
        ${college.icon}
      </div>
      <div class="search-result-info">
        <div class="search-result-name">${getName(course.name)}</div>
        <div class="search-result-path">
          ${getName(college.name)} › ${getName(specialization.name)}
        </div>
      </div>
      <span style="color:var(--text-muted); font-size:1rem;" aria-hidden="true">
        ${AppState.currentLang === 'ar' ? '←' : '→'}
      </span>
    `;

    card.addEventListener('click', () =>
      showCourseDetail(college, specialization, course)
    );
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showCourseDetail(college, specialization, course);
      }
    });

    list.appendChild(card);
  });
}

/* ============================================================
   12. BREADCRUMB
   ============================================================ */
function setBreadcrumb(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  items.forEach((item, idx) => {
    const isLast = idx === items.length - 1;
    const span = document.createElement('span');
    span.className = 'breadcrumb-item' + (item.active ? ' active' : '');

    if (item.viewFn && !item.active) {
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = item.label;
      a.addEventListener('click', (e) => {
        e.preventDefault();
        item.viewFn();
      });
      span.appendChild(a);
    } else {
      span.textContent = item.label;
    }

    container.appendChild(span);

    if (!isLast) {
      const sep = document.createElement('span');
      sep.className = 'breadcrumb-sep';
      sep.setAttribute('aria-hidden', 'true');
      sep.textContent = AppState.currentLang === 'ar' ? '‹' : '›';
      container.appendChild(sep);
    }
  });
}

/* ============================================================
   13. NAVBAR SCROLL & MOBILE MENU
   ============================================================ */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

function initMobileMenu() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('navbar-links');
  if (!mobileBtn || !navLinks) return;

  mobileBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('mobile-open');
    mobileBtn.setAttribute('aria-expanded', isOpen);
  });
}

function closeMobileMenu() {
  const navLinks = document.getElementById('navbar-links');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  if (navLinks) navLinks.classList.remove('mobile-open');
  if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
}

/* ============================================================
   14. STATS — حسابات حقيقية من mergedCollegesData
   ============================================================ */
function updateStats() {
  // استخدام mergedCollegesData للإحصائيات الحقيقية
  const data = window.mergedCollegesData || collegesData;

  const totalColleges = data.length;
  const totalSpecs = data.reduce((s, c) => s + c.specializations.length, 0);
  const totalCourses = data.reduce(
    (s, c) => s + c.specializations.reduce((ss, sp) => ss + sp.courses.length, 0), 0
  );
  const totalFiles = data.reduce(
    (s, c) => s + c.specializations.reduce(
      (ss, sp) => ss + sp.courses.reduce((sss, co) => sss + co.files.length, 0), 0
    ), 0
  );

  // عرض الأرقام الحقيقية
  setStatEl('stats-colleges', totalColleges);
  setStatEl('stats-specs', totalSpecs);
  setStatEl('stats-courses', totalCourses);

  // لو في عنصر للملفات
  setStatEl('stats-files', totalFiles);
}

function setStatEl(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  // لا نضيف "+" إلا لو القيمة 0 (للإشارة إن في محتوى قادم)
  el.textContent = value === 0 ? '0' : value;
}

/* ============================================================
   15. TOAST NOTIFICATIONS
   ============================================================ */
function showToast(message, type = 'info', duration = 3500) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.setAttribute('role', 'alert');
  toast.innerHTML = `<span>${icons[type] || 'ℹ️'}</span><span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/* ============================================================
   16. UTILITIES
   ============================================================ */
function setFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
