import React, { useEffect } from 'react'
import CountryDetail from '../../components/CountryDetail/CountryDetail'
import { useSelector, useDispatch } from 'react-redux'
import { getCountry } from '../../redux/actions/actions.countries'
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams()
  const dispatch = useDispatch();
  const country = useSelector(state => state.countries.selectedCountry);

  useEffect(() => {
    dispatch(getCountry(params.id));
  }, [dispatch]);


  return( 
   <div>{
    country ? (<CountryDetail country={country}/>) : (<h1>Loading...</h1>)}
   </div>
  )
}

export default Detail

