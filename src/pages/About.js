import React from 'react';
import './pages.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = ({pageTransition}) => {

  return (
    <motion.div className="about" initial="initial" animate="animate" exit="exit" variants={pageTransition}>
      <div>
        <h2>Pulkit</h2>
        <p className='bitbig' >
          Hi there! My name is Pulkit, and I'm a passionate and enthusiastic web developer. I love creating beautiful and interactive websites that provide a great user experience. Besides this I like content creation on youtube aka Video Editing .
        </p>
        <p>
          I started my journey in web development a few years ago, and I have been continuously learning and improving my skills ever since. My expertise lies in front-end technologies such as HTML, CSS, and JavaScript ( React ) . I am also proficient in using modern frameworks like React, which is what powers this website you are currently viewing.
        </p>
        <p className='bitbig' >
          Besides coding, I enjoy exploring new technologies, attending tech meetups, and contributing to open-source projects. In my free time, you'll often find me reading tech blogs, playing video games, or spending quality time with friends and family.
        </p>
        <p>
          My ultimate goal is to leverage my skills to build innovative web applications that solve real-world problems and positively impact people's lives. I'm always open to new opportunities and collaborations, so feel free to reach out if you'd like to connect or work together on exciting projects.
        </p>
        <p className='bitbig' >
          Thank you for visiting my website, and I hope you find my work inspiring! If you have any questions or just want to say hello, don't hesitate to <Link to='/contact' >get in touch</Link>.
        </p>
        <p className='bitbig link-linkedin' >
          <u>
            <a href='http://www.linkedin.com/in/pulkit-%E2%80%8E-75237a1b8' target='_blank' draggable='false'>
              Explore my journey (Linkedin)
            </a>
          </u>
        </p>
      </div>
    </motion.div>
  );
};

export default About;