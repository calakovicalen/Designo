import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import FooterCard from "./UI/FooterCard";
import Logo from "./UI/Logo";
import Media from "./UI/Media";

import classes from "./Footer.module.css";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
};

const Footer = () => {
  const toggle = useSelector((state) => state.footer.card);

  return (
    <footer
      className={`${classes.footer} ${
        toggle ? classes["footer-big-padding"] : classes["footer-small-padding"]
      }`}
    >
      {toggle && <FooterCard />}
      <div className={classes.container}>
        <Logo className={classes.logo} />
        <ul className={classes.list}>
          <Link to="/about" style={linkStyle}>
            <li>OUR COMPANY</li>
          </Link>
          <Link to="/locations" style={linkStyle}>
            <li>LOCATIONS</li>
          </Link>
          <Link to="/contact" style={linkStyle}>
            <li>CONTACT</li>
          </Link>
        </ul>
      </div>
      <div className={classes["contact-container"]}>
        <div className={classes.contact}>
          <h5>Designo Central Office</h5>
          <span>3886 Wellington Street</span>
          <span>Toronto, Ontario M9C 3J5</span>
        </div>
        <div className={classes.contact}>
          <h5>Contact Us (Central Office)</h5>
          <span>P: +1 253-863-8967</span>
          <span>M: contact@designo.co</span>
        </div>
        <Media />
      </div>
    </footer>
  );
};

export default Footer;
