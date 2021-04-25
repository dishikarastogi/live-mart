import React, { useEffect, useState, useCallback } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import axios from "../utils/axios";


function Add({ shopId }) {
  
  const [state, setState] = useState({
    item_id: "",
    quantity: "",
    price: "",
  });

  const [items, setItems]= useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const addItem = (e)=>{
    e.preventDefault();
    const data = [{
      item_id: state.item_id,
      price:state.price,
      quantity:state.quantity,
    }];
    console.log(data);
      axios
        .post(
            "/retailer/addItems",
            data,
            {
              params:{
                shop_id: shopId,
              }
            },
        )
        .then((res) => {
            console.log("RESPONSE ==== : ", res);
          })
          .catch((err) => {
            console.log("ERROR: ====", err);
          });
  };

  const generateItemList = useCallback(() => {
    axios
      .get("/back_fill/getAllItem")
      .then((res) => {
        console.log("RESPONSE ==== : ", res);
        const listofItems= res.data;
        setItems(listofItems);
      })
      .catch((err) => {
        console.log("ERROR: ====", err);
      });
  }, [setItems]);

  useEffect(()=>{
    generateItemList();
  },[generateItemList]);


  return (
    <div>
      <section id='toTheTop' style={{ marginBottom: 30 }}>
        <Navigation />
      </section>

      <form className='form-horizontal' onSubmit={addItem}>
        <fieldset>
          <legend>Add Products</legend>
          <div><h6> Items that can be added:</h6></div>
          <div className='row mb-3'>
            <label
              style={{ marginTop: 50 }}
              className='col-md-4 col-form-label-md itemList'>
              Item
            </label>
            <div className='col-md-4'>
              <select
                placeholder='Item id'
                className='form-control input-md'
                required='true'
                type='text'
                id="item_id"
                value={state.item_id}
                onChange={handleChange}
              >
                {items.map(item => <option value={item.id}>{item.name}</option>)}
              </select>
            </div>
          </div>
          <div className='row mb-3'>
            <label
              style={{ marginTop: 50 }}
              className='col-md-4 col-form-label-md itemList'>
              Quantity
            </label>
            <div className='col-md-4'>
              <input
                placeholder='Quantity'
                className='form-control input-md'
                required=''
                id="quantity"
                value={state.quantity}
                type='text'
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label
              style={{ marginTop: 50 }}
              className='col-md-4 col-form-label-md itemList'>
              Price
            </label>
            <div className='col-md-4'>
            <input
                placeholder='Price'
                className='form-control input-md'
                required=''
                type='text'
                id='price'
                value={state.price}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* <div style={{ marginTop: 50 }} className='row mb-3'>
            <label className='col-md-4 col-form-label itemList'>Image</label>
            <div className='col-md-4'>
              <input
                id='filebutton'
                name='filebutton'
                className='input-file'
                type='file'
              />
            </div>
          </div> */}
          <div style={{ marginTop: 50 }} className='row mb-3'>
            <div className='col-md-12'>
              <button
                id='singlebutton'
                name='singlebutton'
                className='btn btn-lg btn-dark'>
                Add
              </button>
            </div>
          </div>
        </fieldset>
      </form>
      <section id='toContact'>
        <Footer />
      </section>
    </div>
  );
}
export default Add;
