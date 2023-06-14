import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idae into reality. We bring together the taeams for the
          global tect industry
        </p>
        <Button url="/portfolio" text="See Our Wrorks" />
      </div>
      <div className={styles.items}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
