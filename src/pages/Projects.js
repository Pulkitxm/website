import React, { useEffect, useRef } from 'react';
import ProjectSlider from '../components/ProjectSlider';
import './pages.css';
import { motion } from 'framer-motion';

import star from '../assets/starss.svg'

const projects = [
  
  {
    title: 'Whatsapp Clone',
    linkText:'Github',
    link:'https://github.com/Pulkitxm/Whatsapp',
    vidCode: 'gdr_j1lzlWU',
    skills : 'MongoDB Atlas, MongoDb, mongoose, ExpressJS, NodeJS, ReactJS, JWT',
    desc : `🚀 Just Completed My MERN Stack Project: Building a Real-Time Chat Application! 📱💬 I'm thrilled to share my latest project, a real-time chat application built using the MERN stack (MongoDB, Express.js, React, Node.js). While real-time applications often use Socket.IO for instant messaging, I took a slightly different approach for this project to make it more accessible for beginners. 🔗 Backend (Node.js and Express.js): The backend handles user authentication and chat data storage. When a user logs in, their chats are retrieved from the database and displayed in the frontend. 💼 Database (MongoDB): MongoDB stores user information, including chat messages. User chats are organized and retrieved based on the sender and receiver IDs. 🎨 Frontend (React): The frontend is where the magic happens! It provides a user-friendly interface for sending and receiving messages. Messages are sorted by timestamp and displayed in a conversation view. A user can easily switch between different chat partners. 🔄 Chat Refresh Feature: Instead of using Socket.IO for real-time updates, I implemented a chat refresh feature. By clicking the "Refresh" button, users can retrieve the latest messages in their chats. This feature works smoothly, ensuring that users see new messages without constant server polling. 🔒 Authentication: To maintain user privacy and security, I implemented user authentication. Users must log in with a valid username and password to access their chats. 📦 Local Storage: I used local storage to store chat data locally, reducing the need for repeated database queries and enhancing the user experience. 🚧 Error Handling: I included robust error handling to provide feedback to users when something goes wrong, such as incorrect login credentials. 🌟 This project challenged me to think creatively and find alternative solutions to real-time messaging. While Socket.IO is a popular choice, this project shows that with careful design and development, we can achieve similar functionality in a more straightforward way.`
  },
  {
    title: 'Blog Application',
    linkText:'Github',
    link:'https://github.com/Pulkitxm/fullstackopen/tree/main/part4',
    vidCode: 'jd_tlqJ_kJg',
    skills : 'MongoDB Atlas,MongoDb,mongoose,ExpressJS,NodeJS,ReactJS',
    desc: `🚀 Just launched my MERN stack project! 📝🔗 Excited to share my latest accomplishment: a fully functional blog application built using the MERN stack! 🌐📚 🔐 Secure User Authentication: Implemented a user login feature to ensure only authorized users can contribute to the blog. 📝 Informative Content: Each blog post showcases essential details like URL, title, and author, providing a seamless reading experience. 👍 Interactivity at its Best: Readers can engage with the content using dynamic features such as the like button, fostering an interactive community. 🗑️ Easy Content Management: Empowered users with the ability to delete posts, keeping the platform clutter-free and organized. ➕ Seamless Additions: Added a convenient 'Add a Blog' form, enabling contributors to share their insights effortlessly. Though styles are a work in progress, I'm thrilled about the functionality and user experience I've achieved! Looking forward to refining the aesthetics while users enjoy the content. 🎨👁️`
  },
  {
    title: 'Dictionary',
    linkText:'Dictionary',
    link:'https://pulkitxm.github.io/Dicitionary/',
    vidCode: 'pwUYkU8blWE',
    skills : 'Html CSS JS(fetch api)',
    desc: `📚 Exciting News: I've just completed my latest project, a dynamic online dictionary tool! 🔍 With this tool, you can easily search for words and get their meanings right away. But that's not all – it also provides pronunciations, synonyms, antonyms, and usage examples for a comprehensive understanding of each word. 🎧 Ever wondered how a word sounds? You can even listen to its pronunciation with just a click! 🚀 I built this dictionary using JavaScript and DictionaryAPI. It was an amazing learning experience, and I'm proud to share the result with you.`
  },
  {
    title: 'BuyWithPulkit - React',
    linkText:'BuyWithPulkit vercel.ap',
    link:'https://buywithpulkit.vercel.app/',
    vidCode: 'tLbUHOTZR2Y',
    skills : 'ReactJs',
    desc: "Excited to announce the launch of my revamped online marketplace project ! 🛒✨ What started as an Amazon-like website clone built with HTML and CSS has now been rebuilt using ReactJS, taking the user experience to a whole new level. It has been an incredible journey of learning and growth, and I'm proud to showcase the power of ReactJS in creating dynamic and interactive web applications.Check out the website and explore its features.Your feedback is highly appreciated!"
  },
  {
    title: 'Spotify Clone',
    linkText:'Github',
    link:'https://github.com/Pulkitxm/Delta-Apna-College/tree/main/18.%20Project%20(CSS)',
    vidCode: 'oUxHSnaMc-w',
    skills : 'JHtml , CSS & JS',
    desc:'Excited to share my recent project! 🎧🎉 With the guidance of Shradha Khapra at Apna College #Delta Course, I successfully built a #spotify clone using HTML and CSS only. It was an incredible learning experience, diving into frontend development and recreating the user interface. Grateful for the opportunity to enhance my skills and showcase my work. Check out the clone and let me know'
  },
  {
    title: 'TicTacToe',
    linkText:'Github',
    link:'https://github.com/Pulkitxm/TicTacToe',
    vidCode: 'C0qyJvZEtCg',
    skills : 'Java',
    desc:'Excited to share my Java code for a Tic Tac Toe game! It features a 2D array-based game board, user input, win condition checking, and dynamic board display. Check out the code and enjoy playing this classic game of strategy and fun!'
  },
  {
    title: 'ColorPicker Microsoft Addon',
    linkText:'Microsoft Addons',
    link:'https://microsoftedge.microsoft.com/addons/detail/ncojkkcoejbeggmbkjbmjnacfgghgcgf',
    vidCode: 'M0_NP1oY-uk',
    skills: 'HTML/CSS , JavaScript , DOM Manipulation , Color Theory , Chrome Extension Architecture , Chrome Extension APIs , Event Handling',
    desc:`
    🎨 Exciting News! Introducing the Color Picker Extension! 🌈

Hey fam! 👋 I'm excited to share a sneak peek of my latest creation - the Color Picker Extension! 🎉

Say goodbye to tedious color code searches and hello to seamless color selection. 🎨💡 With this handy extension, you can effortlessly choose any color and instantly get its corresponding code. It's a game-changer for designers and developers alike!

✅ Intuitive Color Selection
✅ Real-Time Code Display
✅ Copy to Clipboard
✅ Easy Installation

Stay tuned for the official release of the Color Picker Extension. I can't wait to share it with you all! 🚀🔥
`
  },
  {
    title: 'BuyWithPulkit',
    linkText:'BuyWithPulkit - netlify',
    link:'https://buywithpulkit.netlify.app',
    vidCode: 'tLbUHOTZR2Y',
    skills : 'HTML , CSS & JS',
    desc:'Hey Everyone I am very excited to share this project - buyWithPulkit! An e-commerce website built from scratch, offering a wide range of products from smartphones to clothing items. With a user-friendly interface and seamless checkout process, shopping has never been easier. Check it out and let me know what you think!'
  },
  {
    title: "Editing Thor's Wallpaper on my #asus #tuf laptop using #Auracreator",
    linkText:'Github',
    link:'https://github.com/Pulkitxm/Goose_Foot',
    vidCode: 'zfmYFm6K_b4',
    skills : 'Python',
  },
  {
    title: 'GooseFoot',
    linkText:'Github',
    link:'https://github.com/Pulkitxm/Goose_Foot',
    vidCode: '9mgYCf77KqY',
    skills : 'Python',
    desc:'This is in continuation with my 11th class project . Using The Basics of python and SQL this is a Project which have some features in extension to the older one like typing effects , loaders , collaborations with more 10-15 restaurants , 20-30 deliver partners , Reiept of the order and many more'
  },
  {
    title: 'Pulkit Eatries',
    linkText:'Github',
    link:'https://github.com/Pulkitxm/Pulkit_Eatries',
    vidCode : 'AOILLTSwNx0',
    skills : 'Python',
    desc:'This is a school level 11th class project using python . It is a Restaurant named Pulkit Eatries in which you have to sign in/up then you have the options to select menu Items and at last Billing is done'
  },
];

const Projects = () => {
  const pageTransition = {
    initial: { transform: 'translateY(100%)' },
    animate: {transform: 'translateY(0%)' },
    exit: { transform: 'translateY(-100%)' },
    transition: { duration: 2 },
  };

  return (
    <motion.div className="projects" initial="initial" animate="animate" exit="exit" variants={pageTransition}>
      <div className="top">
        Some of my Projects &nbsp; <img src={star} alt="" />
      </div>
      <ProjectSlider projects={projects} />
      
    </motion.div>
  );
};

export default Projects;