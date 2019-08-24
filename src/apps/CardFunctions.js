import React from 'react';

import '../App.css';

import Button from '../components/Button';
import changeSubs from '../scripts/changeSubs';
import correctDecks from '../scripts/correctDecks';
// import ConsoleView from '../components/ComponentView';

const CardFunctions = () => {
    return (
        <div id="functions-view">
            <p style={{marginBottom:0}}>Scripts</p>
            <Button onClick={() => changeSubs()} text="00change" />
            <Button onClick={() => correctDecks()} text="correct decks" />

            {/* <ConsoleView /> */}
         </div>
    )
}

export default CardFunctions;