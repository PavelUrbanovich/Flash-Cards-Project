import React from 'react';
import './creationFlashCardMeaningsAdditionBtnsStyles.css';
import { CreationFrontTxt } from '/Верстка/sixth-react-project/src/components/main/flashCardsSectionComponents/cardsBlock/additionFlashCardPopUp/d/CreationFrontTxt';

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