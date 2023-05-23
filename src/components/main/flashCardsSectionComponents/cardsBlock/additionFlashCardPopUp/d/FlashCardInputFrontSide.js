import React from 'react';

export const FlashCardInputFrontSide = ({ onChange }) => {
    const handlerStateChange = (event) => {
        onChange(event.target.value)
    }
    return(
        <textarea type = "text" placeholder = "word" className = "setting-card-performance__window" onChange={handlerStateChange}></textarea>
    )
};