import styles from "./styles/loading.module.css";

export default function ShipperLoading() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
    </div>
  );
}
