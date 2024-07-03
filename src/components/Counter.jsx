import React, { useState } from 'react';

export default function Counter({total, onClick}) {
  const [count, setCount] = useState(0);
  return (
    <div className='counter'>
      <span className='number'>{count} <span className="total">/ {total}</span></span>
      <div>
        <button
          className='button'
          onClick={() => {
            setCount(prev => prev + 1);
            onClick('add');
          }}
        >
          Add +
        </button>
        <button
          className='button'
          onClick={() => {
            setCount(prev => prev && prev - 1);
            onClick('decrease');
          }}
        >
          Decrease -
        </button>
      </div>
      <div>
      <button
          className='button'
          onClick={() => {
            setCount(0);
            onClick('reset', count);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
