import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Textbox from '../components/Textbox';

const SentenceResult = ({ sentence }) => {

    return(
        <div id="sentence-result">
            <h2>Sentence</h2>
            <p>{sentence}</p>
            <div id="sent-change-buttons">
                <Button onClick={() => console.log('go back')} text="<" />
                <Input text="0" onChange={() => console.log('update the idx')} />
                <Button onClick={() => console.log('go fwd')} text=">" />
            </div>
        </div>
    )
}

const TranslationResult = ({ sentence }) => {
    let translation = sentence + "_trans";
    // TODO: get a translation from Gtrans here

    return (
        <div id="translation-result">
            <h2>Translation</h2>
            <Textbox text={translation} handleChange={() => console.log('this neednt change tho')} />
            <p className="attr-text">Translation provided by Google</p>
        </div>
    )
}

const ResultSide = ({ sentence }) => {
    return (
        <div id="result-side">
            <SentenceResult sentence={sentence} />
            <TranslationResult sentence={sentence} />
        </div>
    )
}

export default ResultSide;