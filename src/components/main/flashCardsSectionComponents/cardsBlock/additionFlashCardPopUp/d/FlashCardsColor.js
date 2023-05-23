import React from 'react';
import { flashCardsDataArray } from '/Верстка/sixth-react-project/src/shared/flashCardsDataArray';

export const FlashCardsColor = (props) => {
    let {cardsList} = props;
    return(
        <div className="flash-card-color-theme">
            <div className="flash-card-color-theme-title">
                Choose a color
            </div>
            <div className="flash-card-color-theme-section">
                <ul className="color-section-list" onClick={(event) => {
                        let target = event.target;
                        const sideOne = document.querySelector('.side-1');
                        const sideTwo = document.querySelector('.side-2');
                        const test = sideTwo.style.opacity === '1';
                        if (target.className === 'item-btn-1 color-list-btn-styles') {
                            test === true ? sideTwo.style.backgroundColor = '#ffc04e' : sideOne.style.backgroundColor = '#ffc04e';
                        }
                        if (target.className === 'item-btn-2 color-list-btn-styles') {
                            test === true ? sideTwo.style.backgroundColor = 'rgb(114 217 207)' : sideOne.style.backgroundColor = 'rgb(114 217 207)';
                        }
                        if (target.className === 'item-btn-3 color-list-btn-styles') {
                            test === true ? sideTwo.style.backgroundColor = '#a16ad4' : sideOne.style.backgroundColor = '#a16ad4';
                        }
                        if (target.className === 'item-btn-4 color-list-btn-styles') {
                            test === true ? sideTwo.style.backgroundColor = 'cornflowerblue' : sideOne.style.backgroundColor = 'cornflowerblue';
                        }
                        if (target.className === 'item-btn-5 color-list-btn-styles') {
                            test === true ? sideTwo.style.backgroundColor = 'rgb(83 178 83)' : sideOne.style.backgroundColor = 'rgb(83 178 83)';
                        }
                }}>
                    <li className="color-section-list-item-1 color-list-item-styles"><button className="item-btn-1 color-list-btn-styles"></button></li>
                    <li className="color-section-list-item-2 color-list-item-styles"><button className="item-btn-2 color-list-btn-styles"></button></li>
                    <li className="color-section-list-item-3 color-list-item-styles"><button className="item-btn-3 color-list-btn-styles"></button></li>
                    <li className="color-section-list-item-4 color-list-item-styles"><button className="item-btn-4 color-list-btn-styles"></button></li>
                    <li className="color-section-list-item-5 color-list-item-styles"><button className="item-btn-5 color-list-btn-styles"></button></li>
                </ul>
            </div>
        </div>
    )
}