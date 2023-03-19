import React from 'react';
import { CreationFlashCardPopUp } from './CreationFlashCardPopUp';

export const PopUpOpenBtn = (props) => {
    let {cardAddition, cardsList, handlerDeleteCard, arr2, getArray} = props;
    return(
        <div>
            
            <button className = "pop-up-open-btn" onClick = {() => {
                const creationFlashCardPopUp = document.querySelector('.creation-flash-card-pop-up');
                const displayEclipse = document.querySelector('.display-eclipse');
                const pageBody = document.querySelector('body');
                // const test = creationFlashCardPopUp.style.display === 'none';
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
                getArray={getArray} 
                cardAddition={cardAddition} 
                cardsList={cardsList} 
                handlerDeleteCard={handlerDeleteCard}
                arr2={arr2}
            />
        </div>
    )
};