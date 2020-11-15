import axios from 'axios';

const base = {
    url: 'https://pixabay.com/api/?key=',
    key: '19106650-09b640a3ad50611a3261c18bc'
}

//Add Page to the search below, default is 1. Each incriment will move you to the next page.
// Docs: https://pixabay.com/api/docs/

export const fetchAPI = async (item) => {
    try {
        const apiSearch = await axios.get(`${base.url}${base.key}&q=${item}&per_page=25`);
        return apiSearch.data;
    }
    catch (e) {
        console.log(e);
    }
}
