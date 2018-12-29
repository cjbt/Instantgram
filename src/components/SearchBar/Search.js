import React from 'react';
import PropTypes from 'prop-types';

const Search = props => {
  return (
    <form>
      <input
        className='search'
        type='text'
        value={props.searchInput}
        placeholder={'Search'}
        onChange={e => props.searchInputChange(e)}
        id={'search'}
      />
    </form>
  );
};

Search.propTypes = {
  searchInput: PropTypes.string,
  searchInputChange: PropTypes.func
};

export default Search;
