import React, { useEffect } from 'react'
import CreateActivityForm from '../../components/CreateActivityForm/CreateActivityForm'
import { useSelector, useDispatch } from 'react-redux'
import { listCountries } from '../../redux/actions/actions.countries'

const CreateActivity = () => {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries.countries);

  useEffect(() => {
    dispatch(listCountries());
  }, [dispatch]);

  return( 
   <div>{
    countries ? (<CreateActivityForm countries={countries}/>) : (<h1>Loading...</h1>)}
   </div>
  )
}

export default CreateActivity

