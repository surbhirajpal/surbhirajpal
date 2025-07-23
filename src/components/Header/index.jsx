import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Hero({ subtitle = "UI/UX Designer" }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container">
        <Link to="/">
          <p className="header__title">
            Surbhi Rajpal <span className="header__subtitle">- {subtitle}</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
