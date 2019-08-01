import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardSide from './views/CardSide';
import ResultSide from './views/ResultSide';

function App() {
  let word = "word";

  return (
    <div>
      <CardSide word={word} onChange={() => console.log('input word has change')} />
      <ResultSide word={word} />
    </div>
  )
}

export default App;
