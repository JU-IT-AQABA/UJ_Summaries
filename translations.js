/**
 * translations.js
 * ملف الترجمات لجميع نصوص واجهة المستخدم
 * Translations file for all UI text strings
 * Fichier de traductions pour tous les textes de l'interface
 *
 * المفاتيح: ar (العربية), en (الإنجليزية), fr (الفرنسية)
 */

const translations = {
  ar: {
    // Site Meta
    site_title: "ملخصات الجامعة الأردنية",
    site_subtitle: "منصة ملخصات وتيست بانكات مواد الجامعة الأردنية",
    site_description: "ابحث عن ملخصات المواد وتيست البانكات بسهولة",

    // Navigation
    nav_home: "الرئيسية",
    nav_colleges: "الكليات",
    nav_search: "البحث",
    nav_admin: "لوحة الإدارة",

    // Hero Section
    hero_title: "ملخصات الجامعة الأردنية",
    hero_subtitle: "اعثر على ملخصات المواد وتيست بانكات جميع الكليات بسهولة",
    search_placeholder: "ابحث عن مادة، تخصص، أو مدرس...",
    search_button: "بحث",

    // Sections
    colleges_title: "الكليات",
    colleges_subtitle: "اختر الكلية للوصول إلى التخصصات والمواد",
    specializations_title: "التخصصات",
    courses_title: "المواد",
    files_title: "الملفات",

    // Tabs
    tab_summaries: "ملخصات",
    tab_testbank: "تيست بانك",
    tab_all: "الكل",

    // Course Page
    course_instructor: "المدرس",
    course_instructors: "المدرسون",
    course_prepared_by: "أعدّه",
    course_college: "الكلية",
    course_specialization: "التخصص",
    course_files_count: "عدد الملفات",
    no_files: "لا توجد ملفات متاحة حالياً",

    // File Cards
    file_download: "تحميل",
    file_view: "عرض",
    file_summary: "ملخص",
    file_testbank: "تيست بانك",
    file_prepared_by: "المُعِد",

    // Breadcrumb
    breadcrumb_home: "الرئيسية",
    breadcrumb_colleges: "الكليات",

    // Search Results
    search_results: "نتائج البحث",
    search_results_for: "نتائج البحث عن",
    search_no_results: "لا توجد نتائج للبحث",
    search_no_results_desc: "جرب كلمات مختلفة أو تصفح الكليات",
    search_results_count: "نتيجة",
    search_results_count_plural: "نتائج",

    // Filter
    filter_all: "الكل",
    filter_by_college: "حسب الكلية",
    filter_by_specialization: "حسب التخصص",

    // Theme
    theme_dark: "الوضع الليلي",
    theme_light: "الوضع النهاري",
    toggle_theme: "تبديل المظهر",

    // Language
    lang_ar: "العربية",
    lang_en: "English",
    lang_fr: "Français",
    select_language: "اختر اللغة",

    // Footer
    footer_rights: "جميع الحقوق محفوظة",
    footer_made_with: "صُنع بـ",
    footer_for: "لطلاب الجامعة الأردنية",
    footer_disclaimer: "هذا الموقع غير رسمي وهو منصة طلابية مستقلة من اعداد يوسف خالد عبدالهادي",

    // Admin Panel
    admin_title: "مجموعة التيليغرام للملخصات",
    admin_subtitle: "إضافة وإدارة محتوى الموقع",
    admin_add_course: "إضافة مادة جديدة",
    admin_add_file: "إضافة ملف",
    admin_college: "الكلية",
    admin_specialization: "التخصص",
    admin_course_name: "اسم المادة",
    admin_course_name_ar: "اسم المادة (عربي)",
    admin_course_name_en: "اسم المادة (إنجليزي)",
    admin_course_name_fr: "اسم المادة (فرنسي)",
    admin_instructor: "اسم المدرس",
    admin_instructors: "أسماء المدرسين (مفصولة بفاصلة)",
    admin_prepared_by: "أعدّه",
    admin_file_type: "نوع الملف",
    admin_file_name: "اسم الملف",
    admin_file_path: "مسار الملف (داخل assets/files/)",
    admin_file_title: "عنوان الملف",
    admin_file_title_ar: "عنوان الملف (عربي)",
    admin_file_title_en: "عنوان الملف (إنجليزي)",
    admin_file_title_fr: "عنوان الملف (فرنسي)",
    admin_add_btn: "إضافة",
    admin_save_btn: "حفظ",
    admin_cancel_btn: "إلغاء",
    admin_edit_btn: "تعديل",
    admin_delete_btn: "حذف",
    admin_export_btn: "تصدير data.js",
    admin_clear_btn: "مسح البيانات المؤقتة",
    admin_pending_data: "البيانات المُضافة في هذه الجلسة",
    admin_no_pending: "لا توجد بيانات مُضافة بعد",
    admin_instructions: "تعليمات الاستخدام",
    admin_note_files: "ملاحظة: رفع ملفات PDF يتم يدوياً في مجلد assets/files",
    admin_export_success: "تم تصدير الملف بنجاح! الرجاء استبدال data.js القديم بالملف الجديد",
    admin_clear_confirm: "هل أنت متأكد من مسح جميع البيانات المؤقتة؟ تأكد من أنك نزّلت data.js الجديد أولاً.",
    admin_type_summary: "ملخص",
    admin_type_testbank: "تيست بانك",
    admin_select_college: "-- اختر الكلية --",
    admin_select_specialization: "-- اختر التخصص --",
    admin_new_college: "+ إضافة كلية جديدة",
    admin_new_specialization: "+ إضافة تخصص جديد",
    admin_college_icon: "أيقونة الكلية (Emoji)",
    admin_college_color: "لون الكلية",
    admin_added_courses: "المواد المُضافة",
    admin_col_college: "الكلية",
    admin_col_specialization: "التخصص",
    admin_col_course: "المادة",
    admin_col_instructor: "المدرس",
    admin_col_files: "الملفات",
    admin_col_actions: "إجراءات",
    admin_session_notice: "البيانات محفوظة في المتصفح. إذا أغلقت الصفحة ستجد بياناتك هنا عند العودة.",

    // General
    loading: "جارٍ التحميل...",
    error: "حدث خطأ",
    back: "رجوع",
    close: "إغلاق",
    confirm: "تأكيد",
    cancel: "إلغاء",
    yes: "نعم",
    no: "لا",
    view_all: "عرض الكل",
    show_more: "عرض المزيد",
    collapse: "طي",
  },

  en: {
    // Site Meta
    site_title: "UJ Summaries",
    site_subtitle: "University of Jordan Course Summaries & Test Banks Platform",
    site_description: "Find course summaries and test banks easily",

    // Navigation
    nav_home: "Home",
    nav_colleges: "Colleges",
    nav_search: "Search",
    nav_admin: "Admin Panel",

    // Hero Section
    hero_title: "University of Jordan Summaries",
    hero_subtitle: "Find course summaries and test banks for all colleges easily",
    search_placeholder: "Search for a course, specialization, or instructor...",
    search_button: "Search",

    // Sections
    colleges_title: "Colleges",
    colleges_subtitle: "Select a college to browse specializations and courses",
    specializations_title: "Specializations",
    courses_title: "Courses",
    files_title: "Files",

    // Tabs
    tab_summaries: "Summaries",
    tab_testbank: "Test Banks",
    tab_all: "All",

    // Course Page
    course_instructor: "Instructor",
    course_instructors: "Instructors",
    course_prepared_by: "Prepared by",
    course_college: "College",
    course_specialization: "Specialization",
    course_files_count: "Files Count",
    no_files: "No files available yet",

    // File Cards
    file_download: "Download",
    file_view: "View",
    file_summary: "Summary",
    file_testbank: "Test Bank",
    file_prepared_by: "Prepared by",

    // Breadcrumb
    breadcrumb_home: "Home",
    breadcrumb_colleges: "Colleges",

    // Search Results
    search_results: "Search Results",
    search_results_for: "Search results for",
    search_no_results: "No results found",
    search_no_results_desc: "Try different keywords or browse colleges",
    search_results_count: "result",
    search_results_count_plural: "results",

    // Filter
    filter_all: "All",
    filter_by_college: "By College",
    filter_by_specialization: "By Specialization",

    // Theme
    theme_dark: "Dark Mode",
    theme_light: "Light Mode",
    toggle_theme: "Toggle Theme",

    // Language
    lang_ar: "العربية",
    lang_en: "English",
    lang_fr: "Français",
    select_language: "Select Language",

    // Footer
    footer_rights: "All rights reserved",
    footer_made_with: "Made with",
    footer_for: "for University of Jordan students",
    footer_disclaimer: "This website is unofficial, and it is an independent student platform prepared by Yousef Khaled Abdulhadi.",

    // Admin Panel
    admin_title: "Telegram summaries group",
    admin_subtitle: "Add and manage website content",
    admin_add_course: "Add New Course",
    admin_add_file: "Add File",
    admin_college: "College",
    admin_specialization: "Specialization",
    admin_course_name: "Course Name",
    admin_course_name_ar: "Course Name (Arabic)",
    admin_course_name_en: "Course Name (English)",
    admin_course_name_fr: "Course Name (French)",
    admin_instructor: "Instructor Name",
    admin_instructors: "Instructor Names (comma-separated)",
    admin_prepared_by: "Prepared by",
    admin_file_type: "File Type",
    admin_file_name: "File Name",
    admin_file_path: "File Path (inside assets/files/)",
    admin_file_title: "File Title",
    admin_file_title_ar: "File Title (Arabic)",
    admin_file_title_en: "File Title (English)",
    admin_file_title_fr: "File Title (French)",
    admin_add_btn: "Add",
    admin_save_btn: "Save",
    admin_cancel_btn: "Cancel",
    admin_edit_btn: "Edit",
    admin_delete_btn: "Delete",
    admin_export_btn: "Export data.js",
    admin_clear_btn: "Clear Temporary Data",
    admin_pending_data: "Data Added in This Session",
    admin_no_pending: "No data added yet",
    admin_instructions: "Instructions",
    admin_note_files: "Note: PDF files must be uploaded manually to the assets/files folder",
    admin_export_success: "File exported successfully! Please replace the old data.js with the new file",
    admin_clear_confirm: "Are you sure you want to clear all temporary data? Make sure you have downloaded the new data.js first.",
    admin_type_summary: "Summary",
    admin_type_testbank: "Test Bank",
    admin_select_college: "-- Select College --",
    admin_select_specialization: "-- Select Specialization --",
    admin_new_college: "+ Add New College",
    admin_new_specialization: "+ Add New Specialization",
    admin_college_icon: "College Icon (Emoji)",
    admin_college_color: "College Color",
    admin_added_courses: "Added Courses",
    admin_col_college: "College",
    admin_col_specialization: "Specialization",
    admin_col_course: "Course",
    admin_col_instructor: "Instructor",
    admin_col_files: "Files",
    admin_col_actions: "Actions",
    admin_session_notice: "Data is saved in browser. If you close the page, your data will be here when you return.",

    // General
    loading: "Loading...",
    error: "An error occurred",
    back: "Back",
    close: "Close",
    confirm: "Confirm",
    cancel: "Cancel",
    yes: "Yes",
    no: "No",
    view_all: "View All",
    show_more: "Show More",
    collapse: "Collapse",
  },

  fr: {
    // Site Meta
    site_title: "Résumés UJ",
    site_subtitle: "Plateforme de résumés de cours et banques de tests de l'Université de Jordanie",
    site_description: "Trouvez facilement des résumés de cours et des banques de tests",

    // Navigation
    nav_home: "Accueil",
    nav_colleges: "Facultés",
    nav_search: "Recherche",
    nav_admin: "Administration",

    // Hero Section
    hero_title: "Résumés de l'Université de Jordanie",
    hero_subtitle: "Trouvez facilement des résumés de cours et des banques de tests pour toutes les facultés",
    search_placeholder: "Rechercher un cours, une spécialisation ou un enseignant...",
    search_button: "Rechercher",

    // Sections
    colleges_title: "Facultés",
    colleges_subtitle: "Sélectionnez une faculté pour parcourir les spécialisations et les cours",
    specializations_title: "Spécialisations",
    courses_title: "Cours",
    files_title: "Fichiers",

    // Tabs
    tab_summaries: "Résumés",
    tab_testbank: "Banque de tests",
    tab_all: "Tout",

    // Course Page
    course_instructor: "Enseignant",
    course_instructors: "Enseignants",
    course_prepared_by: "Préparé par",
    course_college: "Faculté",
    course_specialization: "Spécialisation",
    course_files_count: "Nombre de fichiers",
    no_files: "Aucun fichier disponible pour le moment",

    // File Cards
    file_download: "Télécharger",
    file_view: "Afficher",
    file_summary: "Résumé",
    file_testbank: "Banque de tests",
    file_prepared_by: "Préparé par",

    // Breadcrumb
    breadcrumb_home: "Accueil",
    breadcrumb_colleges: "Facultés",

    // Search Results
    search_results: "Résultats de recherche",
    search_results_for: "Résultats de recherche pour",
    search_no_results: "Aucun résultat trouvé",
    search_no_results_desc: "Essayez des mots-clés différents ou parcourez les facultés",
    search_results_count: "résultat",
    search_results_count_plural: "résultats",

    // Filter
    filter_all: "Tout",
    filter_by_college: "Par faculté",
    filter_by_specialization: "Par spécialisation",

    // Theme
    theme_dark: "Mode sombre",
    theme_light: "Mode clair",
    toggle_theme: "Changer le thème",

    // Language
    lang_ar: "العربية",
    lang_en: "English",
    lang_fr: "Français",
    select_language: "Choisir la langue",

    // Footer
    footer_rights: "Tous droits réservés",
    footer_made_with: "Fait avec",
    footer_for: "pour les étudiants de l'Université de Jordanie",
    footer_disclaimer: "Ce site est non officiel et constitue une plateforme étudiante indépendante préparée par Yousef Khaled Abdulhadi.",

    // Admin Panel
    admin_title: "Groupe Telegram des résumés",
    admin_subtitle: "Ajouter et gérer le contenu du site",
    admin_add_course: "Ajouter un nouveau cours",
    admin_add_file: "Ajouter un fichier",
    admin_college: "Faculté",
    admin_specialization: "Spécialisation",
    admin_course_name: "Nom du cours",
    admin_course_name_ar: "Nom du cours (Arabe)",
    admin_course_name_en: "Nom du cours (Anglais)",
    admin_course_name_fr: "Nom du cours (Français)",
    admin_instructor: "Nom de l'enseignant",
    admin_instructors: "Noms des enseignants (séparés par des virgules)",
    admin_prepared_by: "Préparé par",
    admin_file_type: "Type de fichier",
    admin_file_name: "Nom du fichier",
    admin_file_path: "Chemin du fichier (dans assets/files/)",
    admin_file_title: "Titre du fichier",
    admin_file_title_ar: "Titre du fichier (Arabe)",
    admin_file_title_en: "Titre du fichier (Anglais)",
    admin_file_title_fr: "Titre du fichier (Français)",
    admin_add_btn: "Ajouter",
    admin_save_btn: "Enregistrer",
    admin_cancel_btn: "Annuler",
    admin_edit_btn: "Modifier",
    admin_delete_btn: "Supprimer",
    admin_export_btn: "Exporter data.js",
    admin_clear_btn: "Effacer les données temporaires",
    admin_pending_data: "Données ajoutées dans cette session",
    admin_no_pending: "Aucune donnée ajoutée pour l'instant",
    admin_instructions: "Instructions",
    admin_note_files: "Remarque : Les fichiers PDF doivent être téléversés manuellement dans le dossier assets/files",
    admin_export_success: "Fichier exporté avec succès ! Veuillez remplacer l'ancien data.js par le nouveau fichier",
    admin_clear_confirm: "Êtes-vous sûr de vouloir effacer toutes les données temporaires ? Assurez-vous d'avoir téléchargé le nouveau data.js d'abord.",
    admin_type_summary: "Résumé",
    admin_type_testbank: "Banque de tests",
    admin_select_college: "-- Sélectionner une faculté --",
    admin_select_specialization: "-- Sélectionner une spécialisation --",
    admin_new_college: "+ Ajouter une nouvelle faculté",
    admin_new_specialization: "+ Ajouter une nouvelle spécialisation",
    admin_college_icon: "Icône de la faculté (Emoji)",
    admin_college_color: "Couleur de la faculté",
    admin_added_courses: "Cours ajoutés",
    admin_col_college: "Faculté",
    admin_col_specialization: "Spécialisation",
    admin_col_course: "Cours",
    admin_col_instructor: "Enseignant",
    admin_col_files: "Fichiers",
    admin_col_actions: "Actions",
    admin_session_notice: "Les données sont sauvegardées dans le navigateur. Si vous fermez la page, vos données seront ici à votre retour.",

    // General
    loading: "Chargement...",
    error: "Une erreur s'est produite",
    back: "Retour",
    close: "Fermer",
    confirm: "Confirmer",
    cancel: "Annuler",
    yes: "Oui",
    no: "Non",
    view_all: "Voir tout",
    show_more: "Voir plus",
    collapse: "Réduire",
  },
};

// Helper: Get translation key for current language with fallback to Arabic
function t(key, lang) {
  const currentLang = lang || window.currentLang || "ar";
  if (translations[currentLang] && translations[currentLang][key] !== undefined) {
    return translations[currentLang][key];
  }
  // Fallback to Arabic
  if (translations.ar && translations.ar[key] !== undefined) {
    return translations.ar[key];
  }
  return key;
}

// Helper: Get multilingual name/value with fallback to Arabic
function getName(obj, lang) {
  if (!obj) return "";
  const currentLang = lang || window.currentLang || "ar";
  if (typeof obj === "string") return obj;
  if (obj[currentLang] !== undefined && obj[currentLang] !== "") return obj[currentLang];
  if (obj.ar !== undefined) return obj.ar; // Fallback to Arabic
  return "";
}
