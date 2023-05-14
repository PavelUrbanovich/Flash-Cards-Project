import React from 'react';
import { CreatedFlashCardBackSide } from './CreatedFlashCardBackSide';
import { CreatedFlashCardFrontSide } from './CreatedFlashCardFrontSide';
import { flashCardsDataArray } from '../shared/flashCardsDataArray';

export const CreatedFlashCard = (props) => {
    let {frontSideMeaningsList, backSideMeaningsList, cardsList, handlerDeleteCard, pos, item} = props;
    // const sideOne = document.querySelector('.side-1');
    // const createdSideOne = document.querySelector(`.color-side-${cardsList.length+1}`);
    // createdSideOne.style.backgroundColor = sideOne.style.backgroundColor;
    console.log(flashCardsDataArray[pos])
    const createdSideOne = document.querySelector(`.color-side-${pos}`);
    const createdSideTwo = document.querySelector(`.color-side-two-${pos}`);
    // createdSideOne.style.backgroundColor = flashCardsDataArray[pos].color;
    return(
        <div className="created-card">
            <CreatedFlashCardFrontSide 
                handlerDeleteCard={handlerDeleteCard} 
                frontSideMeaningsList={frontSideMeaningsList} 
                cardsList={cardsList}
                pos={pos}
                item={item}
                // colorSide={`color-side-${cardsList.length+1}`}
                colorSide={`color-side-${pos}`}
            />
            <CreatedFlashCardBackSide 
                backSideMeaningsList={backSideMeaningsList} 
                pos={pos}
                colorSide={`color-side-two-${pos}`}
                // cardsList={cardsList}
            />
        </div>
    )
};