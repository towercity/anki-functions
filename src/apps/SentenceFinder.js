import React, {useState} from 'react';
import jishoApi from 'unofficial-jisho-api';

import '../App.css';
import Anki from '../services/Anki'
import SearchSide from '../views/SearchSide';
import ResultSide from '../views/ResultSide';
import DECK_IDS from '../data/deck_ids';
import defaults from '../data/defaults';

function SentenceFinder () {
  const [word, setWord] = useState(defaults.word);
  const [definition, setDefinition] = useState(defaults.definition);
  const [notes, setNotes] = useState(defaults.notes);
  const [notesIdx, setNotesIdx] = useState(0);

  const jisho = new jishoApi();

  const resetDefaults = () => {
    setWord(defaults.word);
    setDefinition(defaults.definition);
    setNotes(defaults.notes);
  }

  const findDefinition = () => {
    jisho.searchForPhrase(word).then(res => {
      console.log(res);

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
    //Return the index to 0
    setNotesIdx(0);

    Anki
      .findNotes("Vocabulary:" + definition.term)
      .then(res => {
        let hasNotes = res.length;

        // If the note does exist in the database
        if (hasNotes) {
          hasNotes = !window.confirm(`${definition.term} already exists. Continue?`);
        }

        if(hasNotes) {
          resetDefaults();
          return;
        }

        // This long bit of code here pulls in all the notes it can from Anki that have the word in definition.term and 
        // saves an array of them to state as notes
        Anki
          .findNotes("deck:'" + DECK_IDS.subs +"' " + definition.term)
          .then(res => {
            Anki
              .notesInfo(res)
              .then(res => {
                console.log(res);
                setNotes(res);
              })
          })
      })
  }

  const addCard = () => {
    Anki
      .findNotes("事")
      .then(res => {
        console.log(res);
      });
  }

  const handleWordChange = (e) => {
    setWord(e.target.value);
  }

  const changeIndex = (direction) => {
    console.log(notes.length);
    
    // This half of the logic increases the index, unless it would overflow, in which case it starts the index over at 0
    if(direction === 'up' && notesIdx < notes.length - 1) {
      setNotesIdx(notesIdx + 1);
    } else if (direction === 'up' && notesIdx >= notes.length - 1) {
      setNotesIdx(0);
    
    // This half decreases the index until 0, at which point it starts over at the end of the array
    } else if (direction === 'down' && notesIdx > 0) {
      setNotesIdx(notesIdx - 1);
    } else if (direction === 'down' && notesIdx === 0) {
      setNotesIdx(notes.length - 1);
    }
  }

  return (
    <div>
      <SearchSide 
        word={word} 
        definition={definition} 
        onChange={(e) => handleWordChange(e)} 
        search={() => findDefinition()} 
        select={() => selectWord()}
        reset={() => resetDefaults()}
      />
      <ResultSide 
        notes={notes} 
        idx={notesIdx}
        changeIndex={changeIndex}
        addCard={addCard}
      />
    </div>
  )
}

export default SentenceFinder;
