import React from 'react';
import { CreatedFlashCardBackSide } from './CreatedFlashCardBackSide';
import { CreatedFlashCardFrontSide } from './CreatedFlashCardFrontSide';

export const CreatedFlashCard = (props) => {
    let {frontSideMeaningsList, backSideMeaningsList, cardsList, handlerDeleteCard, pos, item} = props;
    // const sideOne = document.querySelector('.side-1');
    // const createdSideOne = document.querySelector(`.color-side-${cardsList.length+1}`);
    // createdSideOne.style.backgroundColor = sideOne.style.backgroundColor;
    return(
        <div className="created-card">
            <CreatedFlashCardFrontSide 
                handlerDeleteCard={handlerDeleteCard} 
                frontSideMeaningsList={frontSideMeaningsList} 
                cardsList={cardsList}
                pos={pos}
                item={item}
                colorSide={`color-side-${cardsList.length+1}`}
            />
            <CreatedFlashCardBackSide 
                backSideMeaningsList={backSideMeaningsList} 
                cardsList={cardsList}
            />
        </div>
    )
};