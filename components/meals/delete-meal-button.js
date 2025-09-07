"use client";
import { deleteMealAction } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import classes from "./delete-meal-button.module.css";

export default function DeleteMealButton({ slug, title }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const result = await deleteMealAction(slug);
      if (result.success) {
        router.push("/meals");
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert("خطا در حذف غذا");
    } finally {
      setIsDeleting(false);
      setShowConfirm(false);
    }
  };

  if (showConfirm) {
    return (
      <div className={classes.confirmDialog}>
        <p>آیا مطمئن هستید که می‌خواهید &quot;{title}&quot; را حذف کنید؟</p>
        <div className={classes.buttons}>
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className={classes.deleteBtn}
          >
            {isDeleting ? "در حال حذف..." : "بله، حذف کن"}
          </button>
          <button
            onClick={() => setShowConfirm(false)}
            className={classes.cancelBtn}
          >
            انصراف
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => setShowConfirm(true)}
      className={classes.deleteButton}
    >
      حذف غذا
    </button>
  );
}
