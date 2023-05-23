import React from 'react';
import './mainComponentStyles.css';
import { FlashCardsSection } from './flashCardsSectionComponents/FlashCardsSection';

export const MainComponent = () => {
    return (
        <main className = "main">
            <div className = "main__container">
                <FlashCardsSection/>
            </div>
        </main>
    )
};
