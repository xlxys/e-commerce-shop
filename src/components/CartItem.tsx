import Paper from '@mui/material/Paper';
import './CartItem.css';

import articles from '../data/articles.json';
import { useShoppingCart } from '../context/ShoppingCartContext';
interface CartItemProps {
  id: number;
  quantity: number;
}

export default function CartItem(props: CartItemProps) {
  const { decreaseCartQuantity, increaseCartQuantity } = useShoppingCart();
  const article = articles.find((article) => article.id === props.id);
  return (
    <Paper elevation={3}>
        {article && (
        <div className="CartItem">
            
            <img className="CartItem__img" src={article.image} alt={article.title} />
            {/* <i style={{position : "absolute", left : "5px", top: "10px"}} className="fa-solid fa-xmark"></i>
             */}
              
            <div className="CartItem__info">
              <div className="CartItem__description">
                <h3>{article.title}</h3>
                <p>{article.price}</p>
              </div>
              
              <div className="CartItem__actions">
                <p>quantity: {props.quantity}</p>
                <button onClick={() => decreaseCartQuantity(props.id)}><i className="fa-solid fa-minus"></i></button>
                <button onClick={() => increaseCartQuantity(props.id)}><i className="fa-solid fa-plus"></i></button>
              </div>

              <div className="CartItem__description">
                <p>Total: {article.price * props.quantity}</p>
              </div>
            </div>
          </div>
        )}
      
    </Paper>
  );
}