import Zdog from 'zdog'
import { TweenMax, Expo } from 'gsap'

/* eslint-disable no-useless-constructor */
/**
 * @author Balogun Tobi
 * @param { HTMLElement } canvas HTML Canvas Element
 */
class Canvas {
    constructor({ canvas }) {
        this.canvas = canvas;
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight

        this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)


        this.illo = new Zdog.Illustration({
            element: this.canvas,
            // resize: true
        })
        this.hemisphere = null
        this.rotateX = 0
        this.rotateY = 0
        
    }
    initEvents() {
       

        if (this.isMobile && window.DeviceMotionEvent) {
            window.addEventListener('devicemotion', (e) => this.updateDeviceRotation(e))
        } else {
            window.addEventListener('mousemove', (e) => this.updateRotation(e))
        }
    }
    updateDeviceRotation(e) {
        const eX = e.accelerationIncludingGravity.x
        const eY = e.accelerationIncludingGravity.y

        const y = eY / 5
        const x = eX / 5

        TweenMax.to(this.illo.rotate, 3, {
            x: y,
            y: x,
            ease: Expo.easeOut
        })
        this.illo.updateRenderGraph()
    }
    updateRotation(e) {
        
        const eX = e.clientX
        const eY = e.clientY

        const y = (eX - window.innerWidth / 2) / 200 
        const x = (eY - window.innerHeight / 2) / 200

        // Get element bounds
        /*
         const rect = this.canvas.getBoundingClientRect()
        const { top, left } = rect
        */

        TweenMax.to(this.illo.rotate, 3, {
            x: x,
            y: y,
            ease: Expo.easeOut
        })
        this.illo.updateRenderGraph()

    }
    getObject() {
        // console.log(this.illo)
        return this.illo
        
    }
    create() {
        // const colorArray = this.getRandomColors(colors.shapeColors)
        this.object = new Zdog.Box({
            addTo: this.illo,
            width: Math.floor(window.innerWidth / 4),
            height: Math.floor(window.innerHeight / 4),
            depth: 100,
            stroke: false,
            color: '#232323',
            leftFace: '#343434',
            rightFace: '#454545',
            topFace: '#565656',
            bottomFace: '#787878'
        })
    
        this.render()
        this.initEvents()

        return this
        
    }
    render() {
        this.illo.updateRenderGraph()
        this.animate()
    }
    animate() {
        this.illo.updateRenderGraph()

        requestAnimationFrame(() => this.animate() )

        this.illo.rotate.y += 0.01
        this.illo.rotate.z += 0.01
    }
}

export default Canvas;