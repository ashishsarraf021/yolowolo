import React, { useRef } from "react";
import Card from "../../utilities/card";

const Menu = () => {
  return (
    <div
    style={{
        display: "flex",
        justifyContent: "center", 
        gap: "80px", 
        marginTop: "137px",
        align:"center",
    }}>
        <Card/>
        <Card/>
        <Card/>
        
    </div>
  );
};

export default Menu;
