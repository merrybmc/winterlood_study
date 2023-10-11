import React from 'react';
import './Header.css';
import { memo } from 'react';

function Header() {
  // console.log('dd');
  return (
    <div className='header'>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
}

const OptimizedHeaderComponent = memo(Header);

export default OptimizedHeaderComponent;

// export default memo(Header);
