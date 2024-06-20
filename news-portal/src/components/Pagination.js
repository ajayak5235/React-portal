
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/articlesSlice';
import { Pagination as BootstrapPagination } from 'react-bootstrap';
import './Pagination.css';

const Pagination = ({ currentPage, totalResults }) => {
  const dispatch = useDispatch();
  const totalPages = Math.ceil(totalResults / 200);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <div className="pagination-container">
      <BootstrapPagination className="justify-content-center">
        <BootstrapPagination.Prev
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        />
        {[...Array(totalPages)].map((_, index) => (
          <BootstrapPagination.Item
            key={index}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </BootstrapPagination.Item>
        ))}
        <BootstrapPagination.Next
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        />
      </BootstrapPagination>
    </div>
  );
};

export default Pagination;




