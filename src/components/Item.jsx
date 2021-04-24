import React from "react"
function Item(props){
    return <div className="col-12 col-md-6 col-lg-4">
    <div style={{marginTop:20}} className="card">
        <img style={{height:157.656}} className="card-img-top" src={props.source} alt={props.name}/>
        <div className="card-body">
            <h4 className="card-title"><a href={"#"+props.name} title="View Product">{props.name}</a></h4>
        </div>
    </div>
</div>
}
export default Item