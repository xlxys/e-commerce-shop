import { useState } from 'react';

import FullGrid from './FullGrid';
import Pagination from '@mui/material/Pagination';

import './Products.css';
import articles from '../data/articles.json';


export default function Products() {

  
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
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