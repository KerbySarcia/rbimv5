import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import logo from "../images/RBIM_LOGO.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { onLogIn } from "../features/Session";
import { TabTitle } from "../features/GeneralFunction";

const Login = () => {
  TabTitle("RBIM | Login");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData((previousValue) => ({ ...previousValue, [name]: value }));
  };
  useEffect(() => {
    axios.get("http://localhost:80/rbimv5/server/firstLoadWithNoDB.php");
  }, []);

  return (
    <div className="Login">
      <form action="" className="Login__form">
        <div className="Login__logo--container">
          <img src={logo} alt="logo" />
        </div>
        <div className="login__form__section">
          <div className="Login__username">
            <h3 className="Login__username__text">USERNAME</h3>
            <input
              onChange={(e) => handleChange(e)}
              name="username"
              value={data.username}
              placeholder="Username"
              type="text"
              className="Login__username__input"
            />
          </div>
          <div className="Login__password">
            <h3 className="Login__password__text">PASSWORD</h3>
            <input
              onChange={(e) => handleChange(e)}
              name="password"
              value={data.password}
              placeholder="Password"
              type="password"
              className="Login__password__input"
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              axios
                .post("http://localhost:80/rbimv5/server/login.php", data)
                .then((res) => {
                  if (res.data) {
                    dispatch(
                      onLogIn({
                        username: res.data.username,
                        password: res.data.password,
                        access_lvl: res.data.access_lvl,
                      })
                    );
                    res.data.access_lvl === 'on-site' ? 
                    navigate("/individual-records"):
                    navigate("/");
                  } else alert("Wrong Credentials");
                });
            }}
            className="Login__button"
          >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
