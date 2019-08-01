import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardSide from './views/CardSide';

function App() {
  let word = "word";

  return (
    <div>
      <CardSide word={word} onChange={()) => console.log('input word has change')} />
      <ResultSide />
    </div>
  )
}

export default App;
