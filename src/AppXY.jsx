import React from 'react';
import { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [position, setPosition] = useState({x: 100, y: 100});

  const handleMove = (e) => {
    // setPosition({x: e.clientX, y: e.clientY});
    // 수평으로만 이동하려면?
    // setPosition(prev => ({x: e.clientX, y: prev.y}));
    setPosition(prev => ({...prev, x: e.clientX}))
  }

  return (
    <div className='container' onPointerMove={handleMove}>
      <div className='pointer'
        style={{transform: `translate(${position.x}px, ${position.y}px)`}}
      />
      <div className='status'>X : {position.x}, Y: {position.y}</div>
    </div>
  );
}
