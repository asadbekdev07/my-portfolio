// ScrollToTop.jsx
import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
    const [scrollY, setScrollY] = useState(0);
    const [showButton, setShowButton] = useState(true); // Show button initially

    const handleScroll = () => {
        setScrollY(window.scrollY);
        // Show button if scrolled or at the top
        setShowButton(window.scrollY > 0);
    };

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Check scroll position on component mount
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? Math.min((scrollY / scrollableHeight) * 100, 100) : 0;
    const radius = 25;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        showButton && (
            <div className="scroll-to-top" onClick={handleClick}>
                <svg className="progress-circle" viewBox="0 0 60 60">
                    <circle className="progress-circle-background" cx="30" cy="30" r="25" />
                    <circle
                        className="progress-circle-bar"
                        cx="30"
                        cy="30"
                        r="25"
                        style={{ strokeDasharray: `${circumference}`, strokeDashoffset: `${offset}` }}
                    />
                </svg>
                <div className="arrow" />
            </div>
        )
    );
};

export default ScrollToTop;
