import React, { useState } from 'react';

// Creating component as Function(props) {} is the same as const Component = props => {}
const UseStateComponents = () => {
    const [counter, setCounter] = useState(0);

    return (
      <div>
          <h1>{counter}</h1>
          <Button onClick={() => setCount(count + 1)}>Add count</Button>
      </div>
    )
  }