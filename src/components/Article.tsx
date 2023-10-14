import React, { useState } from 'react';

import './Article.css';

import Paper from '@mui/material/Paper';
import { useShoppingCart } from '../context/ShoppingCartContext';

interface ArticleProps {
  id : number;
  title: string;
  price: number;
  image: string;
  hoverImage: string;
}

function Article(props: ArticleProps) {
  const { addToCart , getItemQuantity}  = useShoppingCart();
 
  const [isHovered, setIsHovered] = useState(false);

  const cartQuantity = getItemQuantity(props.id);


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
          <div hidden={!isHovered} onClick={() => addToCart(props.id)} className='article__button'>
            {cartQuantity > 0  ?
            <i className="fa-solid fa-cart-shopping" style={{ color: "#ffffff" }}></i>
            :
            <i className="fa-solid fa-cart-plus" style={{ color: "#ffffff" }}></i>
          }
          </div>
          
          
          <div  hidden={!isHovered} className='article__button' > 
         
            {/* <i className="fa-solid fa-heart-circle-check" style={{ color: "#ffffff" }}></i> */}
            
            <i className="fa-solid fa-heart-circle-plus" style={{ color: "#ffffff" }}></i>
          
          </div>

          

        </div>

        <h3 className='article__title'>{props.title}</h3>
        <p className='article__price'>{props.price}</p>
      </div>
    </Paper>


  );
}

export default Article;
