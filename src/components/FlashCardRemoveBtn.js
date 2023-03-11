import React, { useEffect } from 'react';

export const FlashCardRemoveBtn = (props) => {
    let {handlerDeleteCard, cardsList, pos} = props;
    let temp = 0;
    useEffect(() => {
        temp +=1;
    }, [cardsList]);
    return(
        <svg className = "remove-btn" onClick={() => {
            handlerDeleteCard(pos);
            }}>
            <symbol id="recycle-bin-svg" viewBox="0 0 394.299 394.299">
                <path d="M345.738,56.108h-80.183V29.735C265.556,13.343,252.213,0,235.82,0h-77.354c-16.393,0-29.724,13.343-29.724,29.735v26.373
                H48.555c-16.394,0-29.724,13.343-29.724,29.736v38.671c0,6.794,5.503,12.298,12.298,12.298H63.41v227.762
                c0,16.393,13.331,29.724,29.724,29.724h212.63c16.394,0,29.736-13.331,29.736-29.724V136.813h27.67
                c6.785,0,12.298-5.503,12.298-12.298V85.844C375.468,69.451,362.131,56.108,345.738,56.108z M153.338,29.735
                c0-2.834,2.306-5.14,5.128-5.14h77.354c2.834,0,5.14,2.306,5.14,5.14v26.373h-87.622V29.735z"/>
            </symbol>
            <use href="#recycle-bin-svg"></use>
        </svg>
    )
};