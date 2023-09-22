import React, { useState } from 'react';

import './Article.css';

// import Paper from '@mui/material/Paper';

function Article(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='article'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

<img
    data-visible={isHovered}
    className="article__image absolute"
    src={props.hoverImage}
    alt={props.title}
  />
  <img
    data-visible={!isHovered}
    className="article__image"
    src={props.image}
    alt={props.title}
  />

      <h3 className='article__title'>{props.title}</h3>
      <p className='article__price'>{props.price}</p>
    </div>
  );
}

export default Article;
