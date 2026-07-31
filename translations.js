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
    nav_admin: "مجموعة التيليغرام للملخصات",

    // Hero Section
    hero_title: "ملخصات الجامعة الأردنية",
    hero_subtitle: "اعثر على ملخصات المواد وتيست بانكات جميع الكليات بسهولة",
    search_placeholder: "ابحث عن مادة، تخصص، أو مدرس...",
    search_button: "بحث",

    // Sections
    colleges_title: "الكليات",
    colleges_subtitle: "اختر الكلية للوصول إلى التخصصات والمواد",
    common_courses_title: "مواد الجامعة المشتركة",
    common_courses_subtitle: "مواد الجامعة الإجبارية والاختيارية لجميع التخصصات",
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
    webview_warning: "تنبيه: لتتمكن من تحميل الملفات بنجاح على الهاتف، يرجى فتح الموقع في متصفح الهاتف الخارجي (Safari أو Chrome) عن طريق خيارات التطبيق بالأعلى.",
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
    footer_disclaimer: ".هذا الموقع غير رسمي وهو منصة طلابية مستقلة من اعداد يوسف خالد عبدالهادي",

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
    pwa_install_title: "تنزيل التطبيق",
    pwa_install_desc: "ثبّت موقع الملخصات على هاتفك للوصول السريع وتصفح المواد بدون إنترنت!",
    pwa_install_btn: "تنزيل",
    pwa_update_title: "تحديث متوفر!",
    pwa_update_desc: "يتوفر تحديث جديد للملخصات والمواد. اضغط هنا لتحديث الصفحة.",
    pwa_update_btn: "تحديث الآن",
    toast_new_data: "تمت إضافة مواد جديدة! تم تحديث الصفحة تلقائياً.",
    nav_upload: "شاركنا بملخصك",
    contribution_title: "شاركنا ملفاتك وملخصاتك!",
    contribution_desc: "هل لديك تلخيص، أسئلة سنوات، أو أوراق عمل؟ ساهم في مساعدة زملائك بالجامعة وارفعها لنا عبر نموذج جوجل.",
    contribution_btn: "ارفع ملف الآن",
    no_files_desc: "كن أول من يشارك ملخص أو تيست بانك لهذه المادة وساعد زملائك!",
    nav_about: "عن المبادرة",
    about_hero_title: "عن مبادرة تدوين المصادر التعليمية",
    about_hero_subtitle: "بناء المعرفة الأكاديمية ونشرها لخدمة طلاب الجامعة الأردنية",
    about_founder_title: "مؤسس المبادرة",
    about_founder_info: "يوسف خالد عبدالهادي - خريج الجامعة الأردنية (فرع العقبة)، بمعدل 3.97/4.00 (الأول على الكلية). الهدف كان مساعدة زملائي الطلبة، خصوصاً من لديهم وظائف وينشغلون أغلب الوقت، من خلال توفير كافة المصادر الدراسية ملخصة في منصة واحدة يستطيعون الدراسة منها بكل طمأنينة ودون حيرة من أين يبدأون.",
    about_mission_title: "الرسالة",
    about_mission_desc: "تيسير وتبسيط الرحلة الأكاديمية لطلاب الجامعة الأردنية من خلال توفير مصادر تعليمية موثقة ومنظمة في مكان واحد.",
    about_goal_title: "الهدف والدافع",
    about_goal_desc: "توفير كافة المصادر الدراسية ملخصة بمكان واحد حتى يستطيع الطلبة الدراسة دون الخوف من عدم معرفة من اين يبدأون وماذا يدرسون.",
    about_statement_title: "بيان إطلاق مبادرة تدوين المصادر التعليمية",
    about_statement_desc: "بفضل الله وتوفيقه، أعلن عن إتمام مبادرتي التعليمية التي تضمنت توفير تلاخيص لـ 34 مادة من مواد كلية نظم وتكنولوجيا المعلومات وبعض مواد الجامعة الإجبارية والاختيارية، بالإضافة إلى 36 بنك أسئلة (Test Bank).",
    about_academic_title: "الأسس الأكاديمية للمبادرة",
    about_academic_subtitle: "لقد تم بناء هذه المبادرة وتطبيقها استناداً إلى ما تعلمته من مساقات دراسية بإشراف نخبة من أساتذتي الكرام:",
    about_doc_title: "التوثيق والمنهجية",
    about_doc_desc: "استلهاماً من مادة (توثيق وأخلاقيات الحاسوب) لدى الأستاذ الدكتور عصام الحديد، حيث تم توثيق كل معلومة باسم الدكتور ومصدرها واسم الكلية بكل أمانة علمية.",
    about_know_title: "تنظيم المعرفة",
    about_know_desc: "بتطبيق مفاهيم مادة (نظم إدارة المعرفة) لدى الأستاذ الدكتور عصام الحديد، تم تجميع الموارد بطريقة منظمة تسهل الوصول إليها.",
    about_quality_title: "الجودة والموثوقية",
    about_quality_desc: "من خلال ما تعلمته في مادتي (إدارة مصادر المعلومات) و(إدارة المشاريع والجودة) لدى الأستاذ الدكتور نزيه غطاشة، تم جمع المعلومات من مصادر موثوقة ومراجعتها بدقة لضمان خلوها من العيوب قبل النشر.",
    about_tech_title: "التنفيذ التقني",
    about_tech_desc: "بناءً على مادة (تطوير تطبيقات الويب 1) لدى الدكتور رامي الخوالدة ومادة (النشر على الإنترنت) لدى الدكتور عرابي المناصير، تم تصميم موقع إلكتروني مخصص لتنظيم هذه الملخصات وتصنيفها حسب التخصص ونوع المادة.",
    about_thanks_title: "رسائل شكر وتقدير",
    about_thanks_subtitle: "أتوجه بوافر الشكر والتقدير إلى كلية نظم وتكنولوجيا المعلومات بكافة كوادرها، وإلى السادة الدكاترة الأفاضل الذين تعاقبوا على رئاسة الجامعة الأردنية فرع العقبة خلال مسيرتي الدراسية (2022-2026):",
    about_thanks_presidents: "أ.د. عامر سلمان، أ.د. غالب يوسف عباسي، أ.د. نزيه البطوش، أ.د. صالح الرواضية (رؤساء الجامعة الأردنية فرع العقبة المتعاقبين).",
    about_thanks_special: "شكر خاص ومستحق:",
    about_thanks_mother: "إلى والدتي الغالية: الداعم الأول ودعاؤها المستمر الذي رافقني من الحضانة وحتى هذه اللحظة، فلكِ كل الحب والامتنان.",
    about_thanks_sarayrah: "للدكتور أحمد الصرايرة: صاحب أول محاضرة لي في الجامعة (بتاريخ 21/2/2022 الساعة الثامنة صباحاً بقاعة 143)، والذي كان لكلماته وتحفيزه أثر كبير في انطلاقتي الأكاديمية.",
    about_partners_title: "شركاء النجاح (فريق المتطوعين)",
    about_partners_subtitle: "شكر خاص لكل من ساهم بملخص أو في تطور هذه المبادرة لتشمل كل تخصصات الجامعة الأردنية فرع العقبة:",
    about_quality_standards: "ملاحظة جودة: ملخصات كلية نظم وتكنولوجيا المعلومات تحقق معايير الجودة بالكامل وتمت مراجعتها عدة مرات.",
    about_sign: "يوسف خالد عبدالهادي | 4/2/2026",
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
    nav_admin: "Telegram summaries group",

    // Hero Section
    hero_title: "University of Jordan Summaries",
    hero_subtitle: "Find course summaries and test banks for all colleges easily",
    search_placeholder: "Search for a course, specialization, or instructor...",
    search_button: "Search",

    // Sections
    colleges_title: "Colleges",
    colleges_subtitle: "Select a college to browse specializations and courses",
    common_courses_title: "Common University Courses",
    common_courses_subtitle: "Compulsory and elective university courses for all majors",
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
    webview_warning: "Notice: To download files successfully on your phone, please open this site in your external browser (Safari or Chrome) using the options menu at the top.",
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
    pwa_install_title: "Install Application",
    pwa_install_desc: "Install the summaries app on your phone for quick access and offline browsing!",
    pwa_install_btn: "Install",
    pwa_update_title: "Update Available!",
    pwa_update_desc: "A new version of summaries is available. Click here to refresh.",
    pwa_update_btn: "Update Now",
    toast_new_data: "New materials added! The page has been updated automatically.",
    nav_upload: "Share your summary",
    contribution_title: "Share your files and summaries!",
    contribution_desc: "Do you have summaries, test banks, or worksheets? Help your university classmates and upload them via Google Form.",
    contribution_btn: "Upload File Now",
    no_files_desc: "Be the first to share a summary or test bank for this course and help your classmates!",
    nav_about: "About the Initiative",
    about_hero_title: "About UJ Summaries Initiative",
    about_hero_subtitle: "Building academic knowledge and sharing resources to serve UJ students",
    about_founder_title: "Initiative Founder",
    about_founder_info: "Yousef Khaled Abdulhadi - Graduate of the University of Jordan (Aqaba branch), GPA 3.97/4.00 (First in Class of the College). The goal was to assist my fellow students, especially those who work jobs and are busy most of the time, by collecting and organizing all study materials into a single platform so they can study with confidence without wondering where to begin.",
    about_mission_title: "Our Mission",
    about_mission_desc: "To simplify the academic journey for University of Jordan students by providing well-documented, organized resources in one place.",
    about_goal_title: "Goal & Motivation",
    about_goal_desc: "To provide all study resources summarized in one place so students can study without fear of not knowing where to start and what to study.",
    about_statement_title: "Launch Statement of the Initiative",
    about_statement_desc: "By the grace of God, I announce the completion of my educational initiative which included providing summaries for 34 courses in the College of Information Technology and some compulsory/elective university courses, alongside 36 comprehensive test banks.",
    about_academic_title: "Academic Foundations",
    about_academic_subtitle: "This initiative was structured and built upon academic methodologies learned from my courses, under the supervision of my professors:",
    about_doc_title: "Documentation & Ethics",
    about_doc_desc: "Inspired by the 'Computer Ethics and Documentation' course under Prof. Issam Al-Hadid, ensuring every resource is documented with the instructor's name and source with academic integrity.",
    about_know_title: "Knowledge Organization",
    about_know_desc: "Applying concepts from the 'Knowledge Management Systems' course under Prof. Issam Al-Hadid to gather and organize files for quick, user-friendly access.",
    about_quality_title: "Quality & Reliability",
    about_quality_desc: "Grounded in the 'Information Resources Management' and 'Project & Quality Management' courses under Prof. Nazeeh Ghattasheh, to inspect and verify materials for high reliability.",
    about_tech_title: "Technical Implementation",
    about_tech_desc: "Using skills from 'Web Application Development 1' under Dr. Rami Al-Khawaldeh and 'Internet Publishing' under Dr. Orabi Al-Manaseer to build the platform and structure the content.",
    about_thanks_title: "Acknowledgements & Appreciations",
    about_thanks_subtitle: "Special thanks and appreciation to the College of Information Technology staff, and to the presidents of the University of Jordan Aqaba branch during my academic journey (2022-2026):",
    about_thanks_presidents: "Prof. Amer Salman, Prof. Ghaleb Yousef Abbasi, Prof. Nazeeh Al-Batoush, Prof. Saleh Al-Rawadieh (Former Presidents of UJ Aqaba).",
    about_thanks_special: "Special Dedications:",
    about_thanks_mother: "To my beloved mother: My primary supporter whose continuous prayers accompanied me from preschool to this moment. All my love and gratitude.",
    about_thanks_sarayrah: "To Dr. Ahmed Al-Sarayrah: Teacher of my very first university lecture (on 21/2/2022 at 8:00 AM, Room 143), whose motivating words had a great impact on my academic launch.",
    about_partners_title: "Partners of Success (Volunteer Team)",
    about_partners_subtitle: "Special gratitude to everyone who contributed summaries or supported the expansion of this initiative to cover all specializations:",
    about_quality_standards: "Quality Note: IT College summaries fully satisfy academic quality standards and have been verified and reviewed multiple times.",
    about_sign: "Yousef Khaled Abdulhadi | 4/2/2026",
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
    nav_admin: "Groupe Telegram des résumés",

    // Hero Section
    hero_title: "Résumés de l'Université de Jordanie",
    hero_subtitle: "Trouvez facilement des résumés de cours et des banques de tests pour toutes les facultés",
    search_placeholder: "Rechercher un cours, une spécialisation ou un enseignant...",
    search_button: "Rechercher",

    // Sections
    colleges_title: "Facultés",
    colleges_subtitle: "Sélectionnez une faculté pour parcourir les spécialisations et les cours",
    common_courses_title: "Cours universitaires communs",
    common_courses_subtitle: "Cours universitaires obligatoires et optionnels pour toutes les spécialisations",
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
    webview_warning: "Remarque: Pour télécharger des fichiers sur votre téléphone, veuillez ouvrir ce site dans votre navigateur externe (Safari ou Chrome) via le menu d'options en haut.",
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
    footer_disclaimer: "This website is unofficial, and it is an independent student platform prepared by Yousef Khaled Abdulhadi.",

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
    pwa_install_title: "Installer l'application",
    pwa_install_desc: "Installez l'application de résumés pour un accès rapide et une navigation hors ligne!",
    pwa_install_btn: "Installer",
    pwa_update_title: "Mise à jour disponible!",
    pwa_update_desc: "Une nouvelle version est disponible. Cliquez ici pour actualiser.",
    pwa_update_btn: "Mettre à jour",
    toast_new_data: "Nouveaux cours ajoutés! La page a été mise à jour automatiquement.",
    nav_upload: "Partagez votre résumé",
    contribution_title: "Partagez vos fichiers et résumés !",
    contribution_desc: "Avez-vous des résumés, des banques de tests ou des fiches de travail ? Aidez vos camarades et uploadez-les via Google Form.",
    contribution_btn: "Uploader un fichier",
    no_files_desc: "Soyez le premier à partager un résumé ou une banque de tests pour ce cours !",
    nav_about: "À propos",
    about_hero_title: "À propos de l'initiative",
    about_hero_subtitle: "Créer des connaissances académiques et partager des ressources pour servir les étudiants de l'UJ",
    about_founder_title: "Fondateur de l'initiative",
    about_founder_info: "Yousef Khaled Abdulhadi - Diplômé de l'Université de Jordanie (branche d'Aqaba), moyenne 3.97/4.00 (Major de promotion de la faculté). L'objectif principal était d'aider mes camarades étudiants, en particulier ceux qui travaillent et sont occupés la plupart du temps, en rassemblant et en organisant tous les supports d'étude sur une seule plateforme.",
    about_mission_title: "Notre Mission",
    about_mission_desc: "Simplifier le parcours universitaire des étudiants de l'Université de Jordanie en fournissant des ressources documentées et organisées en un seul endroit.",
    about_goal_title: "Objectif & Motivation",
    about_goal_desc: "Fournir toutes les ressources d'études résumées en un seul endroit pour que les étudiants puissent étudier sans craindre de ne pas savoir par où commencer.",
    about_statement_title: "Déclaration de lancement de l'initiative",
    about_statement_desc: "Par la grâce de Dieu, j'annonce la complétion de mon initiative éducative qui a inclus la fourniture de résumés pour 34 cours de la Faculté des TI et de cours généraux, ainsi que 36 banques de tests.",
    about_academic_title: "Fondations académiques",
    about_academic_subtitle: "Cette initiative a été structurée et construite sur la base des méthodologies apprises lors de mes cours, sous la supervision de mes professeurs :",
    about_doc_title: "Documentation et éthique",
    about_doc_desc: "Inspiré par le cours 'Éthique informatique et documentation' sous la direction du professeur Issam Al-Hadid, garantissant la traçabilité et l'intégrité de chaque source.",
    about_know_title: "Organisation des connaissances",
    about_know_desc: "Application des concepts du cours 'Systèmes de gestion des connaissances' sous la direction du professeur Issam Al-Hadid pour classer les fichiers de manière intuitive.",
    about_quality_title: "Qualité et fiabilité",
    about_quality_desc: "Basé sur les cours 'Gestion des ressources d'information' et 'Gestion de projet et qualité' sous la direction du professeur Nazeeh Ghattasheh pour inspecter et vérifier la fiabilité du contenu.",
    about_tech_title: "Implémentation technique",
    about_tech_desc: "En utilisant les compétences du cours 'Développement d'applications Web 1' sous la direction du Dr Rami Al-Khawaldeh et 'Publication sur Internet' sous la direction du Dr Orabi Al-Manaseer.",
    about_thanks_title: "Remerciements & Appréciations",
    about_thanks_subtitle: "Remerciements sincères à tout le personnel de la Faculté des TI, et aux présidents de la branche d'Aqaba de l'Université de Jordanie (2022-2026) :",
    about_thanks_presidents: "Prof. Amer Salman, Prof. Ghaleb Yousef Abbasi, Prof. Nazeeh Al-Batoush, Prof. Saleh Al-Rawadieh (Anciens présidents de l'UJ Aqaba).",
    about_thanks_special: "Dédicaces spéciales :",
    about_thanks_mother: "À ma mère bien-aimée : Mon premier soutien dont les prières continues m'ont accompagné de l'école maternelle jusqu'à ce moment. Tout mon amour et ma gratitude.",
    about_thanks_sarayrah: "Au Dr Ahmed Al-Sarayrah : Enseignant de mon tout premier cours universitaire (le 21/2/2022 à 8h00, salle 143), dont les paroles motivantes ont eu un grand impact.",
    about_partners_title: "Partenaires de réussite (Équipe de bénévoles)",
    about_partners_subtitle: "Gratitude spéciale à tous ceux qui ont contribué à des résumés ou soutenu l'expansion de cette initiative :",
    about_quality_standards: "Note de qualité : Les résumés de la faculté des TI satisfont pleinement aux normes de qualité et ont été révisés plusieurs fois.",
    about_sign: "Yousef Khaled Abdulhadi | 4/2/2026",
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
