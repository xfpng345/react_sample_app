import React, { useState } from 'react';

const SampleComponent = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  );
};

export default SampleComponent;