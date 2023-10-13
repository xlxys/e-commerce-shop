import Skeleton from '@mui/material/Skeleton';
import Paper from '@mui/material/Paper';


import CartItem from './CartItem';

import './Cart.css';


// export default function SwipeableTemporaryDrawer() {
//   const [state, setState] = useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const [selectedTab, setSelectedTab] = useState('Cart'); 

//   const handleTabClick = (tab) => {
//     setSelectedTab(tab);
//   };

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event &&
//       event.type === 'keydown' &&
//       (event.key === 'Tab' || event.key === 'Shift')
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//             <div className='list__name'>
//         <h2
//           className={selectedTab === 'Cart' ? 'selected' : ''}
//           onClick={() => handleTabClick('Cart')}
//         >
//           Cart
//         </h2>

//         <h2
//           className={selectedTab === 'Wish List' ? 'selected' : ''}
//           onClick={() => handleTabClick('Wish List')}
//         >
//           Wish List
//         </h2>
//       </div>
//       <Divider />
//       <List>

//         <CartItem id="2"/>
//         <CartItem id="3"/>
//         <CartItem id="4"/>
    
//         <Paper elevation={3}>
//         <Skeleton variant="rectangular" animation="wave"  width={350} height={125} />
//         </Paper>
//         <Paper elevation={3}>
//         <Skeleton variant="rectangular" animation="wave"  width={350} height={125} />
//         </Paper>
//         <Paper elevation={3}>
//         <Skeleton variant="rectangular" animation="wave"  width={350} height={125} />
//         </Paper>
     
//       </List>
      
//     </Box>
//   );

//   return (
//     <div>
//         <Fragment key={"right"}>
//           <IconButton onClick={toggleDrawer("right", true)} size="large" aria-label="search" color="inherit">
//             <i className="fa-solid fa-cart-shopping fa-xl" style={{color: "#f1efef"}}></i>
//           </IconButton>
//           <SwipeableDrawer
//             anchor={"right"}
//             open={state["right"]}
//             onClose={toggleDrawer("right", false)}
//             onOpen={toggleDrawer("right", true)}
//           >
//             {list("right")}
//           </SwipeableDrawer>
//         </Fragment>

//     </div>
//   );
// }


import {useState} from 'react';
import { styled } from '@mui/material/styles';

import Drawer from '@mui/material/Drawer';


import List from '@mui/material/List';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const drawerWidth = 400;


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleDrawerOpen} size="large" aria-label="search" color="inherit">
           <i className="fa-solid fa-cart-shopping" style={{color: "#f1efef"}}></i>
      </IconButton>
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
            <ChevronRightIcon /> 
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <CartItem id="2"/>
          <CartItem id="3"/>
          <CartItem id="4"/>
        </List>
        <Divider />
        <Paper elevation={3}>
          <Skeleton variant="rectangular" animation="wave"  width={400} height={125} />
        </Paper>
      </Drawer>
    </>
  );
}
