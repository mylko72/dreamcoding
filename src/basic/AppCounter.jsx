import React, { useState } from 'react';
import './App.css';
import Counter from './basic/components/Counter';

export default function AppCounter() {
  const [count, setCount] = useState(0);

  const handleClickCount = (operation, num) => {
    setCount((prev) => {
      if(operation === 'add'){
        return prev + 1;
      }else if(operation === 'decrease'){
        return prev && prev - 1;
      }else if(operation === 'reset'){
        return prev && prev - num;
      }
    });
  }

  return (
    <div className='container'>
      <div className='banner'>
        Total Count: {count} {count > 10 ? '🔥' : '❄️'}
      </div>
      <div className='counters'>
        <Counter total={count} onClick={handleClickCount} />
        <Counter total={count}  onClick={handleClickCount} />
      </div>
    </div>
  );
}
