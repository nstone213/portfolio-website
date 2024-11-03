import './index.css';
import React, { useRef } from 'react';
import confetti from 'canvas-confetti';

function Home() {
    const confettiTriggerRef = useRef(null);

    const handleConfetti = () => {
        const element = confettiTriggerRef.current;
        const rect = element.getBoundingClientRect();
        
        // Calculate the center of the element and adjust for the height
        const x = rect.left + rect.width / 2;
        const y = rect.top + window.scrollY; // Add scrollY to account for page scrolling
        
        confetti({
            origin: { x: x / window.innerWidth, y: (y + 20) / window.innerHeight }, // Adjust Y to be above the text
            particleCount: 20,
            spread: 60,
            startVelocity: 20,
        });
    };

    return (
        <>
            <div className='container'>
                <p className='text'>Hi. I'm Nicholas Stone.</p>
                <p className='description'>
                    SWE studying CS & Psychology @<span className='confetti-trigger' ref={confettiTriggerRef} onClick={handleConfetti}>Georgia Tech</span>.
                </p>
            </div>
        </>
    );
}

export default Home;