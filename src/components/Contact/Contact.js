import classes from "./Contact.module.css";
import Container from "../UI/Container";

export default function Contact() {
  return (
    <section id="Contact">
      <Container>
        <h2 className={classes["secondary-heading"]}>Contact</h2>
        <form action="" className={classes["form-container"]}>
          <div className={classes["name-container"]}>
            <label className={classes["name"]} htmlFor="name">
              Name
            </label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className={classes["email-container"]}>
            <label className={classes["email"]} htmlFor="email">
              E-mail
            </label>
            <input type="email" id="email" placeholder="Your E-mail address" />
          </div>
          <div className={classes["number-container"]}>
            <label className={classes["number"]} htmlFor="number">
              Number
            </label>
            <input type="number" id="number" placeholder="Your Phone Number" />
          </div>
          <div className={classes["message-container"]}>
            <label className={classes["message"]} htmlFor="textarea">
              Message
            </label>
            <textarea
              name="textarea"
              id="textarea"
              placeholder="Your message..."
              cols="20"
              rows="5"
            ></textarea>
          </div>
          <div className={classes["submit-container"]}>
            <button
              onClick={(e) => {
                e.preventDefault();
                alert("mail submitted");
              }}
              className={`${classes["submit-btn"]} ${classes["btn"]} ${classes["btn-reset"]}`}
            >
              Submit
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}
