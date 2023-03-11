import React, { useEffect, useState } from 'react';
import { CardsBlock } from './CardsBlock';
import { PopUpOpenBtn } from './PopUpOpenBtn';
import { RecycleBin } from './RecycleBin';
import { SearchCardInput } from './SearchCardInput';

export const FlashCardsSection = () => {
    let [cardsList, setCardsList] = useState([]);
    let arr = [...cardsList];
    let arr2;
    const cardAddition = (item) => {
       arr.unshift(item);
       arr2 = arr.map((item) => {
        return (
            item
        )
        });
        setCardsList(arr2);
       console.log(arr)

        // const flashCard = [{
        //     id: cardsList.length+1,
        //     title: 'first flash card'
        // }];

        // const temp = [...cardsList];
        // temp.push(flashCard);

        // setCardsList(() => {
        //     cardsList = temp;
        // })
        // console.log(cardsList)
    };
    let dd;
    // useEffect(() => {
    //     dd = [...cardsList];
    // }, cardsList)
    // useEffect(() => {
    //     cardsList.forEach(el => )
    // }, [cardsList]);
    let test;
    

    let cardid;
    const handlerDeleteCard = (item1) => {
        alert(item1);
    };

    const testDelete = (item) => {
        console.log(cardsList[3]);

    }

    // const testCardsList = cardsList.map(el => {
    //     return el;
    // })

    
    //  useEffect(() => {
    //     cardsList = cardsList;
    // }, cardsList)

    // useEffect(() => {
    //     const raw = localStorage.getItem('cardsList');
    //     setCardsList(JSON.parse(raw));
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('cardsList', JSON.stringify(cardsList))
    // }, [cardsList])

    
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
                    testDelete={testDelete}
                />
                <RecycleBin />
            </div> 
            {/* <button className="btn-5" onClick={() => {
       
            }}>Click me!</button> */}
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
                        {/* <li className = "species-list-item">
                            <button className="species-list-btn">
                                All
                            </button>
                        </li>
                        <li className = "species-list-item">
                            <button className="species-list-btn">
                                All
                            </button>
                        </li>
                        <li className = "species-list-item">
                            <button className="species-list-btn">
                                All
                            </button>
                        </li>
                        <li className = "species-list-item">
                            <button className="species-list-btn">
                                All
                            </button>
                        </li>
                        <li className = "species-list-item">
                            <button className="species-list-btn">
                                All
                            </button>
                        </li>
                        <li className = "species-list-item">
                            <button className="species-list-btn">
                                Alldsadasdsadasdadasdadsadasda
                            </button>
                        </li>
                        <li className = "species-list-item">
                            <button className="species-list-btn">
                                All
                            </button>
                        </li> */}
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
// testCardsList = {testCardsList}
// sss => setWord(() => [...word, sss]) value2={value2}
// setCardsList(() => [...cardsList, item]);