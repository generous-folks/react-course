import React, { useState } from 'react';

const FunctionalComponentWithState = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = setCounter(counter + 1);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={incrementCounter}>add</button>
    </>
  );
};

export default FunctionalComponentWithState;
