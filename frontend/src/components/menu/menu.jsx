import React, { useEffect, useState } from "react";
import "./menu.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  let navigate = useNavigate();
  const [fullOTP, setFullOTP] = useState("");

  useEffect(() => {
    // Retrieve currency number from local storage
    const currency = localStorage.getItem("fullOTP");
    if (currency) {
      setFullOTP(currency);
    }
  }, []);

  const handlesubmit = () => {
    console.log("this is wotking");
    navigate("/Eform");
  };

  return (
    <div className="menu-container">
      <div className="head">
        <div>your currency ID : {fullOTP}</div>
        <br />
        <div>Select the product you wanna use</div>
      </div>
      <div className="middle">
        <div className="img1">
          <img
            className="img"
            src="postasproject.jpeg"
            alt=""
            onClick={handlesubmit}
          />

          <div>
            <h3>Click on image for the best complaint form ever</h3>
            <br />
            <br />
            <h6>
              The objective of Post Box Project is to search, verify, and
              register the issues or problems related to civic, hygiene, and
              public services.
            </h6>
          </div>
        </div>
        <div className="img1">
          <img className="img" src="Get-Together-Project.jpeg " alt="" />

          <div>
            <h3>Click on image to get access to the best community</h3>
            <br />
            <br />
            <h6>
              Though India became a free nation on August 15, 1947, it declared
              itself a Sovereign, Democratic and Republic state with the
              adoption of the Constitution on January 26, 1950.
            </h6>
          </div>
        </div>
        <div className="img1">
          <img className="img" src="Search-Engine-Project.jpeg" alt="" />

          <div>
            <h3>Click on image to play a 3D-immerersive Game based on Banglore</h3>
            <br />
            <br />
            <h6>
              An innovative hide-and-seek game and puzzle in anime and handbook
              format, to be crafted and drafted at very affordable price.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
