


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../redux/articlesSlice';
import ArticleList from '../components/ArticleList';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';
import './HomePage.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const { articles, loading, error, category, page, totalResults } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(getArticles({ category, page }));
  }, [dispatch, category, page]);

  return (
    <div className="container">
      <CategoryFilter />
      {loading && (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}
      {error && <p className="error text-center">Error fetching articles: {error}</p>}
      {!loading && !error && <ArticleList articles={articles} />}
      <Pagination currentPage={page} totalResults={totalResults} />
    </div>
  );
};

export default HomePage;

