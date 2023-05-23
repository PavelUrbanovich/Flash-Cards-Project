import React from 'react';
import { shiftObject } from '/Верстка/sixth-react-project/src/shared/shift';

export const SpeciesLeftShiftBtn = (props) => {
    return (    
        <button className = "species-left-shift-btn" onClick={() => {
            const speciesListItems = document.querySelector('.species-list-items');
            shiftObject.shift == 0 ? shiftObject.shift = 0 : shiftObject.shift +=370;
            speciesListItems.style.left = `${shiftObject.shift}px`;
            console.log(shiftObject.shift);
        }}>
            <span className = "species-left-shift-btn-arrow"></span>
        </button>
    );
};