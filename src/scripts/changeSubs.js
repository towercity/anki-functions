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
    logResult('running function...');
    let noteIds = [];

    logResult('gathering notes...');
    Anki
        // searches Anki for all new cards tagged 00change
        .findNotes('tag:00change is:new')
        // save the found notes to nodeIds array
        .then(res => {
            noteIds = res;
            logResult(`${noteIds.length} notes gathered`, 'pulling notes information...');

            // searches Anki for the notes info
            Anki
            .notesInfo(noteIds)
            .then(res => {
                res.map((note, idx) => {

                    logResult(
                        '...',
                        `card ${idx + 1}`,
                        `sentence: ${note.fields.Sentence.value}`,
                        `english: ${note.fields.English.value}`,
                        `notes: ${note.fields.Notes.value}`,
                        `tags: ${note.tags.join(', ')}`
                    )
                })
            })
        })
        
}

export default changeSubs;