import React from 'react';

export const CreationBackTxt = (props) => {
    let {meaningsListBack, handlerStateChangeBack, nameBack, deleteMeaningBack, pos} = props;
    return(
        <div className="creation-front-txt">
            {nameBack}
            <button onClick = {() => {
                deleteMeaningBack(pos);
            }}>&times;</button>
        </div>
    )
};