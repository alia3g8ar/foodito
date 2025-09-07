import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import classes from "./page.module.css";

export const metadata = {
  title: "کامیونیتی - فودیتو",
  description:
    "به جمع عاشقان غذا بپیوندید و دستورهای غذایی خود را به اشتراک بگذارید",
};

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          یه عشق مشترک: <span className={classes.highlight}>غذا</span>
        </h1>
        <p>به جمعمون بپیوند و دستورای غذای مورد علاقتو به اشتراک بذار!</p>
      </header>
      <main className={classes.main}>
        <h2>مزایای جامعه ما</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="یک غذای خوشمزه" />
            <p>اشتراک‌گذاری و کشف دستورهای جدید</p>
          </li>
          <li>
            <Image src={communityIcon} alt="جمعی از آدم‌ها در حال آشپزی" />
            <p>پیدا کردن دوستای جدید و آدمای هم‌سلیقه</p>
          </li>
          <li>
            <Image src={eventsIcon} alt="جمعی از آدم‌ها در یک رویداد آشپزی" />
            <p>شرکت در رویدادهای اختصاصی</p>
          </li>
        </ul>
      </main>
    </>
  );
}
