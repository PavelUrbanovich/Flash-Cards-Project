import React from 'react';
import { shiftObject } from '../shared/shift';
import { speciesListArray } from '../shared/speciesListArray';



export const SpeciesRightShiftBtn = () => {
    
    return (
        <button className = "species-right-shift-btn" onClick={() => {
            // let test2 = shiftObject.shift === test;
            let test = speciesListArray.length * 370 - 1110;
            test = `-${test}`;
            test = Number(test);
            console.log(test)
            const speciesListItems = document.querySelector('.species-list-items');
            shiftObject.shift == test ? shiftObject.shift = test : shiftObject.shift -=370;
            // shiftObject.shift -=170;
            speciesListItems.style.left = `${shiftObject.shift}px`
            // console.log(shiftObject);
            // console.log(test2)
            // console.log(test)
          
        }}>
            <span className = "species-right-shift-btn-arrow"></span>
        </button>
    );
};