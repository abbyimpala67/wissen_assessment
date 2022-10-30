import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "./assets/wissenLogo.png";
import "./style/styles.css";
import { UPDATE_USER } from "./actionTypes/actionsTypes";
import Home from "./Home";
const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [displaySuccessStatus, setSuccessDisplayStatus] = useState("none");
  const [displayFailureStatus, setFailureDisplayStatus] = useState("none");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckbox = (e) => {
    return e.target.checked ? setIsDisabled(false) : setIsDisabled(true);
  };

  const handleSubmit = () => {
    console.log("handle submit", email, password);
    axios
      .post(
        "https://reqres.in/api/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        alert("login successful");
        console.log("response", res);
        setSuccessDisplayStatus("block");
        setFailureDisplayStatus("none");
      })
      .catch((error) => {
        alert("invalid user");
        console.log("error", error);
        setSuccessDisplayStatus("none");
        setFailureDisplayStatus("block");
      });
  };
  console.log({ email, password });
  return (
    <div
      className="ui container centered card"
      style={{ marginTop: "10px", boxShadow: "none" }}
    >
      <div className="ui grid">
        <div className="ui form">
          <div className="ui image">
            <img src={logo} alt={"wissen"} />
          </div>
          <div className="field">
            <h4 className="ui header">Hello there, Sign in to continue</h4>
          </div>
          <div className="field">
            <label>Email</label>
            <input
              className="custom-input-text"
              type="text"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="Password" value={password} onChange={handlePassword} />
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" onChange={(e) => handleCheckbox(e)} />
              <label>
                By creating or logging into an account, you are agreeing with
                our
                <strong> Terms &amp; Conditions </strong> and{" "}
                <strong>Privacy Policies.</strong>
              </label>
            </div>
          </div>
          <div
            className="ui green message"
            style={{ display: displaySuccessStatus }}
          >
            Your login was successful
          </div>
          <div
            className="ui red message"
            style={{ display: displayFailureStatus }}
          >
            Invalid username or password
          </div>
          <button
            className="ui primary button custom-buttom"
            type="submit"
            onClick={handleSubmit}
            disabled={isDisabled}
          >
            Next
          </button>
          <div className="card" style={{ marginTop: "2em" }}>
            <div className="center aligned content">
              <strong>
                <a href="#">Signin with company SSO</a>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
