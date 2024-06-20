


import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  return (
    <div className="card mb-1 article-card">
      {article.urlToImage && (
        <img src={article.urlToImage} className="card-img-top article-image" alt={article.title} />
      )}
      <div className="card-body">
        <h5 className="card-title article-title">{article.title}</h5>
        <p className="card-text article-description">{article.description}</p>
        <Link to={`/article/${article.title}`} className="btn btn-primary">Read more</Link>
      </div>
    </div>
  );
};

export default ArticleCard;


