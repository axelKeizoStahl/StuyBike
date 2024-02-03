'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Image
        src="/logo.jpg"
        width={170}
        height={169}
        alt="logo"
        className={styles.image}
        priority={true}
      />
      <div className={styles.title}>
        <h1>STUYBIKE</h1>
        <h1>STUYVESANT HIGHSCHOOL</h1>
      </div>
      <div className={styles.navigate}>
        <Link className={"/" == usePathname() ? styles.heavy : styles.light} href="/">HOME</Link>
        <Link className={"/about" == usePathname() ? styles.heavy : styles.light} href="/about">ABOUT</Link>
        <Link className={"/services" == usePathname() ? styles.heavy : styles.light} href="/">SERVICES</Link>
        <Link className={"/contact" == usePathname() ? styles.heavy : styles.light} href="/">CONTACT</Link>
      </div>
    </div>
  );
}
