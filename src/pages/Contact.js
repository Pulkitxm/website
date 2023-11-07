import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com"; // Import the EmailJS library
import {
  FaCodepen,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

const Icon = ({ url, Class, path }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={path} className={Class} draggable="false" alt="icon" />
    </a>
  );
};

const Contact = ({ pageTransition, width }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitText, setsubmitText] = useState("Submit");

  const codepen_url = "https://codepen.io/teckyPulkit";
  const facebook_url = "https://www.facebook.com/Pulkit.fb/";
  const github_url = "https://github.com/Pulkitxm";
  const gmail_url = "mailto:kpulkit15234@gmail.com";
  const instagram_url = "https://www.instagram.com/teckypulkit";
  const linkedin_url = "http://www.linkedin.com/in/pulkit-%E2%80%8E-75237a1b8";
  const youtube_url = "https://www.youtube.com/@CodeWithPulkit";

  const isFormValid = name && email && subject && message;

  const sendEmail = (e) => {
    e.preventDefault();
    if (isFormValid) {
      const formattedMessage = `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `;

      // Replace with your EmailJS service ID and template ID
      const serviceId = "service_d8jslwj";
      const templateId = "template_jhvj4zb";

      // Replace with your EmailJS user ID
      const userId = "vgn5g8Coo7AD1lJKP";

      const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: formattedMessage,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => {
          // Reset form after submission
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setsubmitText("Sent via Email");
          setTimeout(() => {
            setsubmitText("Submit");
          }, 5000);
        })
        .catch((error) => {
          console.error("Email error:", error);
        });
    }
  };
  return (
    <motion.div
      className="contact"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {width < 400 && (
        <>
          <br />
          <br />
        </>
      )}
      <h1>Lets Connect with me</h1>
      <form className="cf" onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          id="input-name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          id="input-email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          name="subject"
          id="input-subject"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <textarea
          name="message"
          id="input-message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <div className="submit-btncontainer">
          {!isFormValid ? (
            <button type="submit" id="input-submit-disabled">
              {submitText}
            </button>
          ) : (
            <button type="submit" id="input-submit">
              Submit
            </button>
          )}
        </div>
      </form>
      <div className="social-handles">
        <a href={codepen_url} target="_blank" rel="noopener noreferrer">
          <FaCodepen className={"codepen"} />
        </a>
        <a href={facebook_url} target="_blank" rel="noopener noreferrer">
          <FaFacebookF className={"facebook"} />
        </a>
        <a href={github_url} target="_blank" rel="noopener noreferrer">
          <FaGithub className={"github"} />
        </a>
        <a href={gmail_url} target="_blank" rel="noopener noreferrer">
          <AiOutlineMail className={"gmail"} />
        </a>
        <a href={instagram_url} target="_blank" rel="noopener noreferrer">
          <FaInstagram className={"instagram"} />
        </a>
        <a href={linkedin_url} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className={"linkedin"} />
        </a>
        <a href={youtube_url} target="_blank" rel="noopener noreferrer">
          <FaYoutube className={"youtube"} />
        </a>
      </div>
      {width < 400 && (
        <>
          <br />
          <br />
        </>
      )}
    </motion.div>
  );
};

export default Contact;
