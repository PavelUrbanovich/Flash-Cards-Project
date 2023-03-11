import React from 'react';

export const CreationBackTxt = (props) => {
    let {meaningsListBack, handlerStateChangeBack, nameBack} = props;
    return(
        <div className="creation-front-txt">
            {nameBack}
        </div>
    )
};