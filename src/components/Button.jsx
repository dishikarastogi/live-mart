import React from "react"

function Button(props){
    return <button className="btn btn-dark btn-lg user-button" type="button">{props.action}</button>
}
export default Button