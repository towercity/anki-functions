import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const ResultSide = ({ notes, idx, changeIndex }) => {
    let sentence = notes[idx].fields.Sentence.value;
    let english = notes[idx].fields.English.value;

    return (
        <div id="result-side">
            <h2>Sentence</h2>
            <p>{sentence}</p>
            <p>{english}</p>
            <div id="sent-change-buttons">
                <Button onClick={() => changeIndex('down')} text="<" />
                <Input text={idx + 1} onChange={() => console.log('update the idx')} />
                <Button onClick={() => changeIndex('up')} text=">" />
            </div>
        </div>
    )
}

export default ResultSide;