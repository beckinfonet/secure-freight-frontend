"use client";

import styles from "./styles/error.module.css";

export default function ShipperError({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Something went wrong!</h2>
      <button onClick={() => reset()} className={styles.button}>
        Try again
      </button>
    </div>
  );
}
