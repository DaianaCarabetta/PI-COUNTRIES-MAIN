import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css';

const NavBar = () => {
  const location = useLocation();
  const hideSearchBar = location.pathname.startsWith('/detail/') || location.pathname === '/create_activity';

  const handleButtonClick = (route) => {
    return () => {
      if (location.pathname === route) {
        window.location.reload();
      }
    };
  };

  return (
    <nav className={style.nav}>
      <div className={style.buttons}>
        <Link to={'/home'} onClick={handleButtonClick('/home')}>
          <button className={style.button}>Home</button>
        </Link>
        <Link to={'/create_activity'} onClick={handleButtonClick('/create_activity')}>
          <button className={style.button}>Create Activity</button>
        </Link>
      </div>
      {!hideSearchBar && <SearchBar />}
    </nav>
  );
};

export default NavBar;
