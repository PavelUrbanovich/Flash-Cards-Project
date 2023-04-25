import React from 'react';
import { frontSideMeaningsArray } from '../shared/frontSideMeaningsArray';

export const CreationFrontTxt = (props) => {
    let {meaningsList, name, pos, deleteMeaning} = props;
    return(
        <div className="creation-front-txt">
            {name}
            <button onClick = {() => {
                deleteMeaning(pos);
            }}>&times;</button>
        </div>
    )
};