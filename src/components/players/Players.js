import React, { useState, useEffect } from 'react';

function Players() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/api/players')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
}

export default Players;
