import CartItem from './CartItem';

import './Cart.css';

import {useState} from 'react';
import { styled } from '@mui/material/styles';

import Drawer from '@mui/material/Drawer';
import Badge, { BadgeProps } from '@mui/material/Badge';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { useShoppingCart } from '../context/ShoppingCartContext';

import articles from '../data/articles.json';


const drawerWidth = 350;

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 10,
    top: 15,
    padding: '0 4px',
  },
}));


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'center',
}));

export default function PersistentDrawerLeft() {

  function calcTotaleCart() {
    let totale = 0;
    cartItems.forEach(item => {
      const article = articles.find((article) => article.id === item.id);
      if(article) {
        totale += article.price * item.quantity;
      }
    });
    return totale;
  }


  const { cartItems, cartQuantity } = useShoppingCart();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledBadge badgeContent={cartQuantity} color="error">
      <IconButton onClick={handleDrawerOpen}  aria-label="cart" color="inherit">
           <i className="fa-solid fa-cart-shopping" style={{color: "#f1efef"}}></i>
      </IconButton>
      </StyledBadge>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
          <i className="fa-solid fa-xmark"></i>
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {cartItems.map((item) => (
            <CartItem key={item.id} id={item.id} quantity={item.quantity}/>
          ))}
        </List>
        <Divider />
        <Paper elevation={3}>
          <div className="Cart__total">
            <h3>Total :</h3>
            <p>{calcTotaleCart()}</p>
          </div>
        </Paper>
      </Drawer>
    </>
  );
}
