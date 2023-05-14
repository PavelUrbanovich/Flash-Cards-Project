import React from 'react';
import { FlashCardRemoveBtn } from './FlashCardRemoveBtn';
import { FlashCardImg } from './FlashCardImg';
import { flashCardsDataArray } from '../shared/flashCardsDataArray';
import { speciesListArray } from '../shared/speciesListArray';

export const CreatedFlashCardBackSide = (props) => {
    let {backSideMeaningsList, cardsList, pos, colorSide} = props;
    setTimeout(() => {
        const createdSideTwo = document.querySelector(`.color-side-two-${pos}`);
        createdSideTwo.style.backgroundColor = speciesListArray[0].cardsList[pos].backSideColor;
    }, 10);
    return(
        // <div className = {`created-flash-card-back-side  color-back-side-${cardsList.length+1}`}>
        <div className = {`created-flash-card-back-side ${colorSide}`}>
            <div className="card-content">
                <div className="card-fncs">
                    <div className="card-remove-fnc">
                       <FlashCardRemoveBtn  />
                    </div>
                </div>
                {/* <div className = "flash-card-img-container">
                    <FlashCardImg/>
               
                </div> */}
                <div className="card-txt">
                    {backSideMeaningsList}
                </div>
            </div>
        </div>
    )
};