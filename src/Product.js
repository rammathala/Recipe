import React from 'react';
import './Product.css';
const Product = ({data}) => {
    return (
        <div className='product'>
           <div className='left'>
           <img src={data.recipe.image} alt="Card image cap" />
           <h5 class="card-title">{data.recipe.label}</h5>
           </div>
            <div class="right">
                    <div className='Ingredients'>
                        <h4>Ingredients:</h4>
                        {data.recipe.ingredientLines.map(il=>(
                          <div className='li'>{il}</div>
                    ))}</div>
                    
                    </div>
        </div>
    );
};

export default Product;