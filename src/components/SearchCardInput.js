import React from 'react';

export const SearchCardInput = (props) => {
    let {cardsList} = props;
    return(
        <div className = "search-card-input-container">
            <input className = "seacr-card-input-input" placeholder= "Find a flashcard"/>
            <div className="loupe-search-container" onClick={() => {
                    
                }}>
                <svg className = "loupe-search">
                    <symbol id="loupe-search-svg" viewBox="0 0 512 512">
                        <path d="M278.718,0C150.086,0,45.435,104.65,45.435,233.282c0,55.642,19.592,106.789,52.228,146.928L0,477.872L34.128,512
                        l97.663-97.663c40.137,32.635,91.284,52.228,146.926,52.228C407.35,466.565,512,361.914,512,233.282S407.35,0,278.718,0z
                        M278.718,418.299c-102.018,0-185.017-82.999-185.017-185.017S176.699,48.265,278.718,48.265s185.017,82.999,185.017,185.017
                        S380.736,418.299,278.718,418.299z"/>
                    </symbol>
                    <use href="#loupe-search-svg"></use>
                </svg>
            </div>
        </div>
    );
};