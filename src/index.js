import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { App } from './App';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
reportWebVitals();
