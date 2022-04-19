import React, { useState } from 'react';
import './Counter.css';
// let count = 0;

const Counter = () => {
  // const arr = useState(0);
  // const count = arr[0]; // Getter
  // const setCount = arr[1]; // Setter

  const [ count, setCount ] = useState(0);
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const clickHandler = () => {
    // count++; // NEVER DO THIS

    setCount(count + 1);

    console.log(count);
  };

  return (
    <>
      <h2 className="super-special">The counter component</h2>
      <h2>Current count is: {count}</h2>

      <button onClick={clickHandler} >Increment!!</button>
    </>
  );
};

export default Counter;
