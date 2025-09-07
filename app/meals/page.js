import { Suspense } from "react";
import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          غذاهای خوشمزه، ساخته شده{" "}
          <span className={classes.highlight}>توسط شما</span>
        </h1>
        <p>
          غذای مورد علاقه خود را از مجموعه گسترده غذاهای موجود انتخاب کنید
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">دستور پخت خود را به اشتراک بگذارید</Link>
        </p>
      </header>
      
      <main>
        <Suspense
          fallback={<p className={classes.loading}>در حال بارگیری غذاها....</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}