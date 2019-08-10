// This script runs through your saved decks and searches for subs2srs cards tagged as '00change' then
// creates new standard Japanese cards and autofills the information. It then moves these cards to their
// proper decks (listening or not) thru an external script and deletes the original subs2srs cards

import Anki from '../services/Anki';
import DECK_IDS from '../data/deck_ids';
import MODELS from '../data/models';

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
        .findNotes('tag:01change is:new')
        // save the found notes to nodeIds array
        .then(res => {
            noteIds = res;
            if(noteIds.length === 0) {
                logResult('no notes found', 'ending function', '');
                return;
            }
            logResult(`${noteIds.length} notes gathered`, 'pulling notes information...');

            // searches Anki for the notes info then adds new notes with the proper values
            Anki
            .notesInfo(noteIds)
            .then(res => {
                logResult('information pulled', 'creating new notes...')
                const newNotes = res.map((note, idx) => {
                    // Create a new array for tags w/o the 00change/01change tag
                    const newTags = note.tags.filter(tag => tag !== '00change' && tag!== '01change');

                    const newNote = {
                        "deckname": DECK_IDS.subs,
                        "modelName": MODELS.japanese,
                        "fields": {
                            "Vocabulary": note.fields.Vocab.value,
                            "Vocabulary-Reading": note.fields['Vocab-Reading'].value,
                            "Meaning": note.fields['Vocab-Meaning'].value,
                            "Sentence-1": note.fields.Sentence.value,
                            "Sentence-1-Reading": note.fields["Sentence-Reading"].value,
                            "Sentence-1-English": note.fields.English.value,
                            "Sentence-1-Audio": note.fields.Audio.value,
                            "Sentence-1-Image": note.fields.Image.value
                        },
                        tags: newTags
                    }

                    logResult(
                        '...',
                        `note ${idx + 1}`,
                        `term: ${newNote.fields.Vocabulary}`,
                        `meaning: ${newNote.fields.Meaning}`,
                        `sentence: ${newNote.fields['Sentence-1']}`,
                        `english: ${newNote.fields['Sentence-1-English']}`,
                        `tags: ${newNote.tags.join(', ')}`
                    )

                    return newNote;
                })

                logResult(
                    '...',
                    `created ${newNotes.length} new notes`,
                    'sending to Anki...'
                )
            })
        })
        
}

export default changeSubs;