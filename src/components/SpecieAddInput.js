import React from 'react';

export const SpecieAddInput = (props) => {
    let {onChange} = props;
    const handlerSpecieInputStateChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <li className = "species-add-input-container">
            <input className = "species-add-input" placeholder = "Enter a name of the subject" onChange={handlerSpecieInputStateChange} onKeyDown={() => {
                    const specieAddBtn = document.querySelector('.specie-add-btn');
                    const speciesAddInput = document.querySelector('.species-add-input');
                    speciesAddInput.value.length > 1 ? specieAddBtn.style.display = 'flex' : specieAddBtn.style.display = 'none';
            }}/>
            {/* <button className="species-add-input-btn">
                <div className="species-add-input-check-mark"></div>
            </button> */}
        </li>
    );
};