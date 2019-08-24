import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import SentenceFinder from './apps/SentenceFinder';
import CardFunctions from './apps/CardFunctions';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CardFunctions />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
