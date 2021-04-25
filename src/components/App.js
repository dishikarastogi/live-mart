import React, { useEffect, useState } from "react";
import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";
import Otp from "./Otp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Customer from "./Customer";
import Retailer from "./Retailer";
import Wholesaler from "./Wholesaler";
import Options from "./Options";
import Add from "./Add";
import Transaction from "./Transaction";
import Cart from "./Cart";
import CustomerCart from "./CustomerCart";
import Feedback from "./Feedback";
import Role from "./Role";
import OtpforMedia from "./OtpforMedia";
import SubCategory from "./Subcategory";
import CustomerOrders from "./CustomerOrders";
import TypeofUser from "./TypeofUser";
import CreateShop from "./CreateShop";
import OptionsSocial from "./OptionsSocial";
import WholesalerCreateShop from "./WholesalerCreateShop";


function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  const [location, setLocation] = useState({ latitude: 28.5702617, longitude: 78.56846949999999 });
  const [role, setRole] = useState(localStorage.getItem("role") || "customer");
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [shopId, setShopId] = useState(localStorage.getItem("shopId"));

  useEffect(() => {
    const options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation(position.coords);
    }, (err) => {
      console.error('No location.', err);
    }, options);
  }, [setLocation]);


  useEffect(() => {
    const items = { location, role, userId, shopId };
    for (const property in items) {
      if (items[property]) {
        localStorage.setItem(property, typeof items[property] === "object" ? JSON.stringify(items[property]) : items[property]);
      }
    }
  }, [location, role, userId, shopId]);

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact>
            <Login role={role} setUserId={setUserId} setRole={setRole} showError={updateErrorMessage} updateTitle={updateTitle} />
          </Route>
          <Route path='/signup' exact={true}>
            <Signup role={role} setRole={setRole} showError={updateErrorMessage} updateTitle={updateTitle} />
          </Route>
          <Route path='/otp' exact component={Otp} />
          <Route path='/otpmedia' exact component={OtpforMedia} />
          <Route path='/options' exact>
            <Options setShopId={setShopId} role={role} userId={userId} />
          </Route>
          <Route path='/customer' exact>
            <Customer userId={userId}/>
          </Route>
          <Route path='/retailer' exact>
            <Retailer shopId={shopId} />
          </Route>
          <Route path='/wholesaler' exact component={Wholesaler} />
          <Route path='/add' exact>
            <Add shopId={shopId} />
          </Route>
          <Route path='/transaction' exact component={Transaction} />
          <Route path='/cart' exact>
            <Cart location={location} userId={userId}/>
          </Route>
          <Route path='/customercart' exact>
            <CustomerCart location={location} userId={userId}/>
          </Route>
          <Route path='/role' exact component={Role} />
          <Route path='/options-social' exact>
            <OptionsSocial setShopId={setShopId} userId={userId} />
          </Route>
          <Route path='/subcategory' exact component={SubCategory} />
          <Route path='/custorders' exact component={CustomerOrders} />
          <Route path='/type-of-user' exact>
            <TypeofUser role={role} setUserId={setUserId} setRole={setRole} />
          </Route>
          <Route path='/create-shop' exact>
            <CreateShop setShopId={setShopId} setUserId={setUserId} userId={userId} role={role} location={location} />
          </Route>
          <Route path='/wholesaler-create-shop' exact>
            <WholesalerCreateShop setShopId={setShopId} setUserId={setUserId} userId={userId} role={role} location={location} />
          </Route>
          <Route path='/feedback' exact component={Feedback} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
