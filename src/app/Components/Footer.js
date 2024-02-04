import styles from "./Footer.module.css"
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image
            src="/logo.jpg"
            width={122}
            height={119}
            alt="logo"
            className={styles.image}
            priority={true}
          />
          <div className={styles.title}>
            <h2>STUY BIKE<br/>STUYVESANT HIGHSCHOOL</h2>
          </div>
        </div>
        <div className={styles.mission}>
          <h2>#MISSION</h2>
          <p>Lorem ipsum dolor sit  et dolore magna aliqua. Scelerisque eu ultrices vitae auctor eu augue. Ut sem nulla pharetra diam. At auctor urna nunc id cursus. Ultrices vitae auctor eu augue.</p>
        </div>
    </div>
        <div className={styles.contact}>
          <h2>CONTACT:</h2>
          <div className={styles.emails}>
            <h2>EMAILS:</h2>
            <p>example@example.com</p>
            <p>example@example.com</p>
            <p>example@example.com</p>
            <p>example@example.com</p>
          </div>
          <div className={styles.suggestionForm}>
            <h2>SUGGESTION FORMS:</h2>
            <p>CLICK ME</p>
          </div>
        </div>
        <div className={styles.socials}>
        <h2>FOLLOW</h2>
        <Image
          src="/facebook.png"
          height={55}
          width={55}
          alt="facebook"
        />
        <Image
          src="/twitter.png"
          height={55}
          width={55}
          alt="twitter"
        />
        <Image
          src="/insta.png"
          height={55}
          width={55}
          alt="insta"
        />
        <Image
          src="/discord.png"
          height={55}
          width={55}
          alt="discord"
        />
      </div>
      </div>
    </div>
  );
}
