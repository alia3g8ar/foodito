"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./image-slideshow.module.css";

import kebabImg from "@/assets/kebab.jpg";
import zereshkPoloImg from "@/assets/zereshkpolo.jpg";
import ghormehSabziImg from "@/assets/ghormehsabzi.jpg";
import fesenjanImg from "@/assets/fesenjan.jpg";
import dolmehImg from "@/assets/dolmeh.jpg";
import mirzaGhasemiImg from "@/assets/mirzaghasemi.jpg";
import abgooshtImg from "@/assets/abgoosht.jpg";

const images = [
  { image: kebabImg, alt: "کباب کوبیده خوشمزه و لذیذ" },
  { image: zereshkPoloImg, alt: "زرشک پلو با مرغ" },
  { image: ghormehSabziImg, alt: "خورشت قرمه‌سبزی سنتی" },
  { image: fesenjanImg, alt: "خورشت فسنجان با گردو و رب انار" },
  { image: dolmehImg, alt: "دلمه برگ مو سنتی" },
  { image: mirzaGhasemiImg, alt: "میرزاقاسمی شمالی" },
  { image: abgooshtImg, alt: "آبگوشت اصیل ایرانی" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
