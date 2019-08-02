import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const ResultSide = ({ notes }) => {
    let idx = 0;
    let sentence = notes[idx].fields.Sentence.value;
    let english = notes[idx].fields.English.value;
    

    return (
        <div id="result-side">
            <h2>Sentence</h2>
            <p>{sentence}</p>
            <p>{english}</p>
            <div id="sent-change-buttons">
                <Button onClick={() => console.log('go back')} text="<" />
                <Input text="0" onChange={() => console.log('update the idx')} />
                <Button onClick={() => console.log('go fwd')} text=">" />
            </div>
        </div>
    )
}

export default ResultSide;