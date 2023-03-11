import React from 'react';
import './index.css';
import { HeaderComponent } from './components/HeaderComponent';
import { MainComponent } from './components/MainComponent';

export const App = () => {
    return (
        <div className = "wrapper">
            <HeaderComponent initialState = "Hello!" setState = "Bye!"/>
            <MainComponent />
        </div>
    )
};
