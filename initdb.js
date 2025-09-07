const sql = require("better-sqlite3");
const db = sql("meals.db");

const dummyMeals = [
  {
    title: "کباب کوبیده",
    slug: "kabab-kobideh",
    image: "/images/kebab.jpg",
    summary:
      "کباب محبوب ایرانی با گوشت چرخ‌کرده تازه و ادویه‌های خوش‌عطر، سرو شده با برنج زعفرانی.",
    instructions: `
      1. آماده‌سازی گوشت:
         گوشت چرخ‌کرده رو با پیاز رنده‌شده، نمک و فلفل مخلوط کنید.

      2. سیخ کردن:
         مخلوط گوشت رو روی سیخ‌های فلزی پهن کنید.

      3. کباب کردن:
         روی آتش زغال یا گریل داغ بذارید و هر طرف رو چند دقیقه کباب کنید.

      4. سرو:
         با برنج زعفرانی یا نان تازه به همراه سبزی خوردن و دوغ سرو کنید.
    `,
    creator: "علی رضایی",
    creator_email: "ali@example.com",
  },
  {
    title: "زرشک پلو با مرغ",
    slug: "zereshk-polo-ba-morgh",
    image: "/images/zereshkpolo.webp",
    summary: "برنج زعفرانی با زرشک ترش و مرغ خوشمزه سرخ‌شده و سس مخصوص.",
    instructions: `
      1. پخت مرغ:
         مرغ رو با پیاز، ادویه و کمی زعفران تفت بدید و بعد با آب بذارید بپزه.

      2. آماده‌سازی برنج:
         برنج رو آبکش کنید و با زعفران دم بذارید.

      3. تفت دادن زرشک:
         زرشک رو با کمی کره و شکر تفت بدید.

      4. سرو:
         برنج رو توی دیس بکشید، روی اون مرغ و زرشک رو بریزید و سرو کنید.
    `,
    creator: "مریم احمدی",
    creator_email: "maryam@example.com",
  },
  {
    title: "قرمه‌سبزی",
    slug: "ghormeh-sabzi",
    image: "/images/ghormehsabzi.jpg",
    summary: "خورشت محبوب ایرانی با سبزی تازه، لوبیا قرمز و گوشت گوسفندی.",
    instructions: `
      1. تفت دادن سبزی:
         سبزی قرمه‌سبزی رو خوب تفت بدید.

      2. اضافه کردن گوشت:
         گوشت تکه‌ای رو با پیاز سرخ کنید و به سبزی اضافه کنید.

      3. افزودن لوبیا و لیمو عمانی:
         لوبیا قرمز پخته و لیمو عمانی رو اضافه کنید.

      4. پخت نهایی:
         خورشت رو چند ساعت بذارید تا جا بیفته و با برنج سرو کنید.
    `,
    creator: "حسین شریفی",
    creator_email: "hossein@example.com",
  },
  {
    title: "فسنجان",
    slug: "fesenjan",
    image: "/images/fesenjan.jpg",
    summary: "خورشت غلیظ با گردو و رب انار، طعمی ترش و شیرین بی‌نظیر.",
    instructions: `
      1. آسیاب کردن گردو:
         گردوها رو خوب آسیاب کنید.

      2. پخت گردو:
         گردو رو با کمی آب بپزید تا روغن بندازه.

      3. اضافه کردن مرغ و رب انار:
         مرغ رو با پیاز سرخ کنید و همراه رب انار به خورشت اضافه کنید.

      4. پخت نهایی:
         چند ساعت بذارید تا خورشت غلیظ بشه و با برنج سفید سرو کنید.
    `,
    creator: "سارا محمدی",
    creator_email: "sara@example.com",
  },
  {
    title: "دلمه برگ مو",
    slug: "dolmeh-barg-mo",
    image: "/images/dolmeh.jpg",
    summary: "برگ مو پر شده با مخلوط برنج، سبزی و گوشت، خوراکی لذیذ و سنتی.",
    instructions: `
      1. آماده‌سازی مواد میانی:
         برنج نیم‌پز، گوشت چرخ‌کرده، سبزی دلمه و ادویه رو مخلوط کنید.

      2. پیچیدن دلمه:
         مواد رو داخل برگ مو بذارید و محکم بپیچید.

      3. پخت:
         دلمه‌ها رو در قابلمه بچینید، آبغوره یا آبلیمو اضافه کنید و بذارید بپزه.

      4. سرو:
         دلمه‌ها رو گرم همراه ماست سرو کنید.
    `,
    creator: "نگین یوسفی",
    creator_email: "negin@example.com",
  },
  {
    title: "میرزاقاسمی",
    slug: "mirza-ghasemi",
    image: "/images/mirzaghasemi.jpg",
    summary: "غذای شمالی با بادمجون کبابی، سیر و تخم‌مرغ، طعمی خاص و دلچسب.",
    instructions: `
      1. کبابی کردن بادمجون:
         بادمجون‌ها رو روی شعله کباب کنید و پوستشو بگیرید.

      2. تفت دادن سیر:
         سیر رو با کمی روغن تفت بدید.

      3. اضافه کردن بادمجون:
         بادمجون له‌شده رو به سیر اضافه کنید.

      4. افزودن تخم‌مرغ:
         تخم‌مرغ‌ها رو بشکنید و هم بزنید تا پخته بشه. با نون تازه سرو کنید.
    `,
    creator: "لیلا نادری",
    creator_email: "leila@example.com",
  },
  {
    title: "آبگوشت",
    slug: "abgoosht",
    image: "/images/abgoosht.jpg",
    summary:
      "غذای سنتی ایرانی با گوشت، نخود، لوبیا و سیب‌زمینی، خوراکی اصیل و مقوی.",
    instructions: `
      1. آماده‌سازی مواد:
         گوشت، نخود، لوبیا و پیاز رو با ادویه و آب بذارید بپزه.

      2. اضافه کردن سیب‌زمینی:
         در نیمه پخت سیب‌زمینی اضافه کنید.

      3. پخت طولانی:
         چند ساعت بذارید تا حسابی جا بیفته.

      4. سرو:
         آبگوشت رو با نون سنگک و ترشی سرو کنید. گوشت و حبوبات رو بکوبید (گوشت‌کوبیده) و جدا میل کنید.
    `,
    creator: "محسن کریمی",
    creator_email: "mohsen@example.com",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
