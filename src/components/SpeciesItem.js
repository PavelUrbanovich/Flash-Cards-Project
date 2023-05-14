import React from 'react';
import { speciesListArray } from '../shared/speciesListArray';
import { CreatedFlashCard } from './CreatedFlashCard';

export const SpeciesItem = (props) => {
    let {itemName, setCardsList, pos, cardsList, flashCardsArray, handlerDeleteCard, test5, test7} = props;
    return (
        <li className = "species-list-item">
            <button className="species-list-btn" onClick={(event) => {
                
                let flashCardsArray2;
            //    event.target.style.backgroundColor = '#c2c2bf';
            //    let speciesBtnsCollection = document.querySelectorAll('.species-list-btn');
               
            //     speciesBtnsCollection = Object.entries(speciesBtnsCollection);
                // let test = speciesBtnsCollection.map((el => {
                //     // if (el.style.backgroundColor === '#c2c2bf') el.style.backgroundColor = '#5a5a58';
                //     return el.style.backgroundColor;
                // }));
                // console.log(speciesBtnsCollection)
                 const flashCardsArrayRender = () => {
                    flashCardsArray2 = speciesListArray[pos].cardsList.map((el, pos) => {
                        return (
                            <CreatedFlashCard  
                                cardsList={cardsList} 
                                frontSideMeaningsList={test5} 
                                backSideMeaningsList={test7}
                                handlerDeleteCard={handlerDeleteCard} 
                                key={el.id} 
                                pos={pos}
                            />
                        );
                    });
                    setCardsList(flashCardsArray2);
                };
                flashCardsArrayRender();
            }}>
                {itemName}               
            </button>
        </li>
    );
};