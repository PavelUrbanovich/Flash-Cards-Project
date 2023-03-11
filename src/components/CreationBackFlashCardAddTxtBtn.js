import React from 'react';
import { CreationBackTxt } from './CreationBackTxt';

export const CreationBackFlashCardAddTxtBtn = (props) => {
    let {meaningsListBack, handlerStateChangeBack, nameBack} = props;
    return(
        <button className="creation-flash-card-input-btn" onClick={() => {
            const getInp = document.querySelector('.creation-flash-card-input-back');
            getInp.value = '';
            props.changeMeaningsListBack(<CreationBackTxt handlerStateChangeBack={handlerStateChangeBack} nameBack={nameBack} key = {meaningsListBack.length+1}/>)
        }}>
            ADD
        </button>
    )
};