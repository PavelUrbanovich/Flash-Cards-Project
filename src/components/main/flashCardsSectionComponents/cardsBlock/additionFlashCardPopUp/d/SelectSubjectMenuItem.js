import React from 'react';
// import { speciesListArray } from '../shared/speciesListArray';

export const SelectSubjectMenuItem = (props) => {
    let { name, id, pos } = props;
    return (
        <div className="select-subjects-item">
            {/* <button className = "custom-check-box" onClick = {() => {
                // const customCheckBox = document.querySelector('.custom-check-box');
                // customCheckBox.style.backgroundColor = "red";
            }}></button> */}
            <input id="checkbox" type='checkbox' name={name} onClick={() => {
                
                



            }} />
            <label for={name}>{name}</label>
        </div>
    );
};