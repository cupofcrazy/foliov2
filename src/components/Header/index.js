import React, { useRef, useEffect } from 'react';


const Header = () => {

    let toggleEl = useRef(null)
    // const metaThemeEl = 

    useEffect(() => {
        toggleEl.addEventListener('click', () => {
            
            // NOT GREAT YET, BARE WITH ME
            document.body.classList.toggle('change')
            const metaTheme = document.querySelector('meta[name=theme-color]')
            const color = metaTheme.getAttribute('content')

            color === '#111111' ? metaTheme.setAttribute('content', '#EEE') : metaTheme.setAttribute('content', '#111111')
        })
    })

    return (
        <header>
            <nav>
                <h1 className="logo">INDEX</h1>
                <div className="circle" ref={ el => toggleEl = el }></div>
            </nav>
        </header>
    );
};

export default Header;