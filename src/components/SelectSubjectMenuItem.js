import React from 'react';
import { speciesListArray } from '../shared/speciesListArray';

export const SelectSubjectMenuItem = (props) => {
    let { name, id, pos } = props;
    let test = {
        name: 'test',
        content: 'Hello World!'
    }
    let checkedTest = null;
    return (
        <div className="select-subjects-item">
            {/* <button className = "custom-check-box" onClick = {() => {
                // const customCheckBox = document.querySelector('.custom-check-box');
                // customCheckBox.style.backgroundColor = "red";
            }}></button> */}
            <input id="checkbox" type='checkbox' name={name} onClick={() => {
                // console.log(`${pos} is checked`);
                // speciesListArray[pos].cardsList.push(test);

                // checkedTest === null || false ? checkedTest = true : checkedTest = false;
                // let test2 = checkedTest === null || false;
                // let test3 = checkedTest === true;
                // if (test2 === true) {checkedTest = true};
                // if(test2 === false) {checkedTest = false};

                // if (checkedTest === true) speciesListArray[pos].cardsList.push(test);
                // if (checkedTest === false) {    
                //     for (let i = 0; i < speciesListArray[pos].cardsList.length; i++) {
                //         speciesListArray[pos].cardsList.pop();
                //     };
                // }


                // console.log(test2)
                



            }} />
            <label for={name}>{name}</label>
        </div>
    );
};