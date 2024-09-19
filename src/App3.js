import React, { useState, useEffect } from 'react';
import './App.css';  

const DataFetchingComponent = () => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
          throw new Error('Failed to fetch data'); 
        }

        const result = await response.json();
        setData(result); 
        setLoading(false); 
      } catch (error) {
        setError(error.message); 
        setLoading(false); 
      }
    };

    fetchData();
  }, []); 
  

  if (loading) {
    return <p>Loading data...</p>;
  }
  if (error) {
    return <p>Error fetching data: {error}</p>;
  }


  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Fetched Posts</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {data.slice(0, 10).map((post) => ( 
          <li key={post.id} style={{ margin: '10px 0', borderBottom: '1px solid #ddd' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingComponent;
