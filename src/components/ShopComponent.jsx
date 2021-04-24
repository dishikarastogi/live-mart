/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


function ShopComponent(props) {

    
  return (
    <div className='col'>
      <div className='row'></div>
      <div className='col-12 col-md-6 col-lg-4'>
        <div className='card'>
        <h6 className="card-text"> {props.category} {props.subCategory} </h6>
          <img
            className='card-img-top'
            src='https://dummyimage.com/600x400/55595c/fff'
            alt='component'
          />
          <div className='card-body'>
            <h4 className='card-title'>
              <a href='product.html' title='View Product'>
                {props.name}
              </a>
            </h4>
            <p className='card-text'>
              
            </p>
            <div className='row'>
              <div className='col'>
                <p className='btn btn-danger btn-block'>99.00 $</p>
              </div>
              <div className='col'>
                <a href='#' className='btn btn-success btn-block'>
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShopComponent