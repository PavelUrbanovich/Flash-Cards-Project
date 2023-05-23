import React from 'react';

export const FlashCardInputBackSide = ({ onChange }) => {
    const handlerStateChangeBack = (event) => {
        onChange(event.target.value)
    }
    return(
        <textarea type = "text" placeholder = "слово" className = "setting-card-performance__window2" onChange={handlerStateChangeBack}></textarea>
    )
};