import React, { useState } from 'react';
import { CardsBlock } from './CardsBlock';
import { PopUpOpenBtn } from './PopUpOpenBtn';
import { RecycleBin } from './RecycleBin';
import { SearchCardInput } from './SearchCardInput';
import { CreatedFlashCard } from './CreatedFlashCard';
import { flashCardsDataArray } from '../shared/flashCardsDataArray';
import { SpeciesList } from './SpeciesList';

export const FlashCardsSection = () => {
    let [cardsList, setCardsList] = useState([]);
    let flashCardsArray;
    // const speciesInput = document.querySelector('.species-add-input');
    // let test = speciesInput.style.display === 'none';
    const flashCardsArrayRender = () => {
        flashCardsArray = flashCardsDataArray.map((el, pos) => {
            return (
                <CreatedFlashCard  
                    cardsList={cardsList} 
                    frontSideMeaningsList={el.frontSideMeaningsList.testMeaningsList} 
                    backSideMeaningsList={el.backSideMeaningsList.testMeaningsList2}
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
        <section className = "flash-cards-section" onClick={() => {
            flashCardsArrayRender()
        }}>
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
{/* ==================================================================================================================================== */}
                <section className = "cards-block-species">
                    <SpeciesList />
                </section>
{/* ==================================================================================================================================== */}
                <CardsBlock  
                    cardsList={cardsList} 
                />
            </div>
        </section>
    )
};