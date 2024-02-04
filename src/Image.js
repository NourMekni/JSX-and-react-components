import React from "react";
import object from "./product";
let x=object.path;
const Image=(object)=>{
   return(
   <>
    <img src={x}></img>
   </>);
}

export default Image;