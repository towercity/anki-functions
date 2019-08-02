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
    // Takes in a search string and a callback function
    // Returns array of note ids
    findNote: (searchString) => {
        return Anki.request("findNotes", {
            "query": searchString
        });
    }
}

export default Anki;