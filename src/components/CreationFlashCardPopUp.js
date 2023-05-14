import React from 'react';
import { AddFlashCardBtn } from './AddFlashCardBtn';
import { CreationFlashCardInput } from './CreationFlashCardInput';
import { CreationFlashCardInputBack } from './CreationFlashCardInputBack';
import { CreationFrontFlashCardAddBtn } from './CreationFrontFlashCardAddBtn';
import { CreationBackFlashCardAddTxtBtn } from './CreationBackFlashCardAddTxtBtn';
import { FlashCard } from './FlashCard';
import { FlashCardsColor } from './FlashCardsColor';
import { UpendBtnComponent } from './UpendBtnComponent';
import { frontSideMeaningsArray } from '../shared/frontSideMeaningsArray';
import { backSideMeaningsArray } from '../shared/backSideMeaningsArray';
import { CreationFrontTxt } from './CreationFrontTxt';
import { CreationBackTxt } from './CreationBackTxt';
import { SelectSubjectMenu } from './SelectSubjectMenu';

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
    const meaningsArrayUpdate = () => {
        let newMeaningsList = frontSideMeaningsArray.map((el,pos) => {
            return (
                <CreationFrontTxt
                    name={el.name}
                    key={el.id}
                    pos={pos}
                    deleteMeaning={deleteMeaning}
                />
            )
        });
        setMeaningsList(newMeaningsList);
    }
    const backSideMeaningsArrayUpdate = () => {
        const newBackSideMeaningsList = backSideMeaningsArray.map((el,pos) => {
            return (
                <CreationBackTxt
                    nameBack={el.name}
                    key={el.id}
                    pos={pos}
                    deleteMeaningBack={deleteMeaningBack}
                />
            )
        });
        setMeaningsListBack(newBackSideMeaningsList);
    }
    const deleteMeaning = (item) => {
        frontSideMeaningsArray.splice(item, 1);
        meaningsArrayUpdate();
    }
    const deleteMeaningBack = (item) => {
        backSideMeaningsArray.splice(item, 1);
        backSideMeaningsArrayUpdate();
    }
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
                                // changeMeaningsList={item => { setMeaningsList(() => [...meaningsList, item]);}} 
                                changeMeaningsList={(item) => {
                                    let newMeaning = {
                                        id: frontSideMeaningsArray.length+1,
                                        name: item,

                                    };
                                    frontSideMeaningsArray.push(newMeaning);
                                    // let newMeaningsList = frontSideMeaningsArray.map((el,pos) => {
                                    //     return (
                                    //         <CreationFrontTxt
                                    //             name={el.name}
                                    //             key={el.id}
                                    //             pos={pos}
                                    //         />
                                    //     )
                                    // });
                                    // setMeaningsList(newMeaningsList);
                                    meaningsArrayUpdate();
                                }}
                                handlerStateChange={handlerStateChange} 
                                name={name} 
                                meaningsList={meaningsList}
                                deleteMeaning={deleteMeaning}
                            />
                            <CreationFlashCardInputBack 
                                onChange={handlerStateChangeBack} 
                                nameBack={nameBack}
                            />
                            <CreationBackFlashCardAddTxtBtn 
                                changeMeaningsListBack={
                                    (item) => {
                                        let newMeaningBack = {
                                            id: backSideMeaningsArray.length+1,
                                            name: item,
    
                                        };
                                        backSideMeaningsArray.push(newMeaningBack);
                                        // let newMeaningsList = frontSideMeaningsArray.map((el,pos) => {
                                        //     return (
                                        //         <CreationFrontTxt
                                        //             name={el.name}
                                        //             key={el.id}
                                        //             pos={pos}
                                        //         />
                                        //     )
                                        // });
                                        // setMeaningsList(newMeaningsList);
                                        backSideMeaningsArrayUpdate();
                                }} 
                                handlerStateChangeBack={handlerStateChangeBack} 
                                nameBack={nameBack} 
                                meaningsListBack={meaningsListBack}
                            />
                            <div className = "color-subject-choise">
                                <SelectSubjectMenu 
                                
                                />
                                <FlashCardsColor 
                                    cardsList={cardsList}
                                />
                            </div>
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