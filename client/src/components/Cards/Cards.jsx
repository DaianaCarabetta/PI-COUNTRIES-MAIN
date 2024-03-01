import React, { useEffect } from 'react';
import Card from '../Card/Card'
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../Pagination/Pagination';
import Filter from '../Filter/Filter';

import style from './Cards.module.css';
import { calculateCurrentCountries } from '../../redux/actions/actions.countries';

const Cards = ({ countries, activities, continents }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.countries.currentPage);
  const countriesPerPage = 10;

  useEffect(() => {
    dispatch(calculateCurrentCountries());
  }, [currentPage, countries, dispatch]);

  const currentCountries = useSelector(state => state.countries.currentCountries);
  const totalFilteredCountries = useSelector(state => state.countries.totalFilteredCountries);
  const totalPages = Math.ceil(totalFilteredCountries / countriesPerPage);

  return (
    <>
      <header>
        <Filter continents={continents} activities={activities}/>
      </header>
      <div className={style.container}>
          {currentCountries.map((country) => (
              <Card country={country} key={country.name}/>
          ))}
      </div>
      <footer>
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </footer>
    </>
  )
}

export default Cards;
