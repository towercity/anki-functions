import React, {useState} from 'react';
import jishoApi from 'unofficial-jisho-api';
import Twitter from 'twitter';

import './App.css';
import CardSide from './views/CardSide';
import ResultSide from './views/ResultSide';

function App() {
  const [word, setWord] = useState('言葉');
  const [definition, setDefinition] = useState({
    term: 'Definition',
    definition: 'Please search for a Japanese term above'
  });

  const jisho = new jishoApi();
  const client = new Twitter({
    consumer_key: 'R3mMHJr8LOZMyEUHnAg7BI3Dm',
    consumer_secret: 'nPmyjFXtaffX8poS748O4uruLZnGIA35JBkqbOj4cFhTe9anOe',
    access_token_key: '1037786518566383617-RwfGq0SUjm8PldxlihhYvgf1c5CkhZ',
    access_token_secret: 'JvEEDsJD5rQ93s7r3BtvFNIjez3Ogxbqyic3zhzPsukdA'
  })

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
    console.log(definition.term);

    client.get('search/tweets', {
      q: definition.term
    }, (err, tweets, res) => {
      console.log(err, tweets, res);
    })
  }

  const handleWordChange = (e) => {
    setWord(e.target.value);
  }

  return (
    <div>
      <CardSide 
        word={word} 
        definition={definition} 
        onChange={(e) => handleWordChange(e)} 
        search={() => findDefinition()} 
        select={() => selectWord()}
      />
      <ResultSide 
        // Uses definition.term for the word so as to match the definition shown rather than the search term
        word={definition.term} 
      />
    </div>
  )
}

export default App;
