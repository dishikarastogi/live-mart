import React from "react"
import ShopComponent from "./ShopComponent"
import Footer from "./Footer";
import Navigation from "./Navigation"

function Subcategory(){

    return   <div>
    <section id="toTheTop">
   <Navigation/>
</section>
    <div className='col'>
      <div className='row'></div>
      <div className='col-12 col-md-6 col-lg-4'>
        <div className='card'>
          <img
            className='card-img-top'
            src='https://dummyimage.com/600x400/55595c/fff'
            alt='component'
          />
          <div className='card-body'>
            <h4 className='card-title'>
              <a href='product.html' title='View Product'>
                Onion
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
            <div className='row'>
              <div className='col'>
                <label>Qty</label>
                <input type="text"/>
              </div>
              <div className='col'>
                <p>
                  Location
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <p>Total cost</p>
              </div>
              <div className='col'>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
{/* Footer Section */}
<section id="toContact">
        <Footer/>
    </section>
    </div>
}
export default Subcategory