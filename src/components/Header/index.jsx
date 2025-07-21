import { Link } from "react-router-dom";
import "./Header.scss";

export default function Hero() {
  return (
    <div className="header">
      <Link to="/">
        <p className="header__title">
          Surbhi Rajpal{" "}
          <span className="header__subtitle">- UI/UX Designer</span>
        </p>
      </Link>
    </div>
  );
}
