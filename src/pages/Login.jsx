import React from "react";
import "../styles/auth.css";
import { logo } from "../assets";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="auth-cnt">
        <div className="logo-cnt">
          <img src={logo} alt="Netflix" />
        </div>
        <div className="auth-box-cnt">
          <div className="auth-wrap">
            <h1>Sign In</h1>
            <div className="inp-cnt">
              <input type="email" placeholder="Email or phone number" />
            </div>

            <div className="inp-cnt">
              <input type="password" placeholder="Password" />
            </div>
            <button>Sign In</button>
            <div className="fp">
              <a href="">Forgot password?</a>
            </div>
             
             <div className="ntn">
              <span>New to Netflix?</span>
              <Link to="/signup">Sign up now.</Link>
             </div>
          </div>
        </div>
      </div>

      {/* background image */}
      <div className="bg-img"></div>
    </div>
  );
};

export default Login;
