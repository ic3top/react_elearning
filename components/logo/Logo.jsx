import Link from 'next/link';
import styles from './Logo.module.scss';

export function Logo() {
  return (
    <Link href="/">
      <a className={styles.logo}>
        <span>netflix</span>
        roulette
      </a>
    </Link>
  );
}
