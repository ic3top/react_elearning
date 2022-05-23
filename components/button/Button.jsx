import styles from './Button.module.scss';
import cn from "classnames";

export const Button = ({ children, color, className, ...props }) => {
  const cssClasses = cn(`${styles.button} ${styles.primary}`, {
    [styles.primary]: color === 'primary',
    [styles.secondary]: color === 'secondary',
    [styles.secondary]: !color
  }, className);
  return <button className={cssClasses} {...props}>{children}</button>
}
