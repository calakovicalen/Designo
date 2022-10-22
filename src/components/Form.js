import Button from "./UI/Button";
import classes from "./Form.module.css";

const Form = () => {
  return (
    <div className={classes.form}>
      <div className={classes.wrapper}>
        <h3>Contact Us</h3>
        <p>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="Phone" />
        <textarea
          placeholder="Your Message"
          rows="5"
          cols="50"
          spellCheck="false"
        />

        <Button label="Submit" />
      </form>
    </div>
  );
};

export default Form;
