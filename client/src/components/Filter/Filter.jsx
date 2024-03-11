import React, { useState } from 'react';
import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';
import {
  setCurrentPage,
  setSelectedActivity,
  setSelectedContinent,
  setSelectedNameOrder,
  setSelectedPopulationOrder,
  calculateCurrentCountries,
  listCountries
} from '../../redux/actions/actions.countries';

const Filter = ({ continents, activities }) => {
  const dispatch = useDispatch();

  const [continent, setContinent] = useState('');
  const [activity, setActivity] = useState('');
  const [nameOrder, setNameOrder] = useState('');
  const [populationOrder, setPopulationOrder] = useState('');

  const handleFilter = () => {
    dispatch(setSelectedContinent(continent));
    dispatch(setSelectedActivity(activity));
    dispatch(setCurrentPage(1));
    dispatch(calculateCurrentCountries());
  };

  const handleSort = () => {
    dispatch(setSelectedNameOrder(nameOrder));
    dispatch(setSelectedPopulationOrder(populationOrder));
    dispatch(setCurrentPage(1));
    dispatch(calculateCurrentCountries());
  };

  const handleClear = () => {
    setContinent('');
    setActivity('');
    setNameOrder('');
    setPopulationOrder('');

    dispatch(setSelectedContinent(''));
    dispatch(setSelectedActivity(''));
    dispatch(setSelectedNameOrder(''));
    dispatch(setSelectedPopulationOrder(''));

    dispatch(setCurrentPage(1));
    dispatch(listCountries());
  };

  return (
    <div className={styles['filter-container']}>
      <label>Filter by Continent:</label>
      <select value={continent} onChange={(e) => setContinent(e.target.value)}>
        <option key="all" value="">All</option>
        {continents.map((continent, index) => (
          <option key={index} value={continent}>{continent}</option>
        ))}
      </select>

      <label>Filter by Activity:</label>
      <select value={activity} onChange={(e) => setActivity(e.target.value)}>
        <option key="all" value="">All</option>
        {activities.map((activity, index) => (
          <option key={index} value={activity.name}>{activity.name}</option>
        ))}
      </select>

      <label>Sort by Name:</label>
      <select value={nameOrder} onChange={(e) => setNameOrder(e.target.value)}>
        <option value="">None</option>
        <option value="name_asc">Name (A-Z)</option>
        <option value="name_desc">Name (Z-A)</option>
      </select>

      <label>Sort by Population:</label>
      <select value={populationOrder} onChange={(e) => setPopulationOrder(e.target.value)}>
        <option value="">None</option>
        <option value="population_asc">Population (Low to High)</option>
        <option value="population_desc">Population (High to Low)</option>
      </select>

      <button onClick={handleFilter}>Apply Filter</button>
      <button onClick={handleSort}>Apply Sort</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default Filter;
