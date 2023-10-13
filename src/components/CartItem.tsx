import Paper from '@mui/material/Paper';
import './CartItem.css';

import articles from '../data/articles.json';

interface CartItemProps {
  id: string;
}

export default function CartItem(props: CartItemProps) {
  const id = parseInt(props.id);

  
  const article = articles.find((article) => article.id === id);
  console.log(article);
  return (
    <Paper elevation={3}>
      <div className="CartItem">
        {article && (
          <>
            <img className="CartItem__img" src={article.image} alt={article.title} />
            <div className="CartItem__info">
              <h3>{article.title}</h3>
              <p>{article.price}</p>
              <p>quantity: 1</p>
            </div>
          </>
        )}
      </div>
    </Paper>
  );
}