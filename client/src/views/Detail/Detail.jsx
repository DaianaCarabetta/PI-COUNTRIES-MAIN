import React, { useEffect } from 'react'
import CountryDetail from '../../components/CountryDetail/CountryDetail'
import { useSelector, useDispatch } from 'react-redux'
import { getCountry } from '../../redux/actions/actions.countries'
import { useParams } from "react-router-dom";
import Loader from '../../components/Loader/Loader';

const Detail = () => {
  const params = useParams()
  const dispatch = useDispatch();
  const loader = useSelector(state => state.countries.loader);
  const country = useSelector(state => state.countries.selectedCountry);

  useEffect(() => {
    dispatch(getCountry(params.id));
  }, [dispatch]);

  return( 
   <div>
    { loader || !country ? (<Loader/>) : (<CountryDetail country={country}/>) }
   </div>
  )
}

export default Detail

