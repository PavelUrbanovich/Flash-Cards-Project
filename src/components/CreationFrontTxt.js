import React from 'react';

export const CreationFrontTxt = (props) => {
    let {meaningsList, handlerStateChange, name} = props;
    return(
        <div className="creation-front-txt">
            {name}
            {/* <button onClick = {() => {
                console.log(meaningsList);
            }}>&times;</button> */}
        </div>
    )
};