import { useState, useEffect } from 'react';
import axios from 'axios';

const usePortfolioData = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/portfolio-items?populate=*`
        );
        console.log('API Response:', response.data); // Log the API response
        setPortfolioItems(response.data.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message || 'An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { portfolioItems, loading, error };
};

export default usePortfolioData;