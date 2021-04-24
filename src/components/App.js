import React, { useState } from "react";
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
import Feedback from "./Feedback";
import Role from "./Role";
import OtpforMedia from "./OtpforMedia";
import SubCategory from "./Subcategory";
import CustomerOrders from "./CustomerOrders";
import TypeofUser from "./TypeofUser";
import CreateShop from "./CreateShop";
import OptionsSocial from "./OptionsSocial";

function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact>
            <Login showError={updateErrorMessage} updateTitle={updateTitle} />
          </Route>
          <Route path='/signup' exact={true}>
            <Signup showError={updateErrorMessage} updateTitle={updateTitle} />
          </Route>
          <Route path='/otp' exact component={Otp} />
          <Route path='/otpmedia' exact component={OtpforMedia} />
          <Route path='/options' exact component={Options} />
          <Route path='/customer' exact component={Customer} />
          <Route path='/retailer' exact component={Retailer} />
          <Route path='/wholesaler' exact component={Wholesaler} />
          <Route path='/add' exact component={Add} />
          <Route path='/transaction' exact component={Transaction} />
          <Route path='/cart' exact component={Cart} />
          <Route path='/role' exact component={Role} />
          <Route path='/options-social' exact component={OptionsSocial} />
          <Route path='/subcategory' exact component={SubCategory} />
          <Route path='/custorders' exact component={CustomerOrders} />
          <Route path='/type-of-user' exact component={TypeofUser} />
          <Route path='/create-shop' exact component={CreateShop} />
          <Route path='/feedback' exact component={Feedback} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
