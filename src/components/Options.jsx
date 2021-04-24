import React from "react";
import { roleData } from "./Checkbox";
import { useHistory } from "react-router-dom";
import axios from "../utils/axios";
import {userid} from "./Login"

let shopid;
function Options() {
  let history = useHistory();
  const getShopDetail = () => {
    axios
      .get("/retailer/getShopDetail",
      {
        params:{
          user_id: userid,
        }
      })
      .then((res) => {
        console.log("RESPONSE ==== : ", res);
        history.push("/retailer");
      })
      .catch((err) => {
        console.log("ERROR: ====", err);
      });
  };
  const renderRole = () => {
    if (roleData === "Customer") {
      history.push("/customer");
    } else if (roleData === "Retailer") {
      return getShopDetail();
    } else if (roleData === "Wholesaler") {
      history.push("/wholesaler");
    }
  };
  return (
    <div>
      <img
        style={{ height: 200, width: 200 }}
        src='https://i.imgur.com/WQcFuwz.png'
        alt='logo'
        className='logo'
      />
      <h1 className='title-heading'>
        <header>LIVE MART</header>
      </h1>
      <h3>WELCOME</h3>
      {renderRole()}
    </div>
  );
}

export default Options;
export {shopid}