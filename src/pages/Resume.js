import React, { useEffect, useRef } from 'react';
import './pages.css';
import { motion } from 'framer-motion';
import github from '../assets/icons/github.png';
import linkedin from '../assets/icons/linkedin.png';
import newtab from '../assets/newtab.png'
const github_url = 'https://github.com/Pulkitxm';
const linkedin_url = 'http://www.linkedin.com/in/pulkit-%E2%80%8E-75237a1b8';
const Resume = () => {

  const pageTransition = {
    initial: { transform: 'translateY(100%)' },
    animate: {transform: 'translateY(0%)' },
    exit: { transform: 'translateY(-100%)' },
    transition: { duration: 2 },
  };

  return (
    <motion.div className="resume" initial="initial" animate="animate" exit="exit" variants={pageTransition}>

      <a href="https://drive.google.com/uc?id=1Hy5eN3W9oyMOyf0SF8dTIENq0-HpAmfT&export=download" class="buttonDownload">Download this page (.pdf)</a>
      <h1 className='h1-resume' >Pulkit</h1>
      <h2 className='h2-resume' >
        <a href="mailto:kpulkit15234@gmail.com">kpulkit15234@gmail.com</a> | (+91) 9654950988
      </h2>
      <h2 className='top-links-resume' >
        <div className="github-resume">
          <a href={github_url}>
            <img src={github} target='_blank' /> &nbsp; <p>/ @pulkitxm</p>
          </a>
        </div>
        <div className="linkedin-resume">
          <a href={linkedin_url}>
            <img src={linkedin} target='_blank' /> &nbsp; <p>/ @pulkitxm</p>
          </a>
        </div>
      </h2>
      <br />
      <div className='section'>
        <h2 className='section-h2'>Sumamry</h2>
        <hr className='section-hr-dark' />
        <p>Passionate about web development and constantly striving to expand my skill setExperienced in building
          responsive and user-friendly websites. Did some projects I python and java . Excited to collaborate on
          projects that challenge me and allow me to contribute my technical expertise. Seeking opportunities to grow
          in a dynamic and innovative tech environment. Let's connect and explore possibilities together!</p>
        <hr className='section-hr-light' />
      </div>
      <div className='section'>
        <h2 className='section-h2'>Skills</h2>
        <hr className='section-hr-dark' />
        <p>Ubuntu, Linux, Video Editing ( Adobe Premiere Pro ), GitHub, Git, JavaScript, Java, Python , C , Web
          Hosting ( Drive to web ) , GitHub , Git , HTML , CSS , JavaScript , ReactJS</p>
        <hr className='section-hr-light' />
      </div>
      <div className='section'>
        <h2 className='section-h2'>Education</h2>
        <hr className='section-hr-dark' />
        <ul className="timeline">
          <li>
            <div class="direction-l">
              <div class="flag-wrapper">
                <span class="flag"><a href="https://ggnindia.dronacharya.info/" target='_blank' >DCE,Gurugram</a></span>
                <span class="time-wrapper"><span class="time">2022 - present</span></span>
              </div>
              <div class="desc">Started my Computer Science Engineering at Dronacharya College of Engineering</div>
            </div>
          </li>
          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <span class="flag"><a href="https://cambridgefoundationschool.com/" target='_blank' >CFS, Delhi</a> </span>
                <span class="time-wrapper"><span class="time">2013 - 2022</span></span>
              </div>
              <div class="desc">I complted my X and XII from Cambrideg Foundation School</div>
            </div>
          </li>
          <li>
            <div class="direction-l">
              <div class="flag-wrapper">
                <span class="flag"><a href="https://www.laps.in/" target='_blank' >LAPS , Delhi</a> </span>
                <span class="time-wrapper"><span class="time">  - 2013</span></span>
              </div>
              <div class="desc">I did my starting years of my Education till 4thgrade in Lt Col Mehar Little Angels Sr Secondary School</div>
            </div>
          </li>
        </ul>
        <hr className='section-hr-light' />
      </div>
      <div className='section'>
        <h2 className='section-h2'>Academic Projects</h2>
        <hr className='section-hr-dark' />
        <div className="project">
          <h2>ColorPicker - Microsoft Edge AddOn <a href="https://microsoftedge.microsoft.com/addons/detail/ncojkkcoejbeggmbkjbmjnacfgghgcgf" target='_blank' draggable='false' ><img src={newtab} alt="" draggable='false' /></a></h2>
          <p>Color Picker Extension for Microsoft Edge: A game-changer for designers and creatives. Explore vibrant colors,
            streamline your workflow, and unleash your creativity with a simple click</p>
          <hr className='section-hr-light' />
        </div>
        <div className="project">
          <h2>buyWithPulkit <a href="https://buywithpulkit.vercel.app/" target='_blank' draggable='false' ><img src={newtab} alt="" draggable='false' /></a></h2>
          <p>"buyWithPulkit" is an e-commerce website that aims to provide a convenient online shopping experience for
            customers. The website offers a wide range of products, including smartphones, electronics, clothing,
            accessories, beauty and personal care, and home and kitchen products. With an easy-to-use interface,
            customers can easily browse and purchase products, and the website also features a blog section where users
            can read articles related to fashion, lifestyle, and technology. The project was developed using HTML, CSS, and
            Bootstrap, and is designed to be responsive and accessible on all devices.</p>
          <hr className='section-hr-light' />
        </div>
        <div className="project">
          <h2>Weather App <a href="https://pulkitxm.github.io/Weather-App/" target='_blank' draggable='false' ><img src={newtab} alt="" draggable='false' /></a></h2>
          <p>This is a real time application that gets you the Weather Information about some cities using Rapid Api using
            JavaScript fetch</p>
          <hr className='section-hr-light' />
        </div>
        <div className="project">
          <h2> TicTacToe using java <a href="https://github.com/Pulkitxm/TicTacToe" target='_blank' draggable='false' ><img src={newtab} alt="" draggable='false' /></a></h2>
          <p>This Java code implements a Tic Tac Toe game. It uses a 2D array to represent the game board, takes user
            input to make moves, checks for a win condition, and displays the board after each move</p>
          <hr className='section-hr-light' />
        </div>
        <div className="project">
          <h2> GooseFoot - Restaurant Interface using Python ( Class 12th Project ) <a href="https://github.com/Pulkitxm/Goose_Foot" target='_blank' draggable='false' ><img src={newtab} alt="" draggable='false' /></a></h2>
          <p>This is in continuation with my 11th class project . Using The Basics of python and SQL this is a Project which
            have some features in extension to the older one like typing effects , loaders , collaborations with more 10-15
            restaurants , 20-30 deliver partners , Receipt of the order and many more</p>
          <hr className='section-hr-light' />
          <div className="project">
            <h2> Pulkit Eateries - Restaurant Interface using Python ( Class 11th Project ) <a href="https://github.com/Pulkitxm/Goose_Foot" target='_blank' draggable='false' ><img src={newtab} alt="" draggable='false' /></a></h2>
            <p>This is a school level project using python . It is a Restaurant named Pulkit Eateries in which you have to
              sign in/up then you have the options to select menu Items and at last Billing is done</p>
            <hr className='section-hr-light' />
          </div>
        </div>
      </div>
      <div className='section'>
        <h2 className='section-h2'>Achievments / Hobbies</h2>
        <hr className='section-hr-dark' />
        <p className='hobby'>
          <ul>
            <li>Subject topper in the Subject Computer Science with a centum score</li>
            <li>Guitar / Music / Gaming / Development</li>
          </ul>
        </p>
        <hr className='section-hr-light' />
      </div>

    </motion.div>
  );
};

export default Resume;