import React from 'react';

import SearchBar from '../Elements/SearchBar';

const SearchPage = () => {
  return (
    <div className="route-container">
      <SearchBar />

      <div id="search-results">
        <h2 style={{ textAlign: 'center', margin: '25px 0' }}>* Search Results will Go here *</h2>
      </div>
    </div>
  );
}

export default SearchPage;