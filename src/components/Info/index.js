import React from 'react';

const Works = () => {  
    return (
        <div id="works">
            
            <section className="bio__content">
                <h1>About</h1>
                
                <div className="paragraph">
                    <p>Hi, I'm Tobi</p>
                    <p>I am a front-end / software engineer.</p>
                    <p>I get a kick out of designing, building, and delivering effective products.</p>
                    <p>I develop web apps that provide rich & pixel-perfect user interfaces backed with leading technologies</p>
                    <p>Available for opportunities</p>
                    <p>SUMMER (2020)</p>
                </div>
            </section>
            <section className="works">
                <h1>Works</h1>
                <h2>Coming Soon</h2>
                <ul>
                    <li>Posse Studio Site</li>
                </ul>
            </section>
            <section className="works">
                <h1>Experiments</h1>
                <ul>
                    <li><a href="https://interactive-cubes.netlify.com" target="_blank" rel="noopener noreferrer">Interactive Cubes</a></li>
                </ul>
            </section>
            

            <section className="skills">
                <h1>Skills</h1>
                <ul>
                    <li>Front-end Development</li>
                    <li>Web UI / UX Design</li>
                    <li>Graphic Design</li>
                    <li>Motion Graphics<span>(65%)</span></li>
                    <li>3D Design<span>(75%)</span></li>
                </ul>
            </section>

            <section className="tools">
                <h1>Tools</h1>
                <ul>
                    <li>Javascript<span>(React, Vue, Node)</span></li>
                    <li>Java <span>(Software Development)</span></li>
                    <li>Python<span>(Software | Backend)</span></li>
                    <li>Kotlin<span>(App Development)</span></li>
                    <li>Adobe Suite<span>(PS, AI, XD, AE)</span></li>
                    <li>Blender 3D</li>
                    <li>Cinema 4D</li>
                </ul>
            </section>
            
            
        </div>
    );
};

export default Works;