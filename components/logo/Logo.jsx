import styles from './Logo.module.scss';
import Link from 'next/link'

export const Logo = () => (
  <Link href="/">
    <a className={styles.logo}><span>netflix</span>roulette</a>
  </Link>
)
