import React from 'react';

import Input from '../components/Input';
import Button from '../components/Button';

const WordEntryBox = ({ word, onChange, search, reset }) => {
    // TODO: have submit button call APIs, etc
    // MAYBE: onChange calls defintion call

    return (
        <div id="word-entry-box">
            <h2>Word</h2>
            <Input text={word} onChange={onChange} />
            <br />
            <Button text="search" onClick={search} />
            <Button text="reset" onClick={reset} />
        </div>
    )
}

const DefinitionBox = ({ definition, select }) => {
    return (
        <div id="definition-box">
            <h2>{definition.term}</h2>
            <p>{definition.definition}</p>
            <p className="attr-text">Definition provided by Jisho.org</p>
            <Button text="select" onClick={select} />
        </div>
    )
}

const SearchSide = ({ word, onChange, definition, search, select, reset }) => {
    return (
        <div id="search-side">
            <WordEntryBox word={word} onChange={onChange} search={search} reset={reset}/>
            <DefinitionBox definition={definition} select={select} />
        </div>
    )
}

export default SearchSide;