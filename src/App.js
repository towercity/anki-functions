import React, {useState} from 'react';
import jishoApi from 'unofficial-jisho-api';
import axios from 'axios';

import './App.css';
import SearchSide from './views/SearchSide';
import ResultSide from './views/ResultSide';
import DECK_IDS from './data/deck_ids';

function App() {
  const [word, setWord] = useState('言葉');
  const [definition, setDefinition] = useState({
    term: 'Definition',
    definition: 'Please search for a Japanese term above'
  });
  const [notes, setNotes] = useState([{
    fields: {
      Sentence: {
        value: 'JPN'
      },
      English: {
        value: 'ENG'
      }
    }
  }]);

  const jisho = new jishoApi();


  const findDefinition = () => {
    jisho.searchForPhrase(word).then(res => {
      // Get an array of strings for each sub-definition
      const subdefs = res.data[0].senses.map((sense) => {
        return sense.english_definitions.join(', ');
      })

      // Join the sub-definitions into one long string
      const definitionBuild = subdefs.join('; ');

      setDefinition({
        // Slug is the quickest way to access the unique term jisho is looking up
        term: res.data[0].slug,
        definition: definitionBuild
      });
    });
  }

  const selectWord = () => {
    const Anki = 'http://127.0.0.1:8765';

    // This long bit of code here pulls in all the notes it can from Anki that have the word in definition.term and 
    // saves an array of them to state as 
    axios
      .post(Anki, {
        "action": "findNotes",
        "version": 6,
        "params": {
            "query": "deck:'" + DECK_IDS.subs +"' " + definition.term
        }
      })
      .then(res => {
        axios
          .post(Anki, {
            "action": "notesInfo",
            "version": 6,
            "params": {
                "notes": res.data.result
            }
          })
          .then(res => {
            console.log(res.data.result);
            setNotes(res.data.result);
          })
      })
  }

  const handleWordChange = (e) => {
    setWord(e.target.value);
  }

  return (
    <div>
      <SearchSide 
        word={word} 
        definition={definition} 
        onChange={(e) => handleWordChange(e)} 
        search={() => findDefinition()} 
        select={() => selectWord()}
      />
      <ResultSide 
        notes={notes} 
      />
    </div>
  )
}

export default App;
