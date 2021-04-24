import React, { useEffect } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Button from "./Button";
import { Link } from "react-router-dom";
import axios from "../utils/axios";
import shopid from "./Options";
import ShopItemList from "./ShopItemList";

let itemList,price,quantity;
function Retailer() {
  const getShop = () => {
    axios
      .get("/retailer/getAllItems", {
        params: {
          shop_id: shopid,
        },
      })
      .then((res) => {
        console.log("RESPONSE ==== : ", res);
        debugger;
      })
      .catch((err) => {
        console.log("ERROR: ====", err);
      });
  };
  useEffect(() => {
    getShop();
  }, []);

  return (
    <div>
      <section id='toTheTop'>
        <Navigation />
      </section>

      <div style={{ marginTop: 120, marginBottom: 140 }}>
        <Link to='/add'>
          <Button action='Add Products' />
        </Link>
        <Link to='/transaction'>
          <Button action='Customer Transactions' />
        </Link>
        <Link to='/create-shop'>
          <Button action='Create a shop' />
        </Link>
        <Link to='/cart'>
          <Button action='Place a Order' />
        </Link>
        <Link to='/feedback'>
          <Button action='Feedback/Queries' />
        </Link>
      </div>

      <div>
        <h2 className='big-heading'>Shop</h2>
        <ShopItemList itemlist={itemList} price={price} quantity={quantity} />
      </div>
      {/* Footer Section */}
      <section id='toContact'>
        <Footer />
      </section>
    </div>
  );
}
export default Retailer;
export {price, quantity}
