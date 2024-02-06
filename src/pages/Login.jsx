import React from "react";
import "../styles/auth.css";
import { auth, logo } from "../assets";

const Login = () => {
  return (
    <div>
      <div className="auth-cnt">
        {/* background image */}
        <div className="bg">
          <img src={auth} alt="Background Image" />
        </div>

        {/* logo container */}
        <div className="logo-cnt">
          <img src={logo} alt="Netflix" />
        </div>
      </div>
    </div>
  );
};

export default Login;
