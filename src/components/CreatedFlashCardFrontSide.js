import React from 'react';
import { FlashCardRemoveBtn } from './FlashCardRemoveBtn';
import { FlashCardImg } from './FlashCardImg';

export const CreatedFlashCardFrontSide = (props) => {
    let {frontSideMeaningsList, cardsList, handlerDeleteCard, pos, item, colorSide} = props;
    console.log(frontSideMeaningsList)
    // const ds = frontSideMeaningsList.map((el) => el.className === "creation-front-side" );
    // console.log(ds)
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