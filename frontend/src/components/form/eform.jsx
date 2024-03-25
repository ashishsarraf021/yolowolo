import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  Card,
  CardContent,
  TextField,
  Snackbar,
} from "@mui/material";
import RoundedDiv from "../../utilities/roundeddiv";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const TextAreaWithBackground = () => {
    let naivgate=useNavigate()
  const [id1, setId1] = useState("");
  const [id2, setId2] = useState("");
  const [id3, setId3] = useState("");
  const [id4, setId4] = useState("");
  const [id5, setId5] = useState("");
  const [id6, setId6] = useState("");
  const [id7, setId7] = useState("");
  const [id8, setId8] = useState("");
  const [id9, setId9] = useState("");
  const [id10, setId10] = useState("");
  const [id11, setId11] = useState("");
  const [id12, setId12] = useState("");
  const [fullOTP, setFullOTP] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    // Handle submission logic here
    console.log(formData);
    try {
      let resp = await axios.post("http://localhost:8000/api/v1/save", {
        currency: fullOTP,
        "what really happend": id1,
        "how do you feel now": id2,
        "how may we help you": id3,
        "how we can make it better": id4,
        "are you happy": id10,
        "are you upset": id11,
        "are you ready": id12,
        "first name": id5,
        "middle name": id6,
        "last name": id7,
        "email address": id8,
        "phone number": id9,
      });
      console.log(resp);
    } catch (error) {}
    setOpenSnackbar(true);
    setIsModalOpen(false); // Close the modal after submission
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    localStorage.clear();
    naivgate("/");
  };

  useEffect(() => {
    if (localStorage.getItem("fullOTP")) {
      setFullOTP(JSON.parse(localStorage.getItem("fullOTP")));
    }
  }, []);
  console.log(fullOTP, "rounded div k upar");
  return (
    <div
      style={{
        backgroundColor: "#f7f8f3",
        width: "50%",
        minHeight: "100vh",
        padding: "30px",
        marginLeft: "325px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            // marginTop: "15px"
          }}
        >
          #post #box #project #
        </div>
        <div
          style={{
            marginTop: "3px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>DATE AND TIME:</span>
          <span style={{ marginLeft: "5px" }}>
            {new Date().toLocaleString()}
          </span>
          <span style={{ marginLeft: "20px" }}>@YOLO &lt;/&gt; WOLO</span>
        </div>
      </div>
      <hr
        style={{
          borderTop: "1px solid black;",
        }}
      />
      <br />
      <div>
        <div
          style={{
            fontSize: "18px",
          }}
        >
          What Really Happend?
        </div>

        <br />
        <textarea
          style={{
            height: "120px",
            width: "96%",
            backgroundColor: "#f7f8f3",
          }}
          value={id1}
          onChange={(e) => setId1(e.target.value)}
        >
          {id1}
        </textarea>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "380px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "18px",
                }}
              >
                What Really Happend?
              </div>

              <br />
              <textarea
                style={{
                  height: "120px",
                  width: "96%",
                  backgroundColor: "#f7f8f3",
                }}
                value={id2}
                onChange={(e) => setId2(e.target.value)}
              ></textarea>
            </div>
            <div>
              <div
                style={{
                  fontSize: "18px",
                }}
              >
                What Really Happend?
              </div>

              <br />
              <textarea
                style={{
                  height: "120px",
                  width: "96%",
                  backgroundColor: "#f7f8f3",
                }}
                value={id3}
                onChange={(e) => setId3(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "40px",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  marginLeft: "138px",
                }}
              >
                {" "}
                <span>yes</span>
                <span
                  style={{
                    marginLeft: "30px",
                  }}
                >
                  no
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>Are u ready?</div>
              <div
                style={{
                  marginLeft: "60px",
                }}
              >
                <input
                  type="radio"
                  id="yes"
                  name="inputReady1"
                  value={id10}
                  onChange={() => setId10("yes")}
                />
                <input
                  type="radio"
                  id="no"
                  name="inputReady1"
                  value={id10}
                  onChange={() => setId10("no")}
                  style={{ marginLeft: "30px" }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>Are u ready?</div>
              <div
                style={{
                  marginLeft: "60px",
                }}
              >
                <input
                  type="radio"
                  id="yes"
                  name="inputReady2"
                  value={id11}
                  onChange={() => setId11("yes")}
                />
                <input
                  type="radio"
                  id="no"
                  name="inputReady2"
                  value={id11}
                  onChange={() => setId11("no")}
                  style={{ marginLeft: "30px" }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>Are u ready?</div>
              <div
                style={{
                  marginLeft: "60px",
                }}
              >
                <input
                  type="radio"
                  id="yes"
                  name="inputReady3"
                  value={id12}
                  onChange={() => setId12("yes")}
                />
                <input
                  type="radio"
                  id="no"
                  name="inputReady3"
                  value={id12}
                  onChange={() => setId12("no")}
                  style={{ marginLeft: "30px" }}
                />
              </div>
            </div>
            <div>Your email address and signature</div>
            <div>
              <img
                src="whilelogo.png"
                alt=""
                style={{
                  height: "220px",
                  width: "240px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {fullOTP
                .toString()
                .split("")
                .map((digit, index) => (
                  <RoundedDiv key={index}>{digit}</RoundedDiv>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            fontSize: "18px",
          }}
        >
          What Really Happend?
        </div>

        <br />
        <textarea
          style={{
            height: "120px",
            width: "96%",
            backgroundColor: "#f7f8f3",
          }}
          value={id4}
          onChange={(e) => setId4(e.target.value)}
        ></textarea>
      </div>

      <br />

      <Button
        variant="contained"
        style={{ marginLeft: "286px", marginTop: "20px" }}
        onClick={handleModalOpen}
      >
        Submit
      </Button>

      {/* Modal for the pop-up card */}
      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CardContent>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <TextField
                label="First Name"
                name="name"
                fullWidth
                margin="normal"
                value={id5}
                onChange={(e) => setId5(e.target.value)}
              />
              <TextField
                label="Middle Name"
                name="name"
                value={id6}
                onChange={(e) => setId6(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Last Name"
                name="name"
                value={id7}
                onChange={(e) => setId7(e.target.value)}
                fullWidth
                margin="normal"
              />
            </div>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={id8}
              onChange={(e) => setId8(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Phone Number"
              name="name"
              value={id9}
              onChange={(e) => setId9(e.target.value)}
              fullWidth
              margin="normal"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </CardContent>
        </Card>
      </Modal>
      {/* Snackbar for notification */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000} 
        onClose={handleCloseSnackbar}
        message="You are Super Savy and we are happy to be connected with you. 😊"
      />
    </div>
  );
};

export default TextAreaWithBackground;
