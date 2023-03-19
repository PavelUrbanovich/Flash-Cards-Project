import React from 'react';
import { CreatedFlashCardBackSide } from './CreatedFlashCardBackSide';
import { CreatedFlashCardFrontSide } from './CreatedFlashCardFrontSide';

export const CreatedFlashCard = (props) => {
    let {frontSideMeaningsList, backSideMeaningsList, cardsList, handlerDeleteCard, pos, item} = props;
    return(
        <div className="created-card">
            <CreatedFlashCardFrontSide 
                handlerDeleteCard={handlerDeleteCard} 
                frontSideMeaningsList={frontSideMeaningsList} 
                cardsList={cardsList}
                pos={pos}
                item={item}
            />
            <CreatedFlashCardBackSide 
                backSideMeaningsList={backSideMeaningsList} 
                cardsList={cardsList}
            />
        </div>
    )
};