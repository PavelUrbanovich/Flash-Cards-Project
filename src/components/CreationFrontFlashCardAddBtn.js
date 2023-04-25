import React from 'react';
import { CreationFrontTxt } from './CreationFrontTxt';

export const CreationFrontFlashCardAddBtn = (props) => {
    let {meaningsList, handlerStateChange, name, changeMeaningsList} = props;
    return(
        <button className="creation-flash-card-input-btn" onClick={() => {
            const getInp = document.querySelector('.creation-flash-card-input-input');
            getInp.value = '';
            // props.changeMeaningsList(<CreationFrontTxt handlerStateChange={handlerStateChange} meaningsList ={meaningsList} name={name} key = {meaningsList.length+1}/>)
            changeMeaningsList(name);
        }}>
            ADD
        </button>
    )
};
//cardsList = {cardsList} handlerChangeCards = {handlerChangeCards} key = {cardsList.length+1} name={name}