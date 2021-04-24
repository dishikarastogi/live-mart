import React from "react"
function Footer(){
    return  <footer style={{height:250}} className="text-light">
    <div className="container">
        <div className="row">
            <div style={{paddingTop: 30}} className="col-md-6 col-lg-6 col-xl-6 footerCard">
                <h5>About</h5>
                <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"/>
                <p className="mb-0">
                    We, at LiveMART, bridge the gap between the customers and vendors. With just a click, you can now shop easy at anytime.   
                </p>
            </div>


            <div style={{paddingTop: 30}} className="col-md-6 col-lg-6 col-xl-6 footerCard">
                <h5>Contact</h5>
                <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"/>
                <ul className="list-unstyled">
                    <li><i className="fa fa-home mr-2"></i> LiveMART</li>
                    <li><i className="fa fa-envelope mr-2"></i> liveMART@gmail.com</li>
                    <li><i className="fa fa-phone mr-2"></i> 9922334455</li>
                </ul>
            </div>
            <div className="col-6 copyright mt-3">
                <p className="float-left">
                    <a href="#toTheTop">Back to top</a>
                </p>
                <p style={{textAlign:"center"}} className="text-right text-muted">Copyright &copy; 2021. All rights reserved.</p>
            </div>
        </div>
    </div>
</footer>
}
export default Footer