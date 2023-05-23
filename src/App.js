import React from 'react';
import './index.css';
import { HeaderComponent } from './components/header/HeaderComponent'
import { MainComponent } from './components/main/MainComponent';

export const App = () => {
    return (
        <div className = "wrapper">
            <HeaderComponent />
            <MainComponent />
        </div>
    )
};
