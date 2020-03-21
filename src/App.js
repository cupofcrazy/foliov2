import React, { useRef, useEffect } from 'react';
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
import mainImage from './assets/images/main.png'
// End imports
    

// Init Application
const App = () => {
  // Refs
  let mainEl = useRef(null);
  let canvasEl = useRef(null) 
  let appEl = useRef(null)
  let image = useRef(null)
  

  // Mounted
  useEffect(() => {

    let headerEl = document.querySelector('header')
    let footerEl = document.querySelector('footer')

    appEl.classList.add('loaded')


    

    // const canvas = new Canvas({ canvas: canvasEl })
    // canvas.create()

    // Begin Animations
    const tl = new gsap.timeline({ delay: 1 })

    
    tl
    .from(headerEl, 1, {
      y: -100,
      autoAlpha: 0,
      ease: Expo.easeOut
    }, 0)

    .from(footerEl, 1, {
      y: 100,
      autoAlpha: 0,
      ease: Expo.easeOut
    }, 0)
    .from(image, 1.5, {
      scale: 0.5,
      y: 200,
      autoAlpha: 0,
      ease: Expo.easeInOut
    }, .3)
    .staggerFrom(mainEl.querySelectorAll('div > h1'), 1, {
      
      transformOrigin: "0%, 50%",
      y: '100%',
      ease: Expo.easeOut
    }, .1)
    .staggerFrom(document.querySelectorAll('section'), 1, {
      y: 75,
      autoAlpha: 0,
      scale: 0.95,
      ease: Expo.easeOut
    }, .15)
    // End Animations
  })

  return (
    <div className="App" ref={ el => appEl = el}>
      <canvas id="canvas" ref={ el => canvasEl = el }></canvas>
      <Header />

      
      <main id="js-scroll" ref={ el => mainEl = el }>
        <div className="wrapper">
          <img className="main_image" src={mainImage} alt="Main" ref={ el => image = el }/>
          <div className="about">
            <h1>
              <div className="mask"><h1>An</h1></div>
              <div className="mask"><h1>Independent Developer</h1></div>
              <div className="mask"><h1>and Designer</h1></div>
              <div className="mask"><h1>with a zeal for building</h1></div>
              <div className="mask"><h1>functional and elegant</h1></div>
              <div className="mask"><h1> user interfaces</h1></div>
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
