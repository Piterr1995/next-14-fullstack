// Powinno się uywać layoutów, lecz w przypadkach np. gdzie chcesz, aby co zmianę urla była animacja, powinieneś
// uyć template. Template nie zachowuje stanu między
// zmianą pathname

import Link from "next/link";
import styles from "./typleteStyle.module.css";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.childrenWrapper}>
      <Link href="/blog">Back to blog</Link>
      {children}
    </div>
  );
}
