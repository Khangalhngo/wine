import Router from "next/router";
import styles from "../styles/Home.module.css";
export default function BackButton() {
  return (
    <button className={styles.BackButton} onClick={() => Router.back()}>
      Clear Filter
    </button>
  );
}
