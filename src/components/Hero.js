import React, { useState, useEffect } from 'react';
import './Hero.css';

function Hero(props) {
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let typingDelay;
        
        if (isDeleting) {
            if (typedText.length === 0) {
                setIsDeleting(false);
                typingDelay = setTimeout(() => {
                    setTypedText(props.text[0]);
                }, 500);
            } else {
                typingDelay = setTimeout(() => {
                    setTypedText(typedText.slice(0, typedText.length - 1));
                }, 100);
            }
        } else {
            if (typedText.length === props.text.length) {
                // Đợi một lúc trước khi bắt đầu xóa
                typingDelay = setTimeout(() => {
                    setIsDeleting(true);
                }, 2000);
            } else {
                typingDelay = setTimeout(() => {
                    setTypedText(props.text.substring(0, typedText.length + 1));
                }, 150);
            }
        }

        return () => clearTimeout(typingDelay);
    }, [typedText, props.text, isDeleting]);

    return (
        <>
            <div className={props.cName}>
                <div className='hero-text'>
                    <h1>{props.title}</h1>
                    <p>{typedText}</p>
                    <a href='/Lythuyet' className={props.btnClass}>
                        {props.buttonText}
                    </a>
                </div>
            </div>
        </>
    );
}

export default Hero;