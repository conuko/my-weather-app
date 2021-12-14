import { useState, useEffect } from 'react';

const UseFetch = (initialUrl) => {
  // create the state variables
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    setIsLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((dat) => {
        setIsLoading(false);
        setData(dat);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      });
    // dependency array
  }, [url]);

  return {
    data, error, isLoading, setUrl,
  };
};

export default UseFetch();
