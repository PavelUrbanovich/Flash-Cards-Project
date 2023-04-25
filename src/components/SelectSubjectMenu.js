import React from 'react';
import { speciesListArray } from '../shared/speciesListArray';
import { SelectSubjectMenuItem } from './SelectSubjectMenuItem';

export const SelectSubjectMenu = () => {
    const test = speciesListArray.map((el, pos) => {
        return (
            <SelectSubjectMenuItem
                name={el.name}
                id={el.id}
                pos={pos}
            />
        )
    })
    return (
        <div className = "select-subject-menu-wrapper">
            <button className = "select-subject-menu-btn" onClick={() => {
                const selectSubjectMenuItems = document.querySelector('.select-subject-menu-items');
                // if (selectSubjectMenuItems.style.display === 'flex') {
                //     selectSubjectMenuItems.style.display = 'none';
                // };
                // if (selectSubjectMenuItems.style.display === 'none') {
                //     selectSubjectMenuItems.style.display = 'flex';
                // };
                console.log(selectSubjectMenuItems.style.display)
            }}>Choose a subject</button>
            <div className = "select-subject-menu-items">
                {test}
            </div>
        </div>
    );
};
