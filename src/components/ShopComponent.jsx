/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

// function editComponent(){
//   const data=[{
//     item_quantity_id: key,
//     price: ,
//     quantity: ,
//   }]
//   axios
//   .put("/retailer/updateItems"
//   , data
//     )
// } 


function ShopComponent({

  item: {
    price,
    quantity,
    item: { category, subCategory, name, itemImageLink },
  },
})

{
  return (
    <div className='col'>
      <div className='row'></div>
      <div className='col-12 col-md-6 col-lg-4'>
        <div className='card'>
          <img className='card-img-top' src={itemImageLink} alt='component' />
          <div className='card-body'>
            <h4 className='card-title'>
              <a href='product.html' title='View Product'>
                {name}
              </a>
            </h4>
            <h5 className='card-text'>
              {category} {subCategory}
            </h5>
            <p className='card-text'></p>
            <div className='row'>
              <div className='col'>
                <p className='btn btn-danger btn-block'>Rs.{price}</p>
              </div>
              <div className='col'>
                <a href='#' className='btn btn-success btn-block'>
                  {quantity}
                </a>
              </div>
            </div>
            <div className='row'>
             
        

         <div className='col'>
                <a  className='link'>Edit item</a>
              </div>
              <div className='col'>
                <a className='link'>Delete item</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShopComponent;
