import React from 'react';

export const CreationFlashCardInputBack = ({ onChange }) => {
    const handlerStateChangeBack = (event) => {
        onChange(event.target.value)
    }
    return(
        <div className="creation-flash-card-input">
            <div className = "creation-flash-card-input-container">
                <input type="text" placeholder="Enter the translation into your language" className = "creation-flash-card-input-back" onChange={handlerStateChangeBack}/>
            </div>
        </div>
    )
};