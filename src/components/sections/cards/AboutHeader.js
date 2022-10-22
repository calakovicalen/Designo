import { useSelector } from "react-redux";
import useCompare from "../../../hooks/use-compare";

import classes from "./AboutHeader.module.css";

import about from "../../../assets/about/mobile/image-about-hero.jpg";
import aboutTablet from "../../../assets/about/tablet/image-about-hero.jpg";
import aboutDesktop from "../../../assets/about/desktop/image-about-hero.jpg";

const AboutHeader = () => {
  let width = useSelector((state) => state.width.width);

  const compareAbout = useCompare(width, about, aboutTablet, aboutDesktop);
  return (
    <div className={classes["about-header"]}>
      <img src={compareAbout} alt="header" />
      <div className={classes.wrapper}>
        <h3>About Us</h3>
        <p>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
    </div>
  );
};

export default AboutHeader;
