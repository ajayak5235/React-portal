

import axios from 'axios';

const API_KEY = 'd0c6a761adf047ba9cf5e7251b20b580';

const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async (category = 'general', page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        category,
        page,
        pageSize: 9,
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};
