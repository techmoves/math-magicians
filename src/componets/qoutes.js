import React, { useEffect, useState } from 'react';

export default function Quote() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const settings = {
        headers: { 'X-Api-Key': '5yCNhWqtixQuin+kzUdPQg==tAtXV9GzU1F6kFYv' },
        contentType: 'application/json',
        method: 'GET',
      };
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=success',
          settings,
        );
        const responsJson = await response.json();
        setData(`${responsJson[0].quote}`);
      } catch (error) {
        setHasError(true);
      }
      setLoading(false);
    };

    fetchData();

    return () => {
      fetchData();
    };
  }, []);

  if (loading === true) return <div>Loading...</div>;
  if (hasError === true) return <div>Error please try again</div>;

  return (
    <div className="load-data">
      {' '}
      {data}
      {' '}
    </div>
  );
}
