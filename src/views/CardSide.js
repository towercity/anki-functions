import React from 'react';

import Input from '../components/Input';
import Button from '../components/Button';

const WordEntryBox = ({ word, onChange, search }) => {
    // TODO: have submit button call APIs, etc
    // MAYBE: onChange calls defintion call

    return (
        <div id="word-entry-box">
            <h2>Word</h2>
            <Input text={word} onChange={onChange} />
            <Button text="search" onClick={search} />
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

const CardSide = ({ word, onChange, definition, search, select }) => {
    return (
        <div id="card-side">
            <WordEntryBox word={word} onChange={onChange} search={search} />
            <DefinitionBox definition={definition} select={select} />
        </div>
    )
}

export default CardSide;