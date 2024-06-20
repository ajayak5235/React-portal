import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePages';
import ArticlePage from './pages/ArticlePage';
import NavBar from './components/NavBar';
import './App.css';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:title" element={<ArticlePage />} />
      </Routes>
    </div>
  );
};

export default App;


