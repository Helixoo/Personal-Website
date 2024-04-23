const fetch = require('isomorphic-unfetch')

let key1 = 'ghp_8nnTc9fKgUFHo0XX';
let key2 = 'cPvCHsObPi5luU2XsxaG';

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
