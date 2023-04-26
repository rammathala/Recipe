import React from 'react';
import './Food.css'
import Product from './Product';
import { BiDish } from "react-icons/bi";
const Food = ({data}) => {
    return (
        <div className='foodli'>
            <div className='dishlist'>
               <BiDish className='dis'/><p>{data.length}</p>
            </div>
            
        <div className='food'>
            {
                data.map(dat=>(
                    <Product data={dat}/>
                   
                ))
            }
        </div>
        </div>
    );
};

export default Food;