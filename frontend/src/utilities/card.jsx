import { Button, Card } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CardComponent = () => {

    let navigate=useNavigate();

    const handlesubmit=()=>{console.log("this is wotking");
        navigate("/Eform")

}


  return (
    <div>
    <Card
      style={{
        height: "444px",
        width: "250px",
        backgroundColor: "black",
        
      }}
      onClick={handlesubmit}
    >
      <div className="img">
        <img src="postasproject.jpeg" style={{ height: "445px", width: "250px" }} />
      </div>
     
    </Card>
    </div>
  );
};

export default CardComponent;
