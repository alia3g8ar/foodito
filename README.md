# 🍽️ Foodito - پلتفرم اشتراک‌گذاری غذا

<div align="center">

![Foodito Logo](./assets/logo.png)

**پلتفرم مدرن برای اشتراک‌گذاری دستور پخت غذاهای خوشمزه** 🚀

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![SQLite](https://img.shields.io/badge/SQLite-3-green?style=for-the-badge&logo=sqlite)](https://sqlite.org/)
[![CSS Modules](https://img.shields.io/badge/CSS-Modules-pink?style=for-the-badge&logo=css3)](https://github.com/css-modules/css-modules)

</div>

## ✨ ویژگی‌های کلیدی

- 🍳 **اشتراک‌گذاری دستور پخت** - غذاهای خود را با دنیا به اشتراک بگذارید
- 📸 **آپلود تصویر** - تصاویر زیبا از غذاهایتان اضافه کنید
- 🎨 **طراحی مدرن** - رابط کاربری زیبا و ریسپانسیو
- ⚡ **عملکرد بالا** - بهینه‌سازی شده با Next.js 14

## 📁 ساختار پروژه

```
foodito/
├── 📂 app/                    # صفحات Next.js App Router
│   ├── 📂 meals/             # صفحات مربوط به غذاها
│   │   ├── 📂 [mealSlug]/    # صفحه جزئیات غذا
│   │   └── 📂 share/         # صفحه اشتراک‌گذاری غذا
│   ├── 📂 community/         # صفحه انجمن
│   └── 📄 layout.js          # لایوت اصلی
├── 📂 components/            # کامپوننت‌های قابل استفاده مجدد
│   ├── 📂 meals/            # کامپوننت‌های مربوط به غذا
│   ├── 📂 main-header/      # هدر اصلی سایت
│   └── 📂 images/           # اسلایدشو تصاویر
├── 📂 lib/                  # توابع کمکی و منطق کسب‌وکار
│   ├── 📄 meals.js          # عملیات دیتابیس غذاها
│   └── 📄 actions.js        # Server Actions
├── 📂 assets/               # تصاویر و فایل‌های استاتیک
└── 📂 public/               # فایل‌های عمومی
    └── 📂 images/           # تصاویر آپلود شده کاربران
```

## 🛠️ تکنولوژی‌های استفاده شده

| تکنولوژی           | نسخه   | کاربرد                |
| ------------------ | ------ | --------------------- |
| **Next.js**        | 14.x   | فریمورک React با SSR  |
| **React**          | 18.x   | کتابخانه UI           |
| **SQLite**         | 3.x    | دیتابیس محلی          |
| **Better-SQLite3** | Latest | درایور دیتابیس        |
| **CSS Modules**    | -      | استایل‌دهی مدولار     |
| **Slugify**        | Latest | تولید URL دوستانه     |
| **XSS**            | Latest | امنیت و پاکسازی ورودی |
