import React from 'react';

export const CreationBackTxt2 = (props) => {
    let {meaningsListBack, handlerStateChangeBack, nameBack, deleteMeaningBack, pos} = props;
    return(
        <div className="creation-front-txt">
            {nameBack}
        </div>
    )
};