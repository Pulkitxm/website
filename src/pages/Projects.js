import React, { useEffect, useRef } from 'react';
import ProjectSlider from '../components/ProjectSlider';
import './pages.css';
import { motion } from 'framer-motion';

import star from '../assets/starss.svg'

const projects = [
  
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
  return (
    <motion.div
      className='projects'
      initial={{ opacity: 0, transform: 'translateY(10%)' }}
      animate={{
        opacity: 1,
        transform: 'translateY(0px)',
        exit: { opacity: 0, transform: 'translateY(-10%)' }
      }}
    >
      <div className="top">
        Some of my Projects &nbsp; <img src={star} alt="" />
      </div>
      <ProjectSlider projects={projects} />
      
    </motion.div>
  );
};

export default Projects;