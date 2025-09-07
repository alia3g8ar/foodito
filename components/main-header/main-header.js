"use client";
import { useState } from "react";
import Link from "next/link";
import LogoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={LogoImg} alt="A table full of delicious food!" priority />
          فودیتو
        </Link>
        <button 
          className={classes.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`${classes.nav} ${isMenuOpen ? classes.navOpen : ''}`}>
          <ul>
            <li>
              <NavLink href="/meals">یه نگاهی به غذاها بنداز</NavLink>
            </li>
            <li>
              <NavLink href="/community"> جمع خوراکیبازا </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}