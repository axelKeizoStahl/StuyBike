'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div id="home" className={styles.navbar}>
      <Image
        src="/logo.jpg"
        width={170}
        height={169}
        alt="logo"
        className={styles.image}
        priority={true}
      />
      <div className={styles.title}>
        <p>STUY BIKE<br/>STUYVESANT HIGHSCHOOL</p>
      </div>
      <div className={styles.navigate}>
        <Link className={"/" == usePathname() ? styles.heavy : styles.light} href="#home">HOME</Link>
        <Link className={"/about" == usePathname() ? styles.heavy : styles.light} href="#about">ABOUT</Link>
        <Link className={"/services" == usePathname() ? styles.heavy : styles.light} href="#services">SERVICES</Link>
        <Link className={"/contact" == usePathname() ? styles.heavy : styles.light} href="#contact">CONTACT</Link>
      </div>
    </div>
  );
}
