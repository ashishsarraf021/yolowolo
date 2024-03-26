import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import OTPInput from "../../utilities/OtpInput";
import axios from "axios";
import "./home.css";

const Home = () => {
  const [fullOTP, setFullOTP] = useState(0);

  let naivgate = useNavigate();

  async function handlesubmit() {
    console.log("this button");
    try {
      console.log(fullOTP);
      let resp = await axios.post(
        "https://yolowolo.onrender.com/api/v1/create",
        // "http://localhost:8000/api/v1/create",
        {
          currency: String(fullOTP),
        }
      );
      localStorage.setItem("fullOTP", JSON.stringify(fullOTP));
      console.log(resp);
    } catch (error) {
      console.log(error);
    }

    naivgate("/Menu");
  }
  function handleGetOTP(e) {
    console.log(e, "otp here ---------");
    let temp = e.toString();
    console.log(temp);
    if (temp.length === 9) {
      setFullOTP(e);
    }
  }
  return (
    <div className="home-container">
      <div className="img-container">
        <img src="yolowolo.jpeg" className="img" />
      </div>
      <div className="content-container">
        <h4 style={{ textAlign: "center" }}>
          Sustainable Governence, Environment and Technology
        </h4>

        <div className="input-container">
          <div>
            <h5 style={{ textAlign: "center" }}>
              Please, Enter the 9-Digit Serial Number written on the currency
              note of India
            </h5>
          </div>
          <br />
          <div className="otp">
            <OTPInput getOTP={handleGetOTP} />
          </div>
          <br />
          <div
           className="button">
            <Button
             
              variant="contained"
              color="primary"
              onClick={handlesubmit}
            >
              Click me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
