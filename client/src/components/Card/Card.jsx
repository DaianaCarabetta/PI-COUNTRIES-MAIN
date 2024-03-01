import React from 'react'
import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({country}) => {
  const { name, flagImage, continent, countryCode } = country;

  return (
    <div className={style.card}>
      <Link to={`/detail/${countryCode}`}>
        <img className={style.image} src={flagImage} alt={`${name} flag`}/>
        <h3 className={style.title}>{name}</h3>
        <p className={style.subtitle}>{continent}</p>
      </Link>
      
    </div>
  )
}

export default Card