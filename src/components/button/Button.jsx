import './button.scss';
import classNames from "classnames";

export const Button = ({ children, color, className, ...props }) => {
  const cssClasses = classNames(`button ${className}`, {
    button_primary: color === 'primary',
    button_secondary: color === 'secondary'
  });
  return <button className={cssClasses} {...props}>{children}</button>
}
