import React, {useEffect, useState} from 'react';
import {fetchAPI} from "../api";

export const APIContext = React.createContext({});
export const SearchContext = React.createContext('');
export const FavouritesContext = React.createContext([]);
export const LoadContext = React.createContext(false);
export const PageData = React.createContext(1);

const GlobalContext = ({children}) => {
    const [ api, getAPI ] = useState({});
    const [ search, getSearch ] = useState('');
    const [favourites, setFavourites] = useState([]);
    const [load, setLoad] = useState(false);
    const [page, setPage] = useState(1);
    
    useEffect (  async () => {
        const fetchedAPI = await fetchAPI(search, page);
        getAPI(fetchedAPI);
    }, [search, page]);
    
    return (
        <APIContext.Provider value={[ api, getAPI ] }>
        <SearchContext.Provider value={[ search, getSearch ]}>
        <FavouritesContext.Provider value={[favourites, setFavourites]}>
        <LoadContext.Provider value={[load, setLoad]}>
            <PageData.Provider value={[page, setPage]}>
                {children}
            </PageData.Provider>
        </LoadContext.Provider>
        </FavouritesContext.Provider>
        </SearchContext.Provider>
        </APIContext.Provider>
    );
};

export default GlobalContext;
