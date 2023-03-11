import React from 'react';
import { FlashCardRemoveBtn } from './FlashCardRemoveBtn';
import { FlashCardImg } from './FlashCardImg';

export const CreatedFlashCardFrontSide = (props) => {
    let {frontSideMeaningsList, cardsList, handlerDeleteCard, pos} = props;
    return(
        <div className = {`created-flash-card-front-side  color-side-${cardsList.length+1}`}>
            <div className="card-content">
                <div className="card-fncs">
                    <div className="card-remove-fnc">
                       <FlashCardRemoveBtn  
                            // cardsList={cardsList} 
                            handlerDeleteCard={handlerDeleteCard}
                            pos={pos}
                        />
                    </div>
                </div>
                <div className = "flash-card-img-container">
                    <FlashCardImg/>
               
                </div>
                <div className="card-txt">
                    {/* {frontSideMeaningsList} */}
                </div>
            </div>
        </div>
    )
};
    //cardsList = {cardsList} handlerChangeCards = {handlerChangeCards} 
//{`created-flash-card-front-side color-side-${cardsList.length+1}`