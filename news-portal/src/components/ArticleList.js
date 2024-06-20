
import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleList = ({ articles }) => {
  return (
    <div className="container">
      <div className="row">
        {articles.map((article) => (
          <div className="col-md-4 d-flex align-items-stretch" key={article.title}>
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
