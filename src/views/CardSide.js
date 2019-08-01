import React from 'react';

import Input from '../components/Input';
import Button from '../components/Button';
import Textbox from '../components/Textbox';

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

const DefinitionBox = ({ definition }) => {
    return (
        <div id="definition-box">
            <h2>Definition</h2>
            <p>{definition}</p>
            <p className="attr-text">Definition provided by Jisho.org</p>
        </div>
    )
}

const CardSide = ({ word, onChange, definition, search }) => {
    return (
        <div id="card-side">
            <WordEntryBox word={word} onChange={onChange} search={search} />
            <DefinitionBox definition={definition} />
        </div>
    )
}

export default CardSide;