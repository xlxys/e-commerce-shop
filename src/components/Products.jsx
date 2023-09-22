import FullGrid from './FullGrid';
import * as React from 'react';
import Pagination from '@mui/material/Pagination';

import './Products.css';


export default function Products() {

  
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className='Products'>
      <FullGrid />
      <Pagination count={10} page={page} onChange={handleChange} />
    </div>
  );
}