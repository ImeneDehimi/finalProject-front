import { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import contactImg from "../../assets/contact-pic.webp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error(`Failed to send email`);
        }
      );
  };
  return (
    <section className="contact" id="contact">
      <ToastContainer />
      <div className="contact-container">
        <div>
          <h1>Contact Us </h1>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Name" required/>
            <input type="email" name="email" placeholder="Email" required/>
            <input type="text" name="subject" placeholder="Subject" required/>
            <textarea name="message" placeholder="Message" required/>
            <input id="submit-btn" type="submit" value="Send" />
          </form>
        </div>
        <div className="contact-pic">
          <img src={contactImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
