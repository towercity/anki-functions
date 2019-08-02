import axios from 'axios'

const Anki = {
    // The standard AnkiConnect url
    url: 'http://127.0.0.1:8765',

    // Basic AnkiConnect call boilerplate
    request: (action, params, callback) => {
        const req = axios
            .post(Anki.url, {
                "action": action,
                "version": 6,
                "params": params
            });
        
        return req
            .then(callback(res));
    }
}

export default Anki;