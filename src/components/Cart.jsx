import {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import './Cart.css';

export default function TemporaryDrawer() {
  const [state, setState] = useState({
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {


    setState({ ...state, [anchor]: open });
  };

  const [selectedTab, setSelectedTab] = useState('Cart'); 

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className='list__name'>
        <h2
          className={selectedTab === 'Cart' ? 'selected' : ''}
          onClick={() => handleTabClick('Cart')}
        >
          Cart
        </h2>
        <h2
          className={selectedTab === 'Wish List' ? 'selected' : ''}
          onClick={() => handleTabClick('Wish List')}
        >
          Wish List
        </h2>
      </div>
      <Divider />
      <List>
     
      </List>
 
      
    </Box>
  );

  return (
    <div>
        <> 
          <IconButton onClick={toggleDrawer('right', true)} size="large" aria-label="search" color="inherit">
            <i className="fa-solid fa-cart-shopping fa-xl" style={{color: "#f1efef"}}></i>
          </IconButton>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </>

    </div>
  );
}