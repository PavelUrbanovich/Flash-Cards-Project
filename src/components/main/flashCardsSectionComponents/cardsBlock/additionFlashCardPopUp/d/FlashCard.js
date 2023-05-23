import React from 'react';
import { FlashCardBackSide } from './FlashCardBackSide';
import { FlashCardFrontSide } from './FlashCardFrontSide';

export const FlashCard = (props) => {
    // let {cardsList, handlerChangeCards, name, nameBack} = props;
    let {meaningsList, meaningsListBack} = props;

    return(
        // <div className = "created-card">
        //     <FlashCardFrontSide  cardsList = {cardsList} handlerChangeCards = {handlerChangeCards} name={name} />
        //     <FlashCardBackSide cardsList = {cardsList} handlerChangeCards = {handlerChangeCards} nameBack={nameBack}/>
        // </div>
        <div className = "created-card">
            <FlashCardFrontSide  meaningsList = {meaningsList} />
            <FlashCardBackSide meaningsListBack = {meaningsListBack}/>
        </div>
    )
};

//<FlashCardBackSide cardsList = {cardsList} handlerChangeCards = {handlerChangeCards} nameBack={nameBack}/>