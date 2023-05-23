import React from 'react';
import { FlashCardRemoveBtn } from './FlashCardRemoveBtn';
// import { FlashCardImg } from './FlashCardImg';
import { flashCardsDataArray } from '/Верстка/sixth-react-project/src/shared/flashCardsDataArray';
import { speciesListArray } from '/Верстка/sixth-react-project/src/shared/speciesListArray';

export const CreatedFlashCardFrontSide = (props) => {
    let {frontSideMeaningsList, cardsList, handlerDeleteCard, pos, item, colorSide} = props;
    console.log(frontSideMeaningsList)
    // const ds = frontSideMeaningsList.map((el) => el.className === "creation-front-side" );
    // console.log(ds)
    setTimeout(() => {
        const createdSideOne = document.querySelector(`.color-side-${pos}`);
        createdSideOne.style.backgroundColor = speciesListArray[0].cardsList[pos].frontSideColor;
    }, 10);
 
    return(
        <div className = {`created-flash-card-front-side  ${colorSide}`}>
            <div className="card-content">
                <div className="card-fncs">
                    <div className="card-remove-fnc">
                       <FlashCardRemoveBtn  
                            // cardsList={cardsList} 
                            handlerDeleteCard={handlerDeleteCard}
                            pos={pos}
                            item={item}
                        />
                    </div>
                </div>
                {/* <div className = "flash-card-img-container">
                    <FlashCardImg/>
               
                </div> */}
                <div className="card-txt">
                    {frontSideMeaningsList}

                    {/* {ds} */}

                </div>
            </div>
        </div>
    )
};
    //cardsList = {cardsList} handlerChangeCards = {handlerChangeCards} 
//{`created-flash-card-front-side color-side-${cardsList.length+1}`