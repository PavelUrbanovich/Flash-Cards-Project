import React from 'react';
import { flashCardsDataArray } from '../shared/flashCardsDataArray';

export const AddFlashCardBtn = (props) => {
    let {cardAddition, cardsList, meaningsList, meaningsListBack, wipeMeaningList, wipeMeaningListBack} = props;
    return(
       <div className = "add-flash-card-btn-container">
            <button className = "add-flash-card-btn" onClick={() => {
                const flashCardData = {
                    id: cardsList.length,
                    frontSideMeaningsList: {meaningsList},
                    backSideMeaningsList: {meaningsListBack}
                };
                flashCardsDataArray.unshift(flashCardData);
                cardAddition(flashCardsDataArray);
                wipeMeaningList('');
                wipeMeaningListBack('');
                const sideOne = document.querySelector('.side-1');
                const sideTwo = document.querySelector('.side-2');
                setTimeout(() => {
                    const createdSideOne = document.querySelector(`.color-side-${cardsList.length+1}`);
                    createdSideOne.style.backgroundColor = sideOne.style.backgroundColor;
                    const createdSideTwo = document.querySelector(`.color-back-side-${cardsList.length+1}`);
                    createdSideTwo.style.backgroundColor = sideTwo.style.backgroundColor;
                    sideOne.style.backgroundColor = 'rgb(77 77 76)';
                    sideTwo.style.backgroundColor = 'rgb(77 77 76)';
                }, 10);
            }}>
                Create
            </button>
       </div> 
    )
};
