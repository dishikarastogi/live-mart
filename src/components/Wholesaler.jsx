import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Button from "./Button"
function Wholesaler(){
    return <div>
     <section id="toTheTop">
    <Navigation/>
</section>
        <div style={{marginTop: 120}}>
        <h2 className="big-heading">Welcome!!</h2>
            <Link to="/add">
              <Button action="Add Products"/>
            </Link>
            <Link to="/transaction">
            <Button action="Retailer Transactions"/>
            </Link>
            <Link to="/wholesaler-create-shop">
            <Button action="Create a Shop"/>
            </Link>
            
        </div>
{/* Footer Section */}
<section style={{marginTop: 140}} id="toContact">
<Footer/>
</section>
</div>
}
export default Wholesaler