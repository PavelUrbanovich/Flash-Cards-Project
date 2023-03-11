import React from 'react';
import { FlashCardRemoveBtn } from './FlashCardRemoveBtn';
import { FlashCardImg } from './FlashCardImg';

export const CreatedFlashCardBackSide = (props) => {
    let {meaningsListBack, cardsList} = props;
    return(
        <div className = {`created-flash-card-back-side  color-back-side-${cardsList.length+1}`}>
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
                    {meaningsListBack}
                </div>
            </div>
        </div>
    )
};