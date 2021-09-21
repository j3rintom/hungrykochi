import React from "react";
import "../../App";
import "./Signup.css";
import Background from "../../assets/background.svg";
function Signup() {
  return (
    <div className="signup-container">
      <div className="form">
        <img src={Background} alt="" />
        <h2>Sign Up</h2>
        <form action="">
          <label htmlFor="">
            Full Name :<input type="text" />
          </label>
          <label htmlFor="">
            Date Of Birth : <input type="date" />
          </label>
          <label htmlFor="">
            Gender :
            <select>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="transgener">Transgender</option>
            </select>
          </label>
          <label htmlFor="">
            Address : <input type="text" />
          </label>
          <label htmlFor="">
            Email : <input type="email" />
          </label>
          <label htmlFor="">
            Phone Number : <input type="text" />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
