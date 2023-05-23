import React from 'react';
import './headerComponentStyles.css';

export const HeaderComponent = () => {
    return (
        <header className = "header">
            <div className = "header__container">
                <div className="logo-draft">
                    <div className="logo-card-1"></div>
                    <div className="logo-card-2"></div>
                    <div className="title-container">
                        <h1 className="logo-title">Flash Cards</h1>
                    </div>
                </div>
                <div className="header-menu-list">
                    <ul className="menu-list-items">
                        <li className="menu-list-item-1"><a href="#" className="menu-list-href-1">About</a></li>
                        <li className="menu-list-item-2"><a href='#' className="menu-list-href-2">Login</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
};

