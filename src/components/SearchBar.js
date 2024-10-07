// src/components/SearchBar.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <Box display="flex" justifyContent="center" marginBottom={4}>
            <TextField
                label="Search TV Show"
                variant="outlined"
                value={query}
                onChange={handleInputChange}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSearch}
                sx={{ marginLeft: 2 }}
            >
                Search
            </Button>
        </Box>
    );
}

export default SearchBar;
