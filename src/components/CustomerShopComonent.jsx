/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import axios from "../utils/axios";
import ShopItemList from "./ShopItemList";
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


function CustomerShopComponent({
  item: {
    price,
    quantity,
    item: {category, subCategory, name, itemImageLink},
  } , itemid, shop
})

{ 
    const [qty, setQty] = useState("");
    function addtoCart(e){
        e.preventDefault();
    const data = {
      item_quantity_id: itemid,
      quantity: qty,
      shop_id: shop,
    };
    console.log(data);
    axios
      .post(
        "/customer/createCart",
        data,
        {
        params:{
            user_id: 7,
        }
        }
      )
      .then(({ data }) => {
        // setUserId(data.userDetails.id);
        // setShopId(data.id);
        console.log("RESPONSE ==== : ", data);
      })
      .catch((err) => {
        console.log("ERROR: ====", err);
      });
    }
    function handleChange(e){
        e.preventDefault();
        setQty(e.target.value);
    }
  return (
    <div className='col'>
      <div className='col-12 col-md-6 col-lg-4'>
        <div style={{ flex: 1, width: 20 + "rem" }} className='card'>
          <div className='card-img-top' style={{ height: "200px", backgroundImage: `url(${itemImageLink})`, backgroundSize: "cover", backgroundPosition: "center" } } />
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
            <div className='row'></div>
          </div>
          <div className='col'>
            <input value={qty} placeholder='Buy Quantity' onChange={handleChange}/>
          </div>
          <div className='col mb-3'>
            <button onClick={addtoCart} className='btn btn-md btn-dark'>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CustomerShopComponent;
