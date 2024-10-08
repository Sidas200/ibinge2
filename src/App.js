// src/App.js
import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import SearchBar from './components/SearchBar';
import ShowList from './components/ShowList';

function App() {
  const [shows, setShows] = useState([]);Kf

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
      const data = await response.json();
      setShows(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
      <Container>
        <Typography variant="h3" align="center" marginY={4}>
          TV Show Search
        </Typography>
        <SearchBar onSearch={handleSearch} />
        <ShowList shows={shows} />
      </Container>
  );
}

export default App;
