import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import LargeNavbar from './components/LargeNavbar';
import SmallNavbar from './components/SmallNavbar';
import AnimatedRoutes from './components/AnimatedRoutes';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [width, setwidth] = useState(window.innerWidth)
  useEffect(() => {    
    setProgress(100)
    setTimeout(()=>{
      setLoading(false);
    },2000)

    return () => {
      window.onload = null;
    };
    
  }, []);
  const handleResize = () => {
    setwidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <>
      <Router
        style={{
          oveflowX: "hidden",
        }}
      >
        <LoadingBar
          color="#f11946"
          progress={progress}
          height={5}
          onLoaderFinished={() => setProgress(0)}
        />
        <div className="navContained">
          {width > 1400 ? (
            <LargeNavbar isloaded={loading} setProgress={setProgress} />
          ) : (
            <SmallNavbar isloaded={loading} setProgress={setProgress} />
          )}
        </div>
        <div className="contentofpulkit">
          <AnimatedRoutes width={width} setProgress={setProgress} />
        </div>
      </Router>
    </>
  );
};

export default App;
