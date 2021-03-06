import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import changeSubs from '../scripts/changeSubs';
import correctDecks from '../scripts/correctDecks';

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
            <p style={{marginBottom:0}}>Scripts</p>
            <Button onClick={() => changeSubs()} text="00change" />
            <Button onClick={() => correctDecks()} text="correct decks" />
         </div>
    )
}

export default ResultSide;