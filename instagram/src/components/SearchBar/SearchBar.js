import React from 'react';
import PropTypes from 'prop-types';
import './_SearchBar.scss';
import Logo from './Logo';
import Search from './Search';
import IconTabs from './IconTabs';

const SearchBar = props => {
  return (
    <div className='top-container'>
      <div className='search-bar-container'>
        <Logo />
        <Search
          searchInput={props.searchInput}
          searchInputChange={props.searchInputChange}
        />
        <IconTabs />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  searchInput: PropTypes.string,
  searchInputChange: PropTypes.func
};

export default SearchBar;
