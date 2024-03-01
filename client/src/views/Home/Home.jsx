import Cards from '../../components/Cards/Cards'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCountries } from '../../redux/actions/actions.countries'
import { listActivities } from '../../redux/actions/actions.activities'


const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries.countries);
  const activities = useSelector(state => state.activities.activities);
  const continents = [...new Set(countries.map(country => country.continent))];

  useEffect(() => {
    dispatch(listCountries());
    dispatch(listActivities());
  }, [dispatch]);

  
  return (
    <div>
      <Cards countries={countries} activities={activities} continents={continents}/>
    </div>
  )
}

export default Home