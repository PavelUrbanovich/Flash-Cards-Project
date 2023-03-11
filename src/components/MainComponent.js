import React, { createElement, useEffect } from 'react';
import { FlashCardsSection } from './FlashCardsSection';
import { TodoFormComponent } from './TodoFormComponent';

export const MainComponent = (props) => {
    let {initialState, setState} = props;
    [initialState, setState] = React.useState([]);
    // useEffect(() => {
    //     const raw = localStorage.getItem('initialState') || [];
    //     setState(JSON.parse(raw));
    // }, []);
    // useEffect(() => {   
    //     localStorage.setItem('initialState', JSON.stringify(initialState))
    // }, [initialState]);
    // useEffect(() => {
    //     console.log('ds')
    // })
    return (
        <main className = "main">
            <div className = "main__container">
                {/* <TodoFormComponent /> */}
                <FlashCardsSection/>
            </div>
        </main>
    )
};
