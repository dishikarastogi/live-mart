import React from "react"
import Button from "./Button"
import {BrowserRouter as Router, Link} from "react-router-dom"

function Home(){
    return <div>
         <img style={{height: 200, width: 200}} src ="https://i.imgur.com/WQcFuwz.png" alt= "logo" className="logo"/>
         <h2 className="big-heading">Welcome to</h2>
         <h1 className="title-heading"><header>LIVE MART</header></h1>
         <h3>Experience the best online delivery system</h3>
         <Link to="/login">
              <Button action="Login"/>
            </Link>
            <Link to="/signup">
            <Button action="Sign up"/>
            </Link>
    </div>
}
export default Home