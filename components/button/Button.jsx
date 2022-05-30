import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export function Button({
  children, color, className, ...props
}) {
  const cssClasses = cn(`${styles.button} ${styles.secondary}`, {
    [styles.primary]: color === 'primary',
    [styles.secondary]: color === 'secondary',
  }, className);
  return <button className={cssClasses} {...props}>{children}</button>;
}

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  color: undefined,
};
