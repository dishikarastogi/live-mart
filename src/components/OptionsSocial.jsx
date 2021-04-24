import React from "react";
import { roleData } from "./Checkbox";
import { useHistory } from "react-router-dom";
import axios from "../utils/axios";
import { userSocialId } from "./TypeofUser";

let shopid;
function OptionsSocial() {
  let history = useHistory();
  const getShopDetail = () => {
    debugger;
    axios
      .get("/retailer/getShopDetail", {
        params: {
          user_id: userSocialId.id,
        },
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

export default OptionsSocial;
export { shopid };
