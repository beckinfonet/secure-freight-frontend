import { metadata } from "./metadata";
import { ReactNode } from "react";
import styles from "./styles/layout.module.css";

export { metadata };

export default function ShipperLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.root}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <h1 className={styles.navTitle}>Secure Freight - Shipper Portal</h1>
        </div>
      </nav>
      {children}
    </div>
  );
}
