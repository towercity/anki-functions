import React from 'react';
import Textbox from './Textbox';

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

const CardSide = ({ word }) => {
    return (
        <div id="card-side">
            <WordEntryBox />
            <DefinitionBox word={word} />
        </div>
    )
}