const { useState } = require('react');

const useFetch = (callback) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const customFetch = async (...args) => {
    setLoading(true);
    setError(null);
    try {
      const response = await callback(...args);
      setData(response);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, customFetch, setData };
};

export default useFetch;
