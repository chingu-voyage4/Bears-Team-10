import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import {list} from './SearchSuggestions';

// Importing list const that contains search terms to suggest

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : list.filter(searchTerm =>
    searchTerm.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

class SearchBar extends Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: [],
      results: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };


  loadSearchResults = (event) => {
    event.preventDefault();
    var search = this.state.value;

    axios.get(`https://images-api.nasa.gov/search?q=` + `search`)
      .then(res => {
        const data = res.data.collection.items;
        this.setState({ results: data});
      })
  }

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search for space related topic...',
      value,
      onChange: this.onChange
    };

  console.log(this.state.results);

  const data = this.state.results;

    // Finally, render it!
    return (
      <div>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      <button onClick={this.loadSearchResults.bind(this)}>Search</button>

      <div className="container">
      {data.map(function(d, index){
         return (
           <div>
           <li key={index}>{d.data[0].title}</li>
           <li key={index}>{d.data[0].description}</li>
           <li key={index}>{d.data[0].date_created}</li>
           <li key={index}>{d.data[0].keywords}</li>
           <br/>
           </div>
         )
       })}
      </div>

      </div>
    );
  }
}

export default SearchBar;
