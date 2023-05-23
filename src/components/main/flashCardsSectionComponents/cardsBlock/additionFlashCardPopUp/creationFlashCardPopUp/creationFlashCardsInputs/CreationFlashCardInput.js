import React from 'react';
import './creationFlashCardInputsStyles.css';
export const CreationFlashCardInput = ({ onChange }) => {
    const handlerStateChange = (event) => {
        onChange(event.target.value)
    }
    return(
        <div className="creation-flash-card-input">
            <div className = "creation-flash-card-input-container">
                <input type="text" placeholder="Enter a word from the studying language" className = "creation-flash-card-input-input" onChange={handlerStateChange}/>
            </div>
            <div className = "creation-flash-card-input-btn-container">
            </div>
        </div>
    )
};