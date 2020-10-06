import React, { useState } from 'react';
import {
  PageContainer,
  Searchbar,
  SearchInput,
  SearchButton,
  InputContainer,
  ResultsContainer,
} from './components';
import SearchList from '../../components/SearchList';

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showVids, setShowVids] = useState(false);

  const searchVids = (event) => {
    event.preventDefault();
    setSearchTerm(searchInput);
    setShowVids(true);
  };

  const changeSearchInput = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  const renderResults = () => {
    return showVids && searchTerm ? <SearchList searchTerm={searchTerm} /> : null;
  };

  return (
    <PageContainer>
      <InputContainer>
        <h1>Look for videos: </h1>
        <Searchbar>
          <SearchInput
            required
            type="text"
            id="searchfield"
            value={searchInput}
            onChange={changeSearchInput}
          />
          <SearchButton type="submit" onClick={searchVids}>
            Search
          </SearchButton>
        </Searchbar>
      </InputContainer>
      <ResultsContainer>{renderResults()}</ResultsContainer>
    </PageContainer>
  );
};

export default SearchPage;
