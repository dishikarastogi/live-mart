import React, { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { latitude, longitude } from "./GeolocationComponent";
import {userid} from "./Login";
import axios from "../utils/axios";


function Cart() {
  const [state, setState] = useState({
    address: "",
    contact: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const createDeliveryAddress = (e) => {
    e.preventDefault();
    const data = {
      deliveryAddress: state.address,
      deliveryContact: state.contact,
      id: userid,
      latitude: latitude,
      longitude: longitude,
    };
    console.log(data);
    axios
      .post("/retailer/createDeliveryAddress", data)
      .then((res) => {
        console.log("RESPONSE ==== : ", res);
      })
      .catch((err) => {
        console.log("ERROR: ====", err);
      });
  };
  return (
    <div>
      <section id='toTheTop' style={{ marginBottom: 30 }}>
        <Navigation />
      </section>

      <div className='container mb-4'>
        <div className='row'>
          <div className='col-12'>
            <div className='table-responsive'>
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th scope='col'> </th>
                    <th scope='col'>Product</th>
                    <th scope='col'>Available</th>
                    <th scope='col' className='text-center'>
                      Quantity
                    </th>
                    <th scope='col' className='text-right'>
                      Price
                    </th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src='https://dummyimage.com/50x50/55595c/fff' />{" "}
                    </td>
                    <td>Product Name Dada</td>
                    <td>In stock</td>
                    <td>
                      <input className='form-control' type='text' value='1' />
                    </td>
                    <td className='text-right'>124,90 €</td>
                    <td className='text-right'>
                      <button className='btn btn-sm btn-danger'>
                        <i className='fa fa-trash'></i>{" "}
                      </button>{" "}
                    </td>
                  </tr>

                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <strong>Total</strong>
                    </td>
                    <td className='text-right'>
                      <strong>346,90 €</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <label>Enter your delivery address:</label>
            <input
              placeholder='Address'
              required=''
              type='text'
              id='address'
              value={state.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Enter your contact</label>
            <input
              placeholder='Contact'
              required=''
              type='text'
              id='contact'
              value={state.contact}
              onChange={handleChange}
            />
          </div>
          <div className='col mb-2'>
            <div className='row'>
              <div className='col-sm-12 col-md-12 text-right'>
                <button
                  style={{ marginTop: 32 }}
                  className='btn btn-lg btn-block btn-success text-uppercase'
                  onClick={createDeliveryAddress}>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id='toContact'>
        <Footer />
      </section>
    </div>
  );
}
export default Cart;
