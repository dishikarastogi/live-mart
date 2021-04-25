/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{ useEffect, useState } from "react";
import Item from "./Item";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import axios from "../utils/axios"
import CustomerItemList from "./CustomerItemList";

function Customer({userId}) {
    //const list= "Vegetables";
    const [items, setItems] = useState([]);

    const getItemsByCategory = () => {
      axios
        .get("/customer/getAllItems")
        .then(({ data }) => {
          console.log("RESPONSE ==== : ", data);
          setItems(data);
          console.log(userId);
        })
        .catch((err) => {
          console.log("ERROR: ====", err);
        });
    };
    useEffect(() => {
        getItemsByCategory();
    },[]);


    return <div>
    <section id="toTheTop">
    <nav style={{height:150}} className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <a className="navbar-brand" href="/customer"><img style={{height: 200, width: 200}} src="https://i.imgur.com/hEvnbb8.png" alt= "logo" className="logo"/></a>
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
                <Link to="/custorders">
                <li className="nav-item navitem">
                    <a className="nav-link navcolor">My orders</a>
                </li>
                </Link>
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
    </section>
    <div className="container">
        <div className="row">
            <div className="col">
         
  <div className="container-fluid">

    <form className="d-flex">
  
      <input className="form-control my-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-success" type="submit">Search</button>

    </form>
  </div>


            </div>
        </div>
    </div>
    <div className="container">
        <div style={{marginBottom: 40}} className="row">
            <div className="col-12 col-sm-3">
                <div style={{marginTop:20}} className="card bg-light mb-3">
                    <div className="card-header bg-primary text-white text-uppercase"><i className="fa fa-list"></i> Categories</div>
                    <ul className="list-group category_block">
                        <li className="list-group-item"><a href="#Vegetables">Vegetables</a></li>
                        <li className="list-group-item"><a href="#Readymade">Readymade</a></li>
                        <li className="list-group-item"><a href="#Fruits">Fruits</a></li>
                        <li className="list-group-item"><a href="#Grocery">Grocery</a></li>
                        <li className="list-group-item"><a href="#BeautyandHygiene">Beauty and Hygiene</a></li>
                    </ul>
                </div>

            </div>
            <div className="col">
                <div className="row">
                    <Item
                        source="https://tinyurl.com/vegliv"
                        name="Vegetables"
                    />
                    <Item
                        source="https://tinyurl.com/readyliv"
                        name="Readymade"
                    />
                    <Item
                        source="https://tinyurl.com/fruitliv"
                        name="Fruits"
                    />
                    <Item
                        source="https://tinyurl.com/grocliv"
                        name="Grocery"
                    />
                    <Item
                        source="https://i.insider.com/5dcadd667eece52e5d579826?width=1136&format=jpeg"
                        name="Beauty and Hygiene"
                    />
                    
                </div>
            </div>
    
        </div>
        <CustomerItemList items={items} userid={userId}/>

        {/* <section id="Vegetables">
            <h3 className="item-sub">Vegetables</h3>
            <Link to="/subcategory">
            <Item
                source="https://tinyurl.com/grocliv"
               
                name="Onion"
            />
            </Link>
        </section>
        <section id="Readymade">
            <h3 className="item-sub">Readymade</h3>
        </section>
        <section id="Fruits">
            <h3 className="item-sub">Fruits</h3>
        </section>
        <section id="Grocery">
            <h3 className="item-sub">Grocery</h3>
        </section>
 */}
    </div>
    
    {/* Footer Section */}
    <section id="toContact">
        <Footer/>
    </section>
    </div>
}
export default Customer
