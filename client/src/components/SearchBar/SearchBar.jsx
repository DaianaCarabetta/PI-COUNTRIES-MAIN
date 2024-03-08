import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { searchCountry } from '../../redux/actions/actions.countries'
import style from './SearchBar.module.css';

const SearchBar = () => {

  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const onSearch = async (name) => {
    try {
      dispatch(searchCountry(name));
    } catch (error) {
      console.error('Error when making the request:', error);
      window.alert('Error when making the request. Please try again.');
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleClick = () => {
    onSearch(searchValue);
    setSearchValue('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch(searchValue);
      setSearchValue('');
    }
  };

  return (
    <div>
      <input className={style.input} onKeyDown={handleKeyDown} value={searchValue} onChange={handleChange} type='text' />
      <button className={style.button} onClick={handleClick}>SEARCH</button>
    </div>
  )
}

export default connect(null)(SearchBar);