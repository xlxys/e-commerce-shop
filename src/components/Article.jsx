import React, { useState } from 'react';

import './Article.css';

import Paper from '@mui/material/Paper';



function Article(props) {
  const [isHovered, setIsHovered] = useState(false);



  return (
    <Paper elevation={3} >
      <div
        className='article'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        <img
          data-visible={isHovered}
          className="article__image hovered"
          src={props.hoverImage}
          alt={props.title}
        />
        <img
          data-visible={!isHovered}
          className="article__image"
          src={props.image}
          alt={props.title}
        />
        <div className='article__overlay' >
          <div hidden={!isHovered} className='article__button'><i className="fa-solid fa-cart-plus" style={{ color: "#ffffff" }}></i></div>
          <div  hidden={!isHovered} className='article__button' > <i className="fa-solid fa-heart-circle-plus" style={{ color: "#ffffff" }}></i></div>
          {/* <button className='article__button'><i className="fa-solid fa-heart-circle-check"></i></button> */}
        </div>

        <h3 className='article__title'>{props.title}</h3>
        <p className='article__price'>{props.price}</p>
      </div>
    </Paper>


  );
}

export default Article;
