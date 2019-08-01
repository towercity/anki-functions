import React from 'react';
import Textbox from './components/Textbox'

const TranslationResult = ({ sentence }) => {
    let translation = sentence + "_trans";
    // TODO: get a translation from Gtrans here

    return (
        <div id="translation-result">
            <h2>Translation</h2>
            <Textbox text={translation} handleChange={() => console.log('this neednt change tho')} />
            <p class="attr-text">Translation provided by Google</p>
        </div>
    )
}

const ResultSide = ({ word }) => {
    let sentence = word + "_sent";

    return (
        <div id="result-side">
            <SentenceResult />
            <TranslationResult />
        </div>
    )
}

export default ResultSide;