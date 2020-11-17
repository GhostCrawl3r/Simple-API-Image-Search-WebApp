import React, {useContext} from 'react';
import styles from './Search.module.css';
import { TextField, Tooltip } from "@material-ui/core";
import {SearchContext} from "../../context/GlobalContext";

const Search = () => {
    const [ search, getSearch ] = useContext(SearchContext)
    
    const handleChange = e => {
        getSearch(e.target.value);
    }
    
    return (
        <form className={styles.container} onSubmit={null}>
            <Tooltip title='Search Bar'>
            <TextField
                margin='normal'
                id="standard-basic"
                label="Search For Images..."
                onChange={handleChange}
                className={styles.searchbox}
            />
            </Tooltip>
        </form>
    );
};

export default Search;
