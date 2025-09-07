"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import LogoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (
        isMenuOpen &&
        !e.target.closest(`.${classes.nav}`) &&
        !e.target.closest(`.${classes.hamburger}`)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={LogoImg} alt="A table full of delicious food!" priority />
          فودیتو
        </Link>

        {/* Cool Hamburger Button */}
        <button
          className={`${classes.hamburger} ${
            isMenuOpen ? classes.hamburgerOpen : ""
          }`}
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={classes.hamburgerLine}></span>
          <span className={classes.hamburgerLine}></span>
          <span className={classes.hamburgerLine}></span>
        </button>

        {/* Cool Navigation Menu */}
        <nav className={`${classes.nav} ${isMenuOpen ? classes.navOpen : ""}`}>
          <div className={classes.navOverlay}></div>
          <div className={classes.navContent}>
            <ul className={classes.navList}>
              <li className={classes.navItem}>
                <NavLink href="/meals" onClick={handleNavClick}>
                  <span className={classes.navIcon}>🍽️</span>
                  <span className={classes.navText}>
                    یه نگاهی به غذاها بنداز
                  </span>
                </NavLink>
              </li>
              <li className={classes.navItem}>
                <NavLink href="/community" onClick={handleNavClick}>
                  <span className={classes.navIcon}>👥</span>
                  <span className={classes.navText}>جمع خوراکیبازا</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
