import FullGrid from './FullGrid';
import Footer from './Footer';
import * as React from 'react';
import Pagination from '@mui/material/Pagination';

import './Products.css';
import articles from '../articles';


export default function Products() {

  
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const numberPages = Math.ceil(articles.length / 12);


  return (
    <div className='Products'>
      <h2 className='Products__title'>Featured Products</h2>
      <FullGrid page={page}/>
      <Pagination count={numberPages} page={page} onChange={handleChange} />
    </div>
  );
}