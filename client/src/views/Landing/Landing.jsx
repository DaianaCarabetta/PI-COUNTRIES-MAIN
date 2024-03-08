import style from './Landing.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from "react";


const Landing = ({setShowNavbar}) => {

  useEffect(() => {
    setShowNavbar(false);
    return () => setShowNavbar(true);
  }, [setShowNavbar]);

  return (
    <div className={style.backgroundImage}>
      <div className={style.container}>
        <div className={style.countryInfo}>
          <div className={style.logoContainer}>
            <p className={style.mainText}>DISCOVER THE COUNTRIES</p>
          </div>
        </div>
        <div className={style.homeLink}>
          <Link to={'/home'}>
              <button className={style.actionButton}>TRAVEL THE WORLD</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Landing