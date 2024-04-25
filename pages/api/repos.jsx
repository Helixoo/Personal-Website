const fetch = require('isomorphic-unfetch')

let key1 = '';
let key2 = 'Z8MsbUKuuZ6jMm3HxbPN';

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/helixoo/repos', {
        headers: {
            Authorization: 'token '+key1+key2
        }
    })).json();

    
    try {
        res.send([..._])
    } catch {
        res.status(500);
    }
}
