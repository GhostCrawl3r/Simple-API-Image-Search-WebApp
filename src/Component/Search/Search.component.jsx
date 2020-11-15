import React from 'react';
import styles from './Search.module.css';
import { TextField } from "@material-ui/core";

const Search = ({getSearch}) => {
    
    const handleChange = e => {
        getSearch(e.target.value);
    }
    
    return (
        <form className={styles.container} onSubmit={null}>
            <TextField
                margin='normal'
                id="standard-basic"
                label="Search For Images..."
                onChange={handleChange}
                className={styles.searchbox}
            />
        </form>
    );
};

export default Search;
