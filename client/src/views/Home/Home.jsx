import Cards from '../../components/Cards/Cards'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCountries } from '../../redux/actions/actions.countries'
import { listActivities } from '../../redux/actions/actions.activities'
import Loader from '../../components/Loader/Loader';
import NotFound from '../../components/NotFound/NotFound';
import Filter from '../../components/Filter/Filter';
import Pagination from '../../components/Pagination/Pagination';
import { calculateCurrentCountries } from '../../redux/actions/actions.countries';

const Home = () => {
  const dispatch = useDispatch();
  const loader = useSelector(state => state.countries.loader);
  const currentPage = useSelector(state => state.countries.currentPage);
  const currentCountries = useSelector(state => state.countries.currentCountries);
  const countriesPerPage = 10;

  const totalFilteredCountries = useSelector(state => state.countries.totalFilteredCountries);
  const totalPages = Math.ceil(totalFilteredCountries / countriesPerPage);
  
  const countries = useSelector(state => state.countries.countries);
  const activities = useSelector(state => state.activities.activities);
  const continents = [...new Set(countries.map(country => country.continent))];

  useEffect(() => {
    dispatch(listCountries());
    dispatch(listActivities());
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculateCurrentCountries());
  }, [currentPage, countries, dispatch]);
  
  return (
    <div>
    { loader ? (<Loader/>) : (
      <div>
        <header>
          <Filter continents={continents} activities={activities}/>
        </header>
        <div>
          { currentCountries.length > 0 ? (
          <Cards countries={currentCountries} activities={activities} continents={continents}/>
          ) : (
            <NotFound/>
          ) }
        </div>
        <footer>
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </footer>
      </div>
      )
    }
    </div>
  )
}

export default Home