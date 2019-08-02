import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const ResultSide = ({ notes, idx, changeIndex, addCard }) => {
    const sentence = notes[idx].fields.Sentence.value;
    const english = notes[idx].fields.English.value;
    const tags = notes[idx].tags.join(', ');

    return (
        <div id="result-side">
            <h2>Sentence</h2>
            <p>{sentence}</p>
            <p>{english}</p>
            <p className="tags">Tags: {tags}</p>
            <div id="sent-change-buttons">
                <Button onClick={() => changeIndex('down')} text="<" />
                <Input text={idx + 1} onChange={() => console.log('update the idx')} />
                <Button onClick={() => changeIndex('up')} text=">" />
            </div>
            <Button onClick={() => addCard()} text="add card" />
         </div>
    )
}

export default ResultSide;