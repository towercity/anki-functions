import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Textbox from '../components/Textbox';

const SentenceResult = ({ sentence, idx }) => {
    let link = 'link';
    // TODO: save the twitter source here

    return(
        <div id="sentence-result">
            <h2>Sentence</h2>
            <Textbox text={sentence} handleChange={() => console.log('this neednt change tho')} />
            <p className="attr-text"><a href={link}>sentence source</a></p>
            <div id="sent-change-buttons">
                <Button onClick={() => console.log('go back')} text="<" />
                <Input text={idx} onChange={() => console.log('update the idx')} />
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

const ResultSide = ({ word }) => {
    let sentences = [word + "_sent", "2nd sentence"];
    let idx = 0;
    // TODO: gather the twitter sentences here

    return (
        <div id="result-side">
            <SentenceResult sentence={sentences[idx]} idx={idx} />
            <TranslationResult sentence={sentences[idx]} />
        </div>
    )
}

export default ResultSide;