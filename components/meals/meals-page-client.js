"use client";
import { useState } from "react";
import Link from "next/link";
import classes from "../../app/meals/page.module.css";
import MealsGrid from "./meals-grid";

export default function MealsPageClient({ meals: initialMeals }) {
  const [meals] = useState(initialMeals);

  return (
    <>
      <header className={classes.header}>
        <h1>
          غذاهای خوشمزه، ساخته شده{" "}
          <span className={classes.highlight}>توسط شما</span>
        </h1>
        <p>غذای مورد علاقه خود را از مجموعه گسترده غذاهای موجود انتخاب کنید</p>
        <p className={classes.cta}>
          <Link className={classes.shareButton} href="/meals/share">
            دستور پخت خود را اضافه کنید
          </Link>
        </p>
      </header>

      <main>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
