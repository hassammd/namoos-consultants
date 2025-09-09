import style from "./Contact.module.css";
import video from "../../assets/accounts.mp4";
import LocationMap from "../../Components/LocationMap/LocationMap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const formHandler = async (e) => {
    e.preventDefault();

    // ✅ Form Validation
    if (!name.trim()) return toast.error("Please enter your name!");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return toast.error("Please enter a valid email!");
    if (!/^[0-9]+$/.test(number))
      return toast.error("Please enter a valid phone number!");
    if (!message.trim()) return toast.error("Please enter your message!");

    setLoading(true);

    try {
      // ✅ Send request to FormSubmit
      const res = await fetch(
        "https://formsubmit.co/ajax/hassamautomationchannel@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Name: name,
            Email: email,
            PhoneNumber: number,
            Message: message,
            _subject: "New Contact Form Submission",
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success("Form submitted successfully!");
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");

        // ✅ Instant redirect after success
        navigate("/ThankYou");
      } else {
        toast.error(data.message || "Error submitting form!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
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
      <section className={style.contact_form_section}>
        <div className="container">
          <h2>GET IN TOUCH</h2>
          <p>
            For non-emergencies and general enquiries, please fill out the form
            below. We’ll respond as soon as possible.
          </p>

          <form className={style.contact_form} onSubmit={formHandler}>
            <input
              type="text"
              value={name}
              name="Name"
              placeholder="Name*"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              value={email}
              name="Email"
              placeholder="Email*"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              value={number}
              name="PhoneNumber"
              placeholder="Number*"
              onChange={(e) => setNumber(e.target.value)}
            />

            <textarea
              name="Message"
              value={message}
              placeholder="Your Message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <input
              type="submit"
              name="Submit"
              disabled={loading}
              value={loading ? "Submitting..." : "Submit"}
              className={style.submit_btn}
            />
          </form>
        </div>
      </section>
      <section className={style.map_section}>
        <div className="container">
          <div className={style.map_wrapper}>
            <h2>Location Map</h2>
            <div>
              <LocationMap />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
