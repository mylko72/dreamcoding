import React from 'react';
import { useState } from 'react';

export default function Counter() {
  // let counter = 0;
  const [counter, setCounter] = useState(0);

  return (
    <div className='counter'>
      <span className='num'>{counter}</span>
      <button onClick={e => {
        setCounter(prev => (prev + 1));
        setCounter(prev => (prev + 1));
        setCounter(prev => (prev + 1));
        setCounter(prev => (prev + 1));                        
      }}>Add +</button>
    </div>
  );
}

