import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/articlesSlice';
import { Button, ButtonGroup } from 'react-bootstrap';
import './CategoryFilter.css';

const categories = ['general', 'business', 'technology', 'entertainment'];

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.articles.category);

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <div style={{ paddingTop: '120px' }}> 
          <ButtonGroup className='buttonCategory'>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'success' : 'outline-primary'}
            onClick={() => handleCategoryChange(category)}
            className='seperateButton'  style={{ fontWeight: 'bold' }} >
              
            {category}
            
          </Button>
        ))}
      </ButtonGroup>
      {/* Your other content goes here */}
    </div>
  );
};

export default CategoryFilter;




