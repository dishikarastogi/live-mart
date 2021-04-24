import React, { useState } from "react";
import axios from "../utils/axios";
import { latitude, longitude } from "./GeolocationComponent";
import { roleData } from "./Checkbox";
import { userid } from "./Login";

function CreateShop() {
  const [state, setState] = useState({
    shop: "",
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

  const createShop = (e) => {
    e.preventDefault();
    const data = {
      latitude: latitude,
      longitude: longitude,
      role: roleData,
      shop_address: state.address,
      shop_contact: state.contact,
      shop_name: state.shop,
      user_id: userid,
    };
    console.log(data);
      axios
        .post(
            "/retailer/create-shop",
            data,
        )
        .then((res) => {
            console.log("RESPONSE ==== : ", res);
          })
          .catch((err) => {
            console.log("ERROR: ====", err);
          });
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='form_main'>
            <h4 className='heading'>
              <strong>Create </strong> Shop <span></span>
            </h4>
            <div className='form'>
              <form
                onSubmit={createShop}
                id='contactFrm'
                name='contactFrm'>
                <input
                  type='text'
                  required=''
                  placeholder="Shop's name"
                  value={state.shop}
                  id='shop'
                  className='txt'
                  onChange={handleChange}
                />
                <input
                  type='text'
                  required=''
                  placeholder="Shop's address"
                  value={state.address}
                  id='address'
                  className='txt'
                  onChange={handleChange}
                />
                <input
                  type='text'
                  required=''
                  placeholder="Shop's Contact"
                  value={state.contact}
                  id='contact'
                  className='txt'
                  onChange={handleChange}
                />
                <button
                  type='submit'
                  value='submit'
                  className='btn btn-dark'>
                    Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateShop;
