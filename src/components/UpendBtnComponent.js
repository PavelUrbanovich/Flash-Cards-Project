import React from 'react';

export const UpendBtnComponent = () => {
    return (
        <button className = "next-btn" onClick = {() => {
            const card = document.querySelector('.side-1');
            const secondCard = document.querySelector('.side-2');
            const test = secondCard.style.opacity === '1';
            if (test === true) {
                secondCard.style.animation = 'rotateCard 1.3s linear';
                setTimeout(() => {
                    secondCard.style.animation = 'none';
                    card.style.zIndex = '3';
                    card.style.opacity = '1';
                    secondCard.style.opacity = '0';
                    secondCard.style.zIndex = '1';
                    card.style.animation = 'rotate2 0.8s linear';
                    card.style.transform = 'none';
                    secondCard.style.transform = 'rotateY(84deg)';
                }, 600);
            }
            if (test === false) {
                card.style.animation = 'rotateCard 1.3s linear';
                setTimeout(() => {
                    card.style.animation = 'none';
                    secondCard.style.zIndex = '15';
                    secondCard.style.opacity = '1';
                    card.style.opacity = '0';
                    card.style.zIndex = '1';
                    secondCard.style.animation = 'rotate2 0.8s linear';
                    secondCard.style.transform = 'none';
                    card.style.transform = 'rotateY(84deg)';
                }, 600);
            }
        }}>
            <svg className = "reverse-btn">
                <symbol id="reverse-svg" viewBox="0 0 285.838 285.838">
                <path d="M20.905,65.021l90.956,65.021V92.521h95.675v67.713l55,39.875V37.521H111.861V0L20.905,65.021z M247.536,52.521v118.186
	l-25-18.125V77.521H96.861v23.359L46.698,65.021l50.163-35.859v23.359H247.536z M264.933,220.816l-90.956-65.021v37.521H78.302
	v-67.713l-55-39.875v162.588h150.675v37.521L264.933,220.816z M38.302,233.316V115.131l25,18.125v75.061h125.675v-23.359
	l50.163,35.859l-50.163,35.859v-23.359H38.302z"/>
                </symbol>
                <use href="#reverse-svg"></use>
            </svg>
        </button>
    )
};
/*
<path d="M34 6.67564C39.978 10.1337 44 16.5972 44 24M34 6.67564V14M34 6.67564H41.3244M41.3244 34C37.8663 39.978 31.4028 44 24 44M41.3244 34H34M41.3244 34V41.3244M14 41.3244C8.02199 37.8663 4 31.4028 4 24M14 41.3244V34M14 41.3244H6.67564M6.67564 14C10.1337 8.02199 16.5972 4 24 4M6.67564 14H14M6.67564 14V6.67564" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M41.3244 34C37.8663 39.978 31.4028 44 24 44M41.3244 34H34M41.3244 34V41.3244"  strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 41.3244C8.02199 37.8663 4 31.4028 4 24M14 41.3244V34M14 41.3244H6.67564"  strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.67566 14C10.1338 8.02199 16.5972 4 24 4M6.67566 14H14M6.67566 14V6.67564"  strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M34 6.67578C39.978 10.1339 44 16.5973 44 24.0001M34 6.67578V14.0001M34 6.67578H41.3244" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
*/