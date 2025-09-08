import style from "./Contact.module.css";
import video from "../../assets/accounts.mp4";
import LocationMap from "../../Components/LocationMap/LocationMap";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [submitNotification, setSubmitNotification] = useState("");

  const [errors, setErrors] = useState([]);
  console.log(errors);

  const formHander = (e) => {
    const errorList = [];
    if (name.trim() === "") {
      errorList.push("Enter Your Name");
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorList.push("Enter a valid Email");
    }
    const numberPattern = /^[0-9]+$/;
    if (!numberPattern.test(number)) {
      errorList.push("Enter Your Number");
    }
    if (message.trim() === "") {
      errorList.push("Enter Your Message");
    }
    setErrors(errorList);
    if (errorList.length > 0) {
      e.preventDefault();
    } else {
      setSubmitNotification("Form Submited");
      setTimeout(() => {
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
      }, 1000);
    }
  };

  return (
    <>
      <section className={style.contact_header}>
        <video src={video} muted autoPlay loop />
        <div className={style.contact_header_wrapper}>
          <div className="container">
            <h1>GET IN TOUCH</h1>
          </div>
        </div>
      </section>

      <section className={style.map_section}>
        <div className="container">
          <h2>Location Map</h2>
          <div>
            <LocationMap />
          </div>
        </div>
      </section>

      <section className={style.form_section}>
        <div className="container">
          <h2>GET IN TOUCH</h2>
          <p>
            For non-emergencies and general enquiries, please fill out the form
            below. We’ll respond as soon as possible.
          </p>

          <span>{submitNotification}</span>
          <form
            action="https://formsubmit.co/mhassamulqayoum@gmail.com"
            method="POST"
            className={style.contact_form}
            onSubmit={formHander}
          >
            <ul className={style.errorlist}>
              {errors.map((items) => {
                return <li>{items}</li>;
              })}
            </ul>

            {/* <!-- Hidden fields --> */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_next"
              value="https://namoos-consultants.vercel.app/thank_you"
            />
            <input
              type="text"
              value={name}
              name="Name"
              placeholder="Name*"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              value={email}
              name="Email"
              placeholder="Email*"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              value={number}
              name=" Phone Number"
              placeholder="Number*"
              onChange={(e) => setNumber(e.target.value)}
            />
            <textarea
              name="Message"
              id=""
              value={message}
              placeholder="Your Message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <input type="submit" name="Submit" className={style.submit_btn} />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
