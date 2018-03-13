import React from 'react';

import SearchBar from '../Elements/SearchBar';

const SearchPage = () => {
  return (
    <div className="route-container">
      <SearchBar />

      <div id="search-results">
      </div>
    </div>
  );
}

export default SearchPage;
