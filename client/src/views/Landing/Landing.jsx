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
    <div>
      <Link to={'/home'}>
          <button className={style.button}>WELCOME</button>
      </Link>
    </div>
  )
}

export default Landing