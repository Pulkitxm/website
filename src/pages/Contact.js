import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; // Import the EmailJS library
import codepen from '../assets/icons/codepen.png';
import facebook from '../assets/icons/facebook.png';
import github from '../assets/icons/github.png';
import gmail from '../assets/icons/gmail.png';
import instagram from '../assets/icons/instagram.png';
import linkedin from '../assets/icons/linkedin.png';
import youtube from '../assets/icons/youtube.png';

const Icon = ({ url, Class, path }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={path} className={Class} draggable='false' alt="icon" />
    </a>
  );
};

const Contact = ({pageTransition}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitText, setsubmitText] = useState("")

  const codepen_url = 'https://codepen.io/teckyPulkit';
  const facebook_url = 'https://www.facebook.com/Pulkit.fb/';
  const github_url = 'https://github.com/Pulkitxm';
  const gmail_url = 'mailto:kpulkit15234@gmail.com';
  const instagram_url = 'https://www.instagram.com/teckypulkit';
  const linkedin_url = 'http://www.linkedin.com/in/pulkit-%E2%80%8E-75237a1b8';
  const youtube_url = 'https://www.youtube.com/@CodeWithPulkit';

  const isFormValid = name && email && subject && message;

  const sendEmail = (e) => {
    e.preventDefault()
    if (isFormValid) {
      const formattedMessage = `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `;

      // Replace with your EmailJS service ID and template ID
      const serviceId = 'service_d8jslwj';
      const templateId = 'template_jhvj4zb';

      // Replace with your EmailJS user ID
      const userId = 'vgn5g8Coo7AD1lJKP';

      const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: formattedMessage,
      };

      emailjs.send(serviceId, templateId, templateParams, userId)
        .then((response) => {
          // Reset form after submission
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
          setsubmitText("Sent via Email")
          setTimeout(()=>{
            setsubmitText("Submit")
          },5000)
        })
        .catch((error) => {
          console.error('Email error:', error);
        });
    }
  };

  return (
    <motion.div className="contact" initial="initial" animate="animate" exit="exit" variants={pageTransition}>
      <h1>Lets Connect with me</h1>
      <form className="cf" onSubmit={sendEmail}>
        <input type="text" name="name" id="input-name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" name="email" id="input-email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="text" name="subject" id="input-subject" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        <textarea name="message" id="input-message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        {
          !isFormValid ? <button type="submit" id="input-submit-disabled">{submitText}</button> : <button type="submit" id="input-submit">Submit</button>
        }
      </form>
      <div className="social-handles">
        <Icon path={codepen} Class='codepen' url={codepen_url} />
        <Icon path={facebook} Class='facebook' url={facebook_url} />
        <Icon path={github} Class='github' url={github_url} />
        <Icon path={gmail} Class='gmail' url={gmail_url} />
        <Icon path={instagram} Class='instagram' url={instagram_url} />
        <Icon path={linkedin} Class='linkedin' url={linkedin_url} />
        <Icon path={youtube} Class='youtube' url={youtube_url} />
      </div>
    </motion.div>
  );
};

export default Contact;
