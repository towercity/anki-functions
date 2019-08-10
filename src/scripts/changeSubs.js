// This script runs through your saved decks and searches for subs2srs cards tagged as '00change' then
// creates new standard Japanese cards and autofills the information. It then moves these cards to their
// proper decks (listening or not) thru an external script and deletes the original subs2srs cards

import Anki from '../services/Anki';

// Dummy wrapper around console.log
// In the future, this function will both console.log and post to a console on the DOM
// In the future, it will also be externalized
const logResult = (...output) => {
    output.map(content => console.log(content))
}

const changeSubs = () => {
    logResult('gathering cards...');
    Anki
        .findNotes('tag:00change -is:new')
        .then(res => logResult(res))
}

export default changeSubs;