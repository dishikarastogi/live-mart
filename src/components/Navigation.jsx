/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Link } from "react-router-dom";

function Navigation(){
    return <nav style={{height:150}} className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <a className="navbar-brand" href="#"><img style={{height: 200, width: 200}} src="https://i.imgur.com/hEvnbb8.png" alt= "logo" className="logo"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
                <li className="nav-item active navitem" aria-current="page">
                    <a className="nav-link navcolor" href="#toTheTop">Categories <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item navitem">
                    <Link to="/cart" className="nav-link navcolor">Cart</Link>
                </li>
                <li className="nav-item navitem">
                    <a className="nav-link navcolor" href="#toContact">Contact</a>
                </li>
               
            </ul>
        </div>
        <div>
        <form className="form-inline my-2 my-lg-0">
            <Link className="btn btn-success btn-sm ml-3" to="/cart">
                <i className="fa fa-shopping-cart"></i> Cart
                <span className="badge badge-light">3</span>
            </Link>
        </form>
        </div>
    </div>
</nav>
}
export default Navigation