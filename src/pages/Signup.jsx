import React from "react";
import "../styles/auth.css";
import { logo } from "../assets";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div className="auth-cnt">
        <div className="logo-cnt">
          <img src={logo} alt="Netflix Logo" />
        </div>

        <div className="sgn-box-cnt">
          <div className="sgn-cnt">
            <h1>Sign Up</h1>

            <div className="ip-cnt">
              <input type="text" placeholder="Username" />
            </div>

            <div className="ip-cnt">
              <input type="email" placeholder="Your email address" />
            </div>

            <div className="ip-cnt">
              <input type="password" placeholder="Create a password" />
            </div>

            <div className="ip-cnt">
              <input type="password" placeholder="Confirm password" />
            </div>
            <button type="submit">Sign Up</button>

            <div className="au">
            <span>Already a user?</span>
            <Link to="/login">LOGIN</Link>
           </div>  
          </div>

           
        </div>
      </div>

      {/* background image */}
      <div className="bg-img"></div>
    </div>
  );
};
export default Signup;
