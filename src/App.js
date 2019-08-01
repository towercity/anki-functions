import React, {useState} from 'react';
import './App.css';
import CardSide from './views/CardSide';
import ResultSide from './views/ResultSide';

function App() {
  const [word, setWord] = useState('word');

  const handleWordChange = (e) => {
    setWord(e.target.value);
  }

  return (
    <div>
      <CardSide word={word} onChange={(e) => handleWordChange(e)} />
      <ResultSide word={word} />
    </div>
  )
}

export default App;
