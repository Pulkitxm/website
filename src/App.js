import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {    
    setProgress(100)
    setTimeout(()=>{
      setLoading(false);
    },2000)

    return () => {
      window.onload = null;
    };
  }, []);

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        height={5}
        onLoaderFinished={() => setProgress(0)}
      />
      <Router>
        <Navbar isloaded={loading} setProgress={setProgress} />
        <div className="contentofpulkit">
          <AnimatedRoutes setProgress={setProgress} />
        </div>
      </Router>
    </>
  );
};

export default App;
