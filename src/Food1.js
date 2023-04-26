import React from 'react';
import Product from './Product';
import './Food1.css'
const Food1 = ({data}) => {
    return (
        <div className='Food1'>
            {
                data.map(dat=>(
                    <Product data={dat}/>
                   
                ))
            }
        </div>
    );
};

export default Food1;