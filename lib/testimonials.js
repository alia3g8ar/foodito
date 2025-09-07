import sql from "better-sqlite3";

const db = sql("meals.db");

db.prepare(`
  CREATE TABLE IF NOT EXISTS testimonials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_name TEXT NOT NULL,
    customer_avatar TEXT NOT NULL,
    review_text TEXT NOT NULL,
    rating INTEGER NOT NULL,
    review_date TEXT NOT NULL
  )
`).run();

const sampleTestimonials = [
  {
    customer_name: "علی رضایی",
    customer_avatar: "/images/avatar1.jpg",
    review_text: "واقعاً عالی! دستور پخت قورمه سبزی فوقالعاده بود. خانوادهام عاشقش شدن و حالا هر هفته ازم میخوان این غذا رو درست کنم.",
    rating: 5,
    review_date: "1403/02/15"
  },
  {
    customer_name: "مریم احمدی",
    customer_avatar: "/images/avatar2.jpg", 
    review_text: "سایت خیلی کاربردیه و دستورات واضح و قابل فهم هستن. ممنون از تیم سازنده! هر روز یه چیز جدید یاد میگیرم.",
    rating: 5,
    review_date: "1403/02/10"
  },
  {
    customer_name: "حسن کریمی",
    customer_avatar: "/images/avatar3.jpg",
    review_text: "کباب کوبیدهای که درست کردم با این دستور، بهترین کبابی بود که تا حالا خوردم. دوستام فکر میکردن از رستوران خریدم!",
    rating: 4,
    review_date: "1403/02/08"
  },
  {
    customer_name: "فاطمه موسوی",
    customer_avatar: "/images/avatar4.jpg",
    review_text: "عاشق این سایتم! هر روز یه غذای جدید یاد میگیرم. خیلی ممنون! بچه هام هم حالا کمکم میکنن تو آشپزی.",
    rating: 5,
    review_date: "1403/02/05"
  },
  {
    customer_name: "محمد نوری",
    customer_avatar: "/images/avatar5.jpg",
    review_text: "فسنجانی که با این دستور درست کردم، دقیقاً مثل فسنجان مادربزرگم شده بود! خاطرات کودکیم زنده شد.",
    rating: 4,
    review_date: "1403/01/28"
  },
  {
    customer_name: "زهرا حسینی",
    customer_avatar: "/images/avatar6.jpg",
    review_text: "آش رشته عالی بود! مهمانام فکر میکردن از آشپز حرفه ای سفارش دادم. دستتون درد نکنه واقعاً.",
    rating: 5,
    review_date: "1403/01/20"
  }
];

const existingTestimonials = db.prepare("SELECT COUNT(*) as count FROM testimonials").get();

if (existingTestimonials.count === 0) {
  const insertTestimonial = db.prepare(`
    INSERT INTO testimonials (customer_name, customer_avatar, review_text, rating, review_date)
    VALUES (?, ?, ?, ?, ?)
  `);

  sampleTestimonials.forEach(testimonial => {
    insertTestimonial.run(
      testimonial.customer_name,
      testimonial.customer_avatar,
      testimonial.review_text,
      testimonial.rating,
      testimonial.review_date
    );
  });
}

export async function getTestimonials() {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return db.prepare("SELECT * FROM testimonials ORDER BY id DESC").all();
}