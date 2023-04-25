import React from 'react';
import { flashCardsDataArray } from '../shared/flashCardsDataArray';
import { frontSideMeaningsArray } from '../shared/frontSideMeaningsArray';
import { CreationFrontTxt2 } from './CreationFrontTxt2';
import { backSideMeaningsArray } from '../shared/backSideMeaningsArray';
import { CreationBackTxt2 } from './CreationBackTxt2';

export const AddFlashCardBtn = (props) => {
    let {cardAddition, cardsList, meaningsList, meaningsListBack, wipeMeaningList, wipeMeaningListBack} = props;
    let testMeaningsList = frontSideMeaningsArray.map((el,pos) => {
        return (
            <CreationFrontTxt2
                name={el.name}
                key={el.id}
                pos={pos}
            />
        )
    });
    let testMeaningsList2 = backSideMeaningsArray.map((el, pos) => {
        return (
            <CreationBackTxt2
                nameBack={el.name}
                key={el.id}
                pos={pos}
            />
        )
    })
    return(
       <div className = "add-flash-card-btn-container">
            <button className = "add-flash-card-btn" onClick={() => {
                     const sideOne = document.querySelector('.side-1');
                     const sideTwo = document.querySelector('.side-2');
                console.log(testMeaningsList)
                const flashCardData = {
                    id: cardsList.length,
                    frontSideColor: sideOne,
                    backSideColor: sideTwo, 
                    frontSideMeaningsList: {testMeaningsList},
                    backSideMeaningsList: {testMeaningsList2}
                };
                flashCardsDataArray.unshift(flashCardData);
                cardAddition(flashCardsDataArray);
                wipeMeaningList('');
                wipeMeaningListBack('');
                for(let i = frontSideMeaningsArray.length;  i != 0; i--) {
                    frontSideMeaningsArray.pop();
                };
                for(let i = backSideMeaningsArray.length;  i != 0; i--) {
                    backSideMeaningsArray.pop();
                };
                // const sideOne = document.querySelector('.side-1');
                // const sideTwo = document.querySelector('.side-2');
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
