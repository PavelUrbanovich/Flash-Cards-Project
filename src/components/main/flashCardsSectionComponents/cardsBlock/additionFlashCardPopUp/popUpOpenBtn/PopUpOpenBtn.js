import React from 'react';
import './popUpOpenBtnStyles.css';
import { CreationFlashCardPopUp } from '../creationFlashCardPopUp/CreationFlashCardPopUp';

export const PopUpOpenBtn = (props) => {
    let {cardAddition, cardsList, handlerDeleteCard} = props;
    return(
        <div>
            <button className = "pop-up-open-btn" onClick = {() => {
                const creationFlashCardPopUp = document.querySelector('.creation-flash-card-pop-up');
                const displayEclipse = document.querySelector('.display-eclipse');
                const pageBody = document.querySelector('body');
                if (creationFlashCardPopUp.style.display === 'none') {
                    pageBody.style.overflow = 'hidden';
                    displayEclipse.style.display = 'initial';
                    creationFlashCardPopUp.style.display = 'flex';
                    window.scrollTo(0, 0);
                }
            }}>
                Create a flashcard
            </button>
            <div className = "display-eclipse" onClick={() => {
            }}>
            </div>
            <CreationFlashCardPopUp
                cardAddition={cardAddition} 
                cardsList={cardsList} 
                handlerDeleteCard={handlerDeleteCard}
            />
        </div>
    )
};