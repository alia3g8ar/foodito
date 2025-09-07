"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import classes from "./testimonials.module.css";

export default function Testimonials({ testimonials }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={index < rating ? classes.starFilled : classes.starEmpty}
      >
        ★
      </span>
    ));
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2);
  };

  return (
    <section className={classes.testimonialsSection}>
      <div className={classes.container}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={classes.title}>نظرات کاربران</h2>
          <div className={classes.divider}></div>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          className={classes.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={classes.card}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className={classes.cardHeader}>
                <div className={classes.avatar}>
                  {getInitials(testimonial.customer_name)}
                </div>
                <div className={classes.customerInfo}>
                  <h3 className={classes.customerName}>
                    {testimonial.customer_name}
                  </h3>
                  <div className={classes.rating}>
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className={classes.date}>
                    {testimonial.review_date}
                  </span>
                </div>
              </div>
              <p className={classes.reviewText}>
                &quot;{testimonial.review_text}&quot;
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <div className={classes.carousel}>
          <button className={classes.carouselBtn} onClick={prevSlide}>
            &#8250;
          </button>

          <motion.div
            className={classes.carouselCard}
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className={classes.cardHeader}>
              <div className={classes.avatar}>
                {getInitials(testimonials[currentSlide].customer_name)}
              </div>
              <div className={classes.customerInfo}>
                <h3 className={classes.customerName}>
                  {testimonials[currentSlide].customer_name}
                </h3>
                <div className={classes.rating}>
                  {renderStars(testimonials[currentSlide].rating)}
                </div>
                <span className={classes.date}>
                  {testimonials[currentSlide].review_date}
                </span>
              </div>
            </div>
            <p className={classes.reviewText}>
              &quot;{testimonials[currentSlide].review_text}&quot;
            </p>
          </motion.div>

          <button className={classes.carouselBtn} onClick={nextSlide}>
            &#8249;
          </button>
        </div>

        <div className={classes.carouselDots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${classes.dot} ${
                index === currentSlide ? classes.activeDot : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
