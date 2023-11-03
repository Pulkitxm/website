import React, { useEffect, useRef } from 'react';
import './pages.css';

import resumePdf from "../assets/resume.pdf";

import { motion } from 'framer-motion';
import github from '../assets/icons/github.png';
import linkedin from '../assets/icons/linkedin.png';
import newtab from '../assets/newtab.png'
const github_url = 'https://github.com/Pulkitxm';
const linkedin_url = 'http://www.linkedin.com/in/pulkit-%E2%80%8E-75237a1b8';


const Resume = ({pageTransition}) => {
  
  return (
    <motion.div
      className="resume"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      style={{ height: "100%", width: "100%", margin: 0, padding: 0,display:'flex',justifyContent:'center',alignItems:'center' }}
    >
      {/* <iframe src="https://drive.google.com/file/d/1Hy5eN3W9oyMOyf0SF8dTIENq0-HpAmfT/preview" allow="autoplay" style={{height:'100%',width:'100%'}}></iframe> */}
      <embed
        style={{ height: "100%", width: "90%",borderRadius:'1em' }}
        src={resumePdf}
        type="application/pdf"
        width="100%"
        height="500px"
      />
    </motion.div>
  );
};

export default Resume;