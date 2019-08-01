import React from 'react';
import Input from './Input';
import Button from './Button';
import Textbox from './Textbox';

const WordEntryBox = ({ word, onChange }) => {
    // TODO: have submit button call APIs, etc
    // MAYBE: onChange calls defintion call

    return (
        <div id="word-entry-box">
            <h2>Word</h2>
            <Input text={word} onChange={onChange} />
            <Button text="submit" onClick={() => console.log('submit ', word)} />
        </div>
    )
}

const DefinitionBox = ({ word }) => {
    let definition = word + '_def';
    //TODO: gather definition from Jisho API

    return (
        <div id="definition-box">
            <h2>Definition</h2>
            <Textbox text={definition} onChange={() => console.log(definition)} />
            <p class="attr-text">Definition provided by Jisho.org</p>
        </div>
    )
}

const CardSide = ({ word, onChange }) => {
    return (
        <div id="card-side">
            <WordEntryBox word={word} onChange={onChange} />
            <DefinitionBox word={word} />
        </div>
    )
}

export default CardSide;