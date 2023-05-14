import React, { useState } from 'react';
import { CardsBlock } from './CardsBlock';
import { PopUpOpenBtn } from './PopUpOpenBtn';
import { RecycleBin } from './RecycleBin';
import { SearchCardInput } from './SearchCardInput';
import { CreatedFlashCard } from './CreatedFlashCard';
import { flashCardsDataArray } from '../shared/flashCardsDataArray';
import { SpeciesList } from './SpeciesList';
import { speciesListArray } from '../shared/speciesListArray';
import { frontSideMeaningsArray } from '../shared/frontSideMeaningsArray';
import { backSideMeaningsArray } from '../shared/backSideMeaningsArray';
import { CreationFrontTxt2 } from './CreationFrontTxt2';

export const FlashCardsSection = () => {
    // let [cardsList, setCardsList] = useState([]);
    let flashCardsArray;
    // const speciesInput = document.querySelector('.species-add-input');
    // let test = speciesInput.style.display === 'none';
    let testMeaningsList3 = speciesListArray[0].cardsList.map((el, pos) => el.frontSideMeaningsList.meaningsList);
    let testMeaningsList4 = speciesListArray[0].cardsList.map((el, pos) => el.backSideMeaningsList.meaningsListBack);
    let test4; let test5; let test6; let test7;
    flashCardsArray = speciesListArray[0].cardsList.map((el, pos) => {
        test4 = testMeaningsList3.shift();
        test5 = test4.map((el, pos) => {
            return (
                <CreationFrontTxt2
                name={el}
                key={el.id}
                pos={pos}
            />
            )
        })
        test6 = testMeaningsList4.shift();
        test7 = test6.map((el, pos) => {
            return (
                <CreationFrontTxt2
                name={el}
                key={el.id}
                pos={pos}
            />
            )
        })
        return (
            <CreatedFlashCard 
                // cardsList={cardsList} 
                frontSideMeaningsList={test5} 
                backSideMeaningsList={test7}
                // handlerDeleteCard={handlerDeleteCard} 
                key={el.id} 
                pos={pos}
            />
        );  
    });
    let [cardsList, setCardsList] = useState(flashCardsArray);
    const flashCardsArrayRender = () => {
        flashCardsArray = speciesListArray[0].cardsList.map((el, pos) => {
            return (
                <CreatedFlashCard  
                    cardsList={cardsList} 
                    // frontSideMeaningsList={el.frontSideMeaningsList.testMeaningsList} 
                    // backSideMeaningsList={el.backSideMeaningsList.testMeaningsList2}
                    frontSideMeaningsList={el.frontSideMeaningsList.meaningsList} 
                    backSideMeaningsList={el.backSideMeaningsList.meaningsListBack}
                    // frontSideMeaningsList={test5} 
                    // backSideMeaningsList={test7}
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
            // flashCardsArrayRender()
        }}>
            <div className = "addition-card-block">
                <PopUpOpenBtn 
                    cardAddition={cardAddition}
                    cardsList={cardsList} 
                    handlerDeleteCard={handlerDeleteCard}
                />
                {/* <SearchCardInput 
                    cardsList={cardsList} 
                /> */}
                <RecycleBin />
            </div> 
            <div className="cards-block-container">
                <div className = "cards-block-title-container">
                    <h1 className = "cards-block-title">Collection</h1>
                </div>
{/* ==================================================================================================================================== */}
                <section className = "cards-block-species">
                    <SpeciesList 
                        setCardsList={setCardsList}
                        flashCardsArray={flashCardsArray}
                        cardsList={cardsList}
                        handlerDeleteCard={handlerDeleteCard}
                        test5={test5}
                        test7={test7}
                    />
                </section>
                <SearchCardInput 
                    cardsList={cardsList} 
                />
                
{/* ==================================================================================================================================== */}
                <CardsBlock  
                    cardsList={cardsList} 
                />
            </div>
        </section>
    )
};