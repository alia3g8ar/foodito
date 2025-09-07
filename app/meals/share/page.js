"use client";
import { useFormState } from "react-dom";
import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import { shareMeal } from "@/lib/actions";
import MealsFormSubmit from "@/components/meals/meals-form-submit";

export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, { message: null });

  return (
    <>
      <header className={classes.header}>
        <h1>
          <span className={classes.highlight}>غذای مورد علاقه</span> خود را به
          اشتراک بگذارید
        </h1>
        <p>یا هر غذایی که فکر می‌کنید باید با دیگران به اشتراک گذاشته شود!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">نام شما</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">ایمیل شما</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">عنوان</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">خلاصه کوتاه</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">دستور پخت</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="تصویر غذا" name="image" />
          {state.message && (
            <p>
              {state.message === "Invalid input"
                ? "ورودی نامعتبر"
                : state.message}
            </p>
          )}
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
