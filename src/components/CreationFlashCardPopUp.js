import React from 'react';
import { AddFlashCardBtn } from './AddFlashCardBtn';
import { CreationFlashCardInput } from './CreationFlashCardInput';
import { CreationFlashCardInputBack } from './CreationFlashCardInputBack';
import { CreationFrontFlashCardAddBtn } from './CreationFrontFlashCardAddBtn';
import { CreationBackFlashCardAddTxtBtn } from './CreationBackFlashCardAddTxtBtn';
import { FlashCard } from './FlashCard';
import { FlashCardsColor } from './FlashCardsColor';
import { UpendBtnComponent } from './UpendBtnComponent';

export const CreationFlashCardPopUp = (props) => {
    let {cardAddition, cardsList, handlerDeleteCard, pos} = props;
    const [meaningsList, setMeaningsList] = React.useState([]);
    const handleDeleteNameFromMeaningsList = () => setMeaningsList();
    const [meaningsListBack, setMeaningsListBack] = React.useState([]);
    const [name, setName] = React.useState('');
    const wipeMeaningList = (meaningsList) => setMeaningsList(''); 
    const wipeMeaningListBack = (meaningsListBack) => setMeaningsListBack('');
    const handlerStateChange = (name) => {
        setName(name)
    }
    const [nameBack, setNameBack] = React.useState('');
    const handlerStateChangeBack = (nameBack) => {
        setNameBack(nameBack)
    }
    const [cardsList2, setCardsList2] = React.useState([]);
    return(
        <div className="creation-flash-card-pop-up">
            <div className = "creation-flash-card-pop-up__close-btn-container">
                <button className = "creation-flash-card-pop-up__close-btn" onClick = {() => {
                    const pageBody = document.querySelector('body');
                    const creationFlashCardPopUp = document.querySelector('.creation-flash-card-pop-up');
                    const displayEclipse = document.querySelector('.display-eclipse');
                    creationFlashCardPopUp.style.display = 'none';
                    pageBody.style.overflow = 'scroll';
                    displayEclipse.style.display = 'none';
                }}>
                    &times;
                </button>
            </div>
            <div creation-flash-card-pop-up__content>
                <div className = "content__title-container">
                    <h1 className = "content__title">Flashcard creation</h1>
                </div>
                <div className = "flash-card-customization">
                        <div className="flash-card-display">
                            <FlashCard 
                                meaningsList={meaningsList} 
                                meaningsListBack={meaningsListBack}
                            />
                        </div>
                        <UpendBtnComponent />
                        <div className="flash-card-main-settings">
                            <CreationFlashCardInput 
                                onChange={handlerStateChange} 
                                name={name}
                            />
                            <CreationFrontFlashCardAddBtn 
                                changeMeaningsList={item => { setMeaningsList(() => [...meaningsList, item]);}} 
                                handlerStateChange={handlerStateChange} 
                                name={name} 
                                meaningsList={meaningsList}
                            />
                            <CreationFlashCardInputBack 
                                onChange={handlerStateChangeBack} 
                                nameBack={nameBack}
                            />
                            <CreationBackFlashCardAddTxtBtn 
                                changeMeaningsListBack={item => { setMeaningsListBack(() => [...meaningsListBack, item]);}} 
                                handlerStateChangeBack={handlerStateChangeBack} 
                                nameBack={nameBack} 
                                meaningsListBack={meaningsListBack}
                            />
                            <FlashCardsColor 
                                cardsList={cardsList}
                            />
                            <AddFlashCardBtn 
                                meaningsList={meaningsList} 
                                cardAddition={cardAddition}
                                cardsList2={cardsList2} 
                                cardsList={cardsList} 
                                meaningsListBack={meaningsListBack}
                                wipeMeaningList={wipeMeaningList} 
                                wipeMeaningListBack={wipeMeaningListBack}
                                handlerDeleteCard={handlerDeleteCard}
                                pos={pos}
                            />
                        </div>
                </div>
            </div>
        </div>
    )
}

//<AddFlashCardBtn cardAddition = {item => setCardsList2(() => [...cardsList2, item])}