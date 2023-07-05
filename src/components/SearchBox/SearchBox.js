import React from 'react';
import './SearchBox.css';

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
  searchField,
}) => (
  <div className={`search-box ${className}`}>
    <div className="search-box__input-container">
      <input
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={searchField}
        autoComplete="on"
        className='search-input'
      />
    </div>
  </div>
);

export default SearchBox;
