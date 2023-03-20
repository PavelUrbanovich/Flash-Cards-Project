import React from 'react';
import { FlashCardRemoveBtn } from './FlashCardRemoveBtn';
import { FlashCardImg } from './FlashCardImg';
export const FlashCardFrontSide = (props) => {
    let {cardsList, handlerChangeCards, name, meaningsList} = props;
    return(
        <div className = "side-1">
            <div className="card-content">
                <div className="card-fncs">
                    <div className="card-remove-fnc">
                       <FlashCardRemoveBtn  cardsList = {cardsList} handlerChangeCards = {handlerChangeCards} />
                    </div>
                </div>
                <div className = "flash-card-img-container">
                    <button className = "flash-card-chose-img-btn">Choose image</button>
               
                </div>
                <div className="card-txt">
                    {meaningsList}
                </div>
            </div>
        </div>
    )
}