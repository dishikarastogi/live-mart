import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "../utils/axios";

function OptionsSocial({ role, userId, setShopId }) {
  let history = useHistory();
  const getShopDetail = useCallback(() => {
    axios
      .get("/retailer/getShopDetail", {
        params: {
          user_id: userId,
        },
      })
      .then(({ data }) => {
        console.log("RESPONSE ==== : ", data);
        if (data.id) {
          setShopId(data.id);
        }
        history.push("/retailer");
      })
      .catch((err) => {
        console.log("ERROR: ====", err);
      });
  }, [history, userId, setShopId]);

  useEffect(() => {
    if (role === "Customer") {
      history.push("/customer");
    } else if (role === "Retailer") {
      return getShopDetail();
    } else if (role === "Wholesaler") {
      history.push("/wholesaler");
    }
  }, [getShopDetail, history, role]);
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
    </div>
  );
}

export default OptionsSocial;
