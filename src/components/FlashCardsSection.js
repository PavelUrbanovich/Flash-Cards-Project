import React, { useState } from 'react';
import { CardsBlock } from './CardsBlock';
import { PopUpOpenBtn } from './PopUpOpenBtn';
import { RecycleBin } from './RecycleBin';
import { SearchCardInput } from './SearchCardInput';
import { CreatedFlashCard } from './CreatedFlashCard';

export const FlashCardsSection = () => {
    let [cardsList, setCardsList] = useState([]);
    // let arr = [...cardsList];
    let arr2;
    let arr3;
    let removedItem;
    const cardAddition = (item) => {
        // arr.unshift(item);
        arr2 = item.map((el, pos) => {
            return (
                <CreatedFlashCard  
                    cardsList={cardsList} 
                    frontSideMeaningsList={el.frontSideMeaningsList} 
                    backSideMeaningsList={el.backSideMeaningsList}
                    handlerDeleteCard={handlerDeleteCard} 
                    key={el.id} 
                    pos={pos}
                />
            )
        })
        // arr3 = [...arr2];
        setCardsList(arr2);
    };
    const handlerDeleteCard = (item1) => {
        // const arr3 = Object.assign([], arr2);
        // console.log(arr3)
        arr2.splice(item1, 1);
        // removedItem = arr3.splice(item1, 1);
        setCardsList(arr2);
        console.log(arr2)
        
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
                    handlerDeleteCard={handlerDeleteCard}
                />
            </div>
        </section>
    )
};