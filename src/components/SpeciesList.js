import React from 'react';
import { AddSpecieBtn } from './AddSpecieBtn';
import { SpecieAddInput } from './SpecieAddInput';
import { speciesListArray } from '../shared/speciesListArray';
import { SpeciesItem } from './SpeciesItem';
import { SpecieBtn } from './SpecieBtn';
import { SpeciesLeftShiftBtn } from './SpeciesLeftShiftBtn';
import { SpeciesRightShiftBtn } from './SpeciesRightSiftBtn';

export const SpeciesList = () => {
    let [test1, test2] = React.useState('');
    let speciesList = speciesListArray.map((el, pos) => {
        return (
            <SpeciesItem
                key={el.id}
                itemName={el.name}
            />
        );
    });
    const test3 = (item) => {
        speciesList = item.map((el, pos) => {
            return (
                <SpeciesItem
                    key={el.id}
                    itemName={el.name}
                />
            );
        });
        setSpeciesList(speciesList);
    }
    const handlerSpecieInputStateChange = (item) => {
        test2(item);
    };
    let [initialSpeciesList, setSpeciesList] = React.useState(speciesList);
    let shift = 0;
    return (
        <ul className="species-list">
            <AddSpecieBtn
                test1={test1}
                test3={test3}
            />
            <SpecieAddInput
                onChange={handlerSpecieInputStateChange}
            />
            <SpecieBtn
                test1={test1}
                test3={test3}
            />
            <SpeciesLeftShiftBtn
                shift={shift}
            />
            <div className="species-list-items-wrapper">
                <ul className="species-list-items">
                    {initialSpeciesList}
                </ul>
            </div>
            <SpeciesRightShiftBtn
                shift={shift}
            />
        </ul>
    )
};