import React from "react";

function CustomerOrders(){
    return <div className="container">
    <div className="card">
        <header className="card-header"> My Orders / Tracking </header>
        <ul className="row">
                <li className="col-md-4">
                    <figure className="itemside mb-3">
                        <div className="aside"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1571751108/Ecommerce/laptop-dell-xps-15-computer-monitors-laptops.jpg" className="img-sm border"/></div>
                        <figcaption className="info align-self-center">
                            <p className="title">Dell Laptop with 500GB HDD  8GB RAM</p> <span className="text-muted">$950 </span>
                        </figcaption>
                    </figure>
                </li>
                <button className="btn btn-dark btn-md-4">Cancel Order</button>
            </ul>
         
        <div className="card-body">
            <h6>Order ID: OD45345345435</h6>
            <div className="card">
                <div className="card-body row">
                    <div className="col"> <strong>Estimated Delivery time:</strong> 29 nov 2019 </div>
                    <div className="col"> <strong>Shipping BY:</strong>  BLUEDART, | <i className="fa fa-phone"></i> +1598675986  </div>
                    <div className="col"> <strong>Status:</strong>  Picked by the courier </div>
                    <div className="col"> <strong>Tracking #:</strong>  BD045903594059  </div>
                </div>
            </div>
        
            
            <a href="#" className="btn btn-warning" data-abc="true"> <i className="fa fa-chevron-left"></i> Back to orders</a>
        </div>
    </div>
</div>
}
export default CustomerOrders