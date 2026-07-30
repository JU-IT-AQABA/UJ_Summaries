# ملخصات الجامعة الأردنية - UJ Summaries Platform

منصة ملخصات وتيست بانكات مواد الجامعة الأردنية | Static website hosted on GitHub Pages.

##  Live Site
[رابط الموقع على GitHub Pages](https://ju-it-aqaba.github.io/UJ_Summaries/)

---

##  هيكل الملفات / File Structure

```
Summaries WebSite/
│
├── index.html           الصفحة الرئيسية (SPA)
├── admin.html           لوحة الإدارة (للاستخدام الشخصي فقط)
├── style.css            ملف CSS الرئيسي (Dark/Light + RTL/LTR)
├── script.js            منطق الموقع الرئيسي (SPA Navigation, Search, Rendering)
├── data.js              بيانات الكليات والتخصصات والمواد والملفات
|__ translations.js      ترجمات الواجهة (AR / EN / FR)

---

##  كيفية إضافة محتوى جديد

### الطريقة 1: استخدام لوحة الإدارة (الأسهل)
1. افتح `admin.html` في المتصفح
2. أضف بيانات المادة والملفات عبر النموذج
3. انسخ ملفات PDF يدوياً إلى مجلد `assets/files/[كلية]/[تخصص]/`
4. اضغط **"تصدير data.js"** لتنزيل الملف المحدَّث
5. استبدل `data.js` القديم بالجديد
6. `git add . && git commit -m "Add new content" && git push`

### الطريقة 2: التعديل المباشر في data.js
افتح `data.js` وأضف مادة جديدة داخل التخصص المناسب:

```js
{
  id: "unique-course-id",
  name: {
    ar: "اسم المادة بالعربي",
    en: "Course Name in English",
    fr: "Nom du cours en Français",
  },
  instructors: [
    { ar: "د. اسم المدرس", en: "Dr. Instructor Name", fr: "Dr. Instructor Name" }
  ],
  files: [
    {
      id: "file-001",
      title: { ar: "ملخص الفصل الأول", en: "Chapter 1 Summary", fr: "Résumé Chapitre 1" },
      type: "summary",  // "summary" أو "testbank"
      preparedBy: { ar: "اسم المُعِد", en: "Preparer Name", fr: "Preparer Name" },
      path: "assets/files/[college-id]/[spec-id]/filename.pdf"
    }
  ]
}
```

---

##  المميزات / Features

| الميزة | التفاصيل |
|--------|----------|
|  Dark / Light Mode | محفوظ في localStorage، بدون وميض عند التحميل |
|  3 لغات | العربية (RTL)، English، Français (LTR) |
|  Responsive | Mobile First، يعمل على جميع الأجهزة |
|  بحث شامل | يبحث في المواد والمدرسين والمُعِدّين والكليات |
|  SPA Navigation | تنقل سلس بدون إعادة تحميل الصفحة |
|  Breadcrumb | مسار تنقل واضح في كل مستوى |
|  Admin Panel | إضافة محتوى + تصدير data.js |

---

##  ملاحظات مهمة

- **لا يوجد Backend**: الموقع ثابت 100% ويعمل على GitHub Pages
- **ملفات PDF**: يجب رفعها يدوياً إلى `assets/files/`
- **admin.html**: للاستخدام الشخصي فقط - لا ترفعه كصفحة عامة
- **localStorage keys**:
  - `site_language`: اللغة المختارة (ar/en/fr)
  - `site_theme`: الثيم المختار (dark/light)
  - `pending_admin_data`: بيانات الأدمن المؤقتة
  - `pending_admin_colleges`: كليات جديدة مضافة عبر الأدمن

---

##  النشر على GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit: UJ Summaries Platform"
git remote add origin https://ju-it-aqaba.github.io/UJ_Summaries/
git push -u origin main
```
Made with love for University of Jordan students by Yousef Khaled Abdelhadi
