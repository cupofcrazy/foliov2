import React, { useRef, useEffect } from 'react';
import Smooth from 'smooth-scrolling'
import { gsap, Expo } from 'gsap/dist/gsap'
/**
 * Components
 */
import Header from './components/Header';
import Footer from './components/Footer';
import Info from './components/Info';

/**
 * Plugins
 */
import Canvas from './assets/js/Canvas'
// End imports
    

// Init Application
const App = () => {
  // Refs
  let mainEl = useRef(null);
  let canvasEl = useRef(null) 
  let appEl = useRef(null)
  

  // Mounted
  useEffect(() => {

    let headerEl = document.querySelector('header')
    let footerEl = document.querySelector('footer')

    appEl.classList.add('loaded')

    const smooth = new Smooth({
      native: false,
      section: mainEl,
      ease: 0.1
    })
    smooth.init()

    

    const canvas = new Canvas({ canvas: canvasEl })
    canvas.create()

    // Begin Animations
    const tl = new gsap.timeline({ delay: 1 })

    
    tl
    .from(headerEl, 1, {
      // y: -100,
      autoAlpha: 0,
      webkitFilter: `blur(${ 5 }px)`,
      ease: Expo.easeOut
    }, 0)
    .from(footerEl, 1, {
      // y: 100,
      autoAlpha: 0,
      webkitFilter: `blur(${ 5 }px)`,
      ease: Expo.easeOut
    }, 0)
    .from(canvas.getObject().scale, 2, {
      x: 0,
      y: 0,
      z: 0,
      ease: Expo.easeInOut
    }, .5)
    .staggerFrom(mainEl.querySelectorAll('h1 > div'), 1, {
      autoAlpha: 0,
      // skewX: 3,
      transformOrigin: "0%, 50%",
      x: 30,
      webkitFilter: `blur(${ 5 }px)`,
      ease: Expo.easeOut
    }, .1)
    .staggerFrom(document.querySelectorAll('section'), 1, {
      // y: 50,
      autoAlpha: 0,
      scale: 0.95,
      webkitFilter: `blur(${ 5 }px)`,
      ease: Expo.easeOut
    }, .3)
    // End Animations
  })

  return (
    <div className="App" ref={ el => appEl = el}>
      <canvas id="canvas" ref={ el => canvasEl = el }></canvas>
      <Header />

      
      <main id="js-scroll" ref={ el => mainEl = el }>
        <div className="wrapper">
          
          <div className="about">
            <h1>
              <div>An</div>
              <div>Independent Developer</div>
              <div>with a zeal for building</div>
              <div>functional and elegant</div>
              <div> user interfaces</div>
            </h1>
            
          </div>
        </div>
        <Info />
      </main>
      <Footer />
    </div>
  );
}

export default App;
