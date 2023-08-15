import classes from "./Contact.module.css";
import Container from "../UI/Container";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    console.log(mailData.message);
    console.log(mailData.message.trim().length);
    console.log(mailData.number.trim().length);
    console.log(mailData.name);
    console.log(mailData.email);

    if (
      mailData.name.trim().length === 0 ||
      mailData.message.trim().length === 0
    ) {
      alert("Enter name and message to send a mail.");
      return;
    } else {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_9owgc98",
          "template_72v5rv2",
          form.current,
          "clTkbyGjv8foAXNGJ"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setMailData({
        name: "",
        email: "",
        number: "",
        message: "",
      });
      alert("Mail sent! Thank You 🙂");
    }
  };

  return (
    <section id="Contact">
      <Container>
        <h2 className={classes["secondary-heading"]}>Contact</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className={classes["form-container"]}
        >
          <div className={classes["name-container"]}>
            <label className={classes["name"]} htmlFor="name">
              Name
            </label>
            <input
              required
              type="text"
              id="name"
              placeholder="Your Name"
              name="name"
              onChange={(e) => {
                setMailData(() => {
                  return { ...mailData, name: e.target.value };
                });
              }}
              value={mailData.name}
            />
          </div>
          <div className={classes["email-container"]}>
            <label className={classes["email"]} htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your E-mail address"
              name="email"
              onChange={(e) => {
                setMailData(() => {
                  return { ...mailData, email: e.target.value };
                });
              }}
              value={mailData.email}
            />
          </div>
          <div className={classes["number-container"]}>
            <label className={classes["number"]} htmlFor="number">
              Number
            </label>
            <input
              type="number"
              id="number"
              placeholder="Your Phone Number"
              name="number"
              onChange={(e) => {
                setMailData(() => {
                  return { ...mailData, number: e.target.value };
                });
              }}
              value={mailData.number}
            />
          </div>
          <div className={classes["message-container"]}>
            <label className={classes["message"]} htmlFor="textarea">
              Message
            </label>
            <textarea
              required
              name="message"
              id="textarea"
              placeholder="Your message..."
              cols="20"
              rows="5"
              onChange={(e) => {
                setMailData(() => {
                  return { ...mailData, message: e.target.value };
                });
              }}
              value={mailData.message}
            ></textarea>
          </div>
          <div className={classes["submit-container"]}>
            <button
              value="Send"
              type="submit"
              onClick={sendEmail}
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
