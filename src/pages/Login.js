import React from "react";
import "../styles/Login.css";
import logo from "../images/RBIM_LOGO.png";
const Login = () => {
  return (
    <div className="Login">
      <form action="" className="Login__form">
        <div className="Login__logo--container">
          <img src={logo} alt="logo" />
        </div>
        <div class="login__form__section">
          <div className="Login__username">
            <h3 className="Login__username__text">USERNAME</h3>
            <input
              placeholder="Email"
              type="text"
              className="Login__username__input"
            />
          </div>
          <div className="Login__password">
            <h3 className="Login__password__text">PASSWORD</h3>
            <input
              placeholder="Password"
              type="password"
              className="Login__password__input"
            />
          </div>
          <div className="Login__checkbox">
            <input type="checkbox" className="Login__checkbox__input" />
            <h4 className="Login__checkbox__text">Remember me</h4>
          </div>
          <button className="Login__button">LOGIN</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
