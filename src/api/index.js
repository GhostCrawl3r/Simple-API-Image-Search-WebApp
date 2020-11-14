import axios from 'axios';

const base = {
    url: 'https://pixabay.com/api/?key=',
    key: '19106650-09b640a3ad50611a3261c18bc'
}

export const fetchAPI = async (item) => {
    try {
        const apiSearch = await axios.get(`${base.url}${base.key}&q=${item}&per_page=10`);
        return apiSearch.data;
    }
    catch (e) {
        console.log(e);
    }
}
