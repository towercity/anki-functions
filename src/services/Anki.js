import axios from 'axios'

const Anki = {
    // The standard AnkiConnect url
    url: 'http://127.0.0.1:8765',

    // Basic AnkiConnect call boilerplate
    request: (action, params) => {
        return axios
            .post(Anki.url, {
                "action": action,
                "version": 6,
                "params": params
            })
            .then(res => res.data.result);
    },

    // Searches for notes
    // Takes in a search string 
    // Returns array of note ids
    findNotes: (searchString) => {
        return Anki.request("findNotes", {
            "query": searchString
        });
    },

    // Get note informations
    // Takes in an array of Note IDs
    // Returns an array of note objects
    notesInfo: (noteIds) => {
        return Anki.request("notesInfo", {
            "notes": noteIds
        })
    }
}

export default Anki;