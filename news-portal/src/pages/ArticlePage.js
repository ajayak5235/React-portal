import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ArticlePage.css';

const ArticlePage = () => {
const { title } = useParams();
const article = useSelector((state) =>
state.articles.articles.find((article) => article.title === title)
);

if (!article) {
return <p>Article not found.</p>;
}

return (
<div className="container article-page">
<h1>{article.title}</h1>
{article.urlToImage && <img className='max-height: 50%'  src={article.urlToImage} alt={article.title} />}
<p>{article.content}</p>
</div>
);
};

export default ArticlePage;