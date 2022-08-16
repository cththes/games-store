import Link from "next/link";
import styles from "../styles/A.module.css";
export default function A({ text, href }) {
  return (
    <Link href={href}>
      <a href={href} className={styles.link}>{text}</a>
   </Link>
  );
}
