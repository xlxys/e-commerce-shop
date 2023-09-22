import React, { useState } from 'react';

import './Article.css';

// import Paper from '@mui/material/Paper';

function Articale(probs) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='articale'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className='articale__image'
        src={isHovered ? probs.hoverImage : probs.image}
        alt={probs.title}
      />
      <h3 className='articale__title'>{probs.title}</h3>
      <p className='articale__price'>{probs.price}</p>
    </div>
  );
}

export default Articale;
