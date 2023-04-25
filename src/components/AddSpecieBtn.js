import React from 'react';
import { speciesListArray } from '../shared/speciesListArray';

export const AddSpecieBtn = (props) => {
    let {test1, test3} = props;
    let test2 = {
        id: speciesListArray.length+1,
        name: test1
    }
    return (
        <>
        <li className = "species-list-item" onClick = {() => {
            const speciesInput = document.querySelector('.species-add-input');
            const plusCircle = document.querySelector('.plus-circle');
            const speciesAddBtn = document.querySelector('.species-add-btn');
            const specieAddBtn = document.querySelector('.specie-add-btn');
            let test = speciesInput.style.display === 'none';
        if (test === true) {
            plusCircle.style.animation = 'circleRotate 0.7s linear 0s normal 1 forwards running';
            speciesInput.style.display = 'initial';
            speciesInput.style.animation = 'inputAppearance 1s linear 0s normal 1 forwards running';
            setTimeout(() => {
                speciesAddBtn.style.borderRight = 'none';
                // specieAddBtn.style.display = 'flex';
            }, 1500)
            // speciesAddBtn.style.borderRight = 'none';
            // specieAddBtn.style.display = 'flex';
        }
        if (test === false) {
            plusCircle.style.animation = 'circleRotateBack 0.7s linear 0s normal 1 forwards running';
            speciesInput.style.animation = 'inputAppearanceBack 1s linear 0s normal 1 forwards running';
            setTimeout(() => {
                speciesInput.style.display = 'none';
                // specieAddBtn.style.display = 'none';
                speciesAddBtn.style.borderRight = '4px solid rgb(50, 50, 50)';
            }, 1000);
        }
        // speciesInput.style.animation = 'inputApearance 2s linear 2s';
    }}>
            <button className="species-add-btn">
                <svg className = "plus-circle">
                    <symbol id="plus-circle-svg" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z" fill="#fff"/>
                    </symbol>
                    <use href="#plus-circle-svg"></use>
                </svg>
            </button>
            </li>
            {/* <button onClick = {() => {
                speciesListArray.push(test2);
                console.log(speciesListArray);
                test3(speciesListArray);
            }}>Click me</button> */}
            </>
    );
};