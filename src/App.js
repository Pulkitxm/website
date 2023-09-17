import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {    
    setTimeout(()=>{
      setLoading(false);
    },5000)

    return () => {
      window.onload = null;
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <div className="loading-animation">
            <div className="loader"></div>
          </div>
        </div>
      ) : (
        <Router>
            <Navbar isloaded={loading} />
          <div className="contentofpulkit">
            <AnimatedRoutes />
          </div>
        </Router>
      )}
    </>
  );
};

export default App;
