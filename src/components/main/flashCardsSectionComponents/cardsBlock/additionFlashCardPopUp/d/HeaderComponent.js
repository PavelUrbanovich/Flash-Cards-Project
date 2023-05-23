import React from 'react';

export const HeaderComponent = (props) => {
        let {initialState, setState} = props;
        [initialState, setState] = React.useState(initialState);
        const url = 'https://jsonplaceholder.typicode.com/users';
    return (
        <header className = "header">
            <div className = "header__container">
                {/* <h1 className = "header-title">{initialState}</h1>
                <button className = "header-btn" onClick = {() => {
                    const headerTitle = document.querySelector('.header-title');
                    const arr = Object.entries(headerTitle);
                    if (arr[1][1].children === 'Hello!') setState('Bye!');
                    if (arr[1][1].children === 'Bye!') setState('Hello!');
                    // console.log(arr[1][1].children);
                }}>Click me!</button> */}

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

