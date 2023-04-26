import React, { useState, useEffect } from 'react';

function Players() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/').then(res => res.json()).then(data => console.log(data))


    // fetch('/api/players')
    //   .then(res => {
    //     return res
    //   })
    //   .then(data => {
    //     return setData(data)
    //   });
  }, []);

  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
}

export default Players;
