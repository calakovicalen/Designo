import { Link } from "react-router-dom";

import classes from "./FooterCard.module.css";
import Button from "./Button";

function FooterCard() {
  return (
    <div className={classes["footer-card"]}>
      <h3> Let's talk about your project</h3>
      <p>
        Ready to take it to the next level? Contact us today and find out how
        our expertise can help your business grow.
      </p>
      <Link to="/contact">
        <Button label="Get in touch" />
      </Link>
    </div>
  );
}

export default FooterCard;
