import Link from "next/link";
import styles from "./page.module.css";
import ImageSlideshow from "@/components/images/images-slideshow";
import Testimonials from "@/components/reviews/testimonials";
import { getTestimonials } from "@/lib/testimonials";

export default async function Home() {
  const testimonials = await getTestimonials();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={styles.hero}>
            <h1>  رسپی های لذیذ و خوشمزه برای طرفتاران خوشمزگی فودیتویی</h1>
            <p>بچش و با بقیه به اشتراک بذار؛ از هر گوشه دنیا!</p>
          </div>
          <div className={styles.cta}>
            <Link href="/community">عضویت در جامعه</Link>
            <Link href="/meals">گشتوگذار بین غذاها</Link>
          </div>
        </div>
      </header>

      <main>
        <Testimonials testimonials={testimonials} />
      </main>
    </>
  );
}
