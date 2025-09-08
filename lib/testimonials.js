// دادههای نظرات ثابت
const testimonials = [
  {
    id: 1,
    customer_name: "علی رضایی",
    customer_avatar: "/images/avatar1.jpg",
    review_text: "واقعاً عالی! دستور پخت قورمه سبزی فوقالعاده بود. خانوادهام عاشقش شدن و حالا هر هفته ازم میخوان این غذا رو درست کنم.",
    rating: 5,
    review_date: "1403/02/15"
  },
  {
    id: 2,
    customer_name: "مریم احمدی",
    customer_avatar: "/images/avatar2.jpg", 
    review_text: "سایت خیلی کاربردیه و دستورات واضح و قابل فهم هستن. ممنون از تیم سازنده! هر روز یه چیز جدید یاد میگیرم.",
    rating: 5,
    review_date: "1403/02/10"
  },
  {
    id: 3,
    customer_name: "حسن کریمی",
    customer_avatar: "/images/avatar3.jpg",
    review_text: "کباب کوبیدهای که درست کردم با این دستور، بهترین کبابی بود که تا حالا خوردم. دوستام فکر میکردن از رستوران خریدم!",
    rating: 4,
    review_date: "1403/02/08"
  },
  {
    id: 4,
    customer_name: "فاطمه موسوی",
    customer_avatar: "/images/avatar4.jpg",
    review_text: "عاشق این سایتم! هر روز یه غذای جدید یاد میگیرم. خیلی ممنون! بچه هام هم حالا کمکم میکنن تو آشپزی.",
    rating: 5,
    review_date: "1403/02/05"
  },
  {
    id: 5,
    customer_name: "محمد نوری",
    customer_avatar: "/images/avatar5.jpg",
    review_text: "فسنجانی که با این دستور درست کردم، دقیقاً مثل فسنجان مادربزرگم شده بود! خاطرات کودکیم زنده شد.",
    rating: 4,
    review_date: "1403/01/28"
  },
  {
    id: 6,
    customer_name: "زهرا حسینی",
    customer_avatar: "/images/avatar6.jpg",
    review_text: "آش رشته عالی بود! مهمانام فکر میکردن از آشپز حرفه ای سفارش دادم. دستتون درد نکنه واقعاً.",
    rating: 5,
    review_date: "1403/01/20"
  }
];

export async function getTestimonials() {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return testimonials;
}