import React from 'react';
import { speciesListArray } from '../shared/speciesListArray';
export const SpecieBtn = (props) => {
    let {test1, test3} = props;
    let test2 = {
        id: speciesListArray.length+1,
        name: test1
    }
    return(
        <button className="specie-add-btn" onClick={() => {
            speciesListArray.push(test2);
                console.log(speciesListArray);
                test3(speciesListArray);
                const speciesAddInput = document.querySelector('.species-add-input');
                speciesAddInput.value = '';
                const speciesListItems = document.querySelector('.species-list-items');
                const speciesListWrapper = document.querySelector('.species-list-items-wrapper');
                // speciesListWrapper.style.maxWidth = speciesListItems.innerHTML.length;
                console.log(speciesListItems.innerHTML.length);
        }}>
            <span className="specie-add-btn-check-mark"></span>
        </button>
    );
};