import React from 'react';
import { speciesListArray } from '../shared/speciesListArray';

export const SpeciesItem = (props) => {
    let {itemName} = props;
    return (
        <li className = "species-list-item">
            <button className="species-list-btn">
                {itemName}               
            </button>
        </li>
    );
};