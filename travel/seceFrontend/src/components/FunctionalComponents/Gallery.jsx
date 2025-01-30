import React from "react";

const Gallery=(props)=>{
    var styling={
        textAlign: "center"
    }
    return(
        <div style={styling}>
            <h3>Here are different images to view!!</h3>
            <img src="/BYD-eBuses-in-Operation-in-Europe.png" alt="bus images"></img>
         
            <h3>Buses</h3>
        </div>
    );
};
export default Gallery;