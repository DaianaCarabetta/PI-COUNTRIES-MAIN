import React from 'react';
import { useDispatch } from 'react-redux';
import style from './Pagination.module.css';
import { setCurrentPage } from '../../redux/actions/actions.countries';

const Pagination = ({ currentPage, totalPages }) => {
  const dispatch = useDispatch();

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className={style.pagination}>
      <button onClick={handlePrevClick} disabled={currentPage === 1}>
        &lt;&lt;
      </button>
      <span >{currentPage}</span>
      <button onClick={handleNextClick} disabled={currentPage === totalPages}>
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;

