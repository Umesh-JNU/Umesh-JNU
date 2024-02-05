import React, { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { particleOptions } from "../utils";
import { loadSlim } from "@tsparticles/slim";

import Home from "./Home";
import About from './About';
import Education from './Education';
import Skill from './Skill';
import Project from './Project';

const IndexPage = () => {
  const [display, setDisplay] = useState('grid');
  const [init, setInit] = useState(false);

  useEffect(() => {
    // Check if the component is being rendered for the first time
    const hasVisitedBefore = sessionStorage.getItem('hasVisited');
    
    if (hasVisitedBefore) {
      // Not the first visit, hide the video
      setDisplay('none');
      setInit(true);
    } else {
      // First visit, show the video
      setDisplay('grid');
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  // useEffect(() => {
  //   if (display === 'none') {
  //     setInit(true);
  //   }
  // }, [display]);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <div className="video-container" style={{ display: display }}>
        <video className="start-video" autoPlay={true} muted onEnded={() => {
          setDisplay('none')
        }}>
          <source src='/start.mp4' type='video/mp4' />
        </video>
      </div>
      {display !== 'grid' &&
        <>
          {init && <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={particleOptions}
          />}
          <Home />
        </>}
    </>
  )
}

export { IndexPage, About, Education, Project, Skill };