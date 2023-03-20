import React, { useState } from 'react';
import { CardsBlock } from './CardsBlock';
import { PopUpOpenBtn } from './PopUpOpenBtn';
import { RecycleBin } from './RecycleBin';
import { SearchCardInput } from './SearchCardInput';
import { CreatedFlashCard } from './CreatedFlashCard';
import { flashCardsDataArray } from '../shared/flashCardsDataArray';

export const FlashCardsSection = () => {
    let [cardsList, setCardsList] = useState([]);
    let flashCardsArray;
    const flashCardsArrayRender = () => {
        flashCardsArray = flashCardsDataArray.map((el, pos) => {
            return (
                <CreatedFlashCard  
                    cardsList={cardsList} 
                    frontSideMeaningsList={el.frontSideMeaningsList.meaningsList} 
                    backSideMeaningsList={el.backSideMeaningsList.meaningsListBack}
                    handlerDeleteCard={handlerDeleteCard} 
                    key={el.id} 
                    pos={pos}
                />
            );
        });
        setCardsList(flashCardsArray);
    };
    const cardAddition = () => {
        flashCardsArrayRender();
    };
    const handlerDeleteCard = (item) => {
        const removedCard = flashCardsDataArray.splice(item,1);
        flashCardsArrayRender();
    };
  
    return (
        <section className = "flash-cards-section">
            <div className = "addition-card-block">
                <PopUpOpenBtn 
                    cardAddition={cardAddition}
                    cardsList={cardsList} 
                    handlerDeleteCard={handlerDeleteCard}
                />
                <SearchCardInput 
                    cardsList={cardsList} 
                />
                <RecycleBin />
            </div> 
            <div className="cards-block-container">
                <div className = "cards-block-title-container">
                    <h1 className = "cards-block-title">Collection</h1>
                </div>
                <section className = "cards-block-species">
                    <ul className="species-list">
                    <li className = "species-list-item">
                            <button className="species-add-btn">
                                +
                            </button>
                        </li>
                        <li className = "species-list-item">
                            <button className="species-list-btn">
                                All
                            </button>
                        </li>
                    </ul>
                </section>
                <CardsBlock  
                    cardsList={cardsList} 
                />
            </div>
        </section>
    )
};