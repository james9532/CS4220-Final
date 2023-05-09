const superagent = require('superagent');
const base = 'https://wizard-world-api.herokuapp.com';

const search = async (searchTerm) => {
    try {
        const searchURL = `${base}`;
        const res = await superagent.get(searchURL);
        return res.body;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    search
}