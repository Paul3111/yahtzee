import React, { useState, useEffect } from 'react';

function Players() {
  const [data, setData] = useState({});

  console.log('hidhfnwnwefnkwef')
  


  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()).then(data=> console.log(data))
  //   fetch('http://localhost:8080/').then(res => console.log(res))
    // fetch('/api/players')
    //   .then(res => {
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
