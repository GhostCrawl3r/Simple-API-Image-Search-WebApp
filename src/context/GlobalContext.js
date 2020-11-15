import React, {useEffect, useState} from 'react';
import {fetchAPI} from "../api";

export const APIContext = React.createContext({});
export const SearchContext = React.createContext('');
export const FavouritesContext = React.createContext([]);
export const LoadContext = React.createContext(false);

const GlobalContext = ({children}) => {
    const [ api, getAPI ] = useState({});
    const [ search, getSearch ] = useState('');
    const [favourites, setFavourites] = useState([]);
    const [load, setLoad] = useState(false);
    
    useEffect (  async () => {
        const fetchedAPI = await fetchAPI(search);
        getAPI(fetchedAPI);
    }, [search]);
    
    return (
        <APIContext.Provider value={[ api, getAPI ] }>
        <SearchContext.Provider value={[ search, getSearch ]}>
        <FavouritesContext.Provider value={[favourites, setFavourites]}>
        <LoadContext.Provider value={[load, setLoad]}>
            {children}
        </LoadContext.Provider>
        </FavouritesContext.Provider>
        </SearchContext.Provider>
        </APIContext.Provider>
    );
};

export default GlobalContext;
