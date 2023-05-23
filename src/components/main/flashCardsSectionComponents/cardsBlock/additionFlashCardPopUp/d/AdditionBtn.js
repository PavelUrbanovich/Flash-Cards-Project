import React from 'react';
import { FlashCard } from './FlashCard';
export const AdditionBtn = (props) => {
    let {cardsList, handlerChangeCards, name, nameBack} = props;

    return (
        <button className = "addition-btn" onClick={() => {
            props.changeWord(<FlashCard  cardsList = {cardsList} handlerChangeCards = {handlerChangeCards} key = {cardsList.length+1} name={name} nameBack={nameBack}/>)
        }}>
            +
        </button>
    )
}