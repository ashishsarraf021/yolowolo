import React from "react";

const RoundedDiv=({children})=>{
    return(
        <div className="round" style={{
            height:"25px",
            width:"25px",
            border: "1px solid black",
            borderRadius:"50px",

        backgroundColor: "#ccc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px", 
       }}>{children}</div>
    );
}

export default RoundedDiv;