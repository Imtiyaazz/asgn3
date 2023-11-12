import React from "react";

export const Watch =({title,category,price,desc})=>{
    return(
        <div className="child">
        <h2> {title} </h2>
        <h3> {category} </h3>
        <h1>Rs. {price} </h1>
        <p> {desc} </p>
        </div>
    )
}