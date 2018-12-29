import React from 'react';
import PropTypes from 'prop-types';
import './_SearchBar.scss';
import Logo from './Logo';
import Search from './Search';
import IconTabs from './IconTabs';

const SearchBar = props => {
  return (
    <div className={props.isTop ? 'top-container' : 'top-scroll top-container'}>
      <div className='search-bar-container'>
        <Logo isTop={props.isTop} />
        <Search
          searchInput={props.searchInput}
          searchInputChange={props.searchInputChange}
        />
        <IconTabs
          isModalClicked={props.isModalClicked}
          modalClick={props.modalClick}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  searchInput: PropTypes.string,
  searchInputChange: PropTypes.func,
  isTop: PropTypes.bool,
  isModalClicked: PropTypes.bool,
  modalClick: PropTypes.func
};

export default SearchBar;
