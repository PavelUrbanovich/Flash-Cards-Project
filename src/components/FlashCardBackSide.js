import React from 'react';
import { FlashCardImg } from './FlashCardImg';
import { FlashCardRemoveBtn } from './FlashCardRemoveBtn';

export const FlashCardBackSide = (props) => {
    let {cardsList, handlerChangeCards, meaningsListBack} = props;
    return(
        <div className = "side-2">
            <div className="card-content">
                <div className="card-fncs">
                    <div className="card-remove-fnc">
                       <FlashCardRemoveBtn  cardsList = {cardsList} handlerChangeCards = {handlerChangeCards}/>
                    </div>
                </div>
                <div className = "flash-card-img-container">
                    <FlashCardImg/>
                </div>
                <div className="card-txt">
                    {meaningsListBack}
                </div>
            </div>
        </div>
    )
};