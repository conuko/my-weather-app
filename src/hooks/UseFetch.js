import { useState, useEffect } from 'react';

const UseFetch = (initialUrl) => {
  // create the state variables
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    if (!url) return;
    setIsLoading(true);

    // clear old search
    setData(null);
    setError(null);

    fetch(url)
      .then((res) => res.json())
      .then((dat) => {
        // error handling if no data exists
        setIsLoading(false);
        if (dat.cod >= 400) {
          setError(dat.message);
          return;
        }
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

export default UseFetch;
