import './logo.scss';
import {Link} from "react-router-dom";

export const Logo = ({ className }) => (
  <Link className={`logo ${className}`} to="/react_elearning/home">
    <span>netflix</span>roulette
  </Link>
)
