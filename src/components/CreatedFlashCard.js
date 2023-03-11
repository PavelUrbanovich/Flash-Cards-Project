import React from 'react';
import { CreatedFlashCardBackSide } from './CreatedFlashCardBackSide';
import { CreatedFlashCardFrontSide } from './CreatedFlashCardFrontSide';

export const CreatedFlashCard = (props) => {
    let {meaningsList, meaningsListBack, cardsList, handlerDeleteCard, pos} = props;
    return(
        <div className="created-card">
            <CreatedFlashCardFrontSide 
                handlerDeleteCard={handlerDeleteCard} 
                meaningsList={meaningsList} 
                cardsList={cardsList}
                pos={pos}
            />
            <CreatedFlashCardBackSide 
                meaningsListBack={meaningsListBack} 
                cardsList={cardsList}
            />
        </div>
    )
};