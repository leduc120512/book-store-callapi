import classnames from "classnames/bind";
import styles from "./LoginN-module.scss";
import React, { useState, useEffect } from "react";
import Buttonn from "../../../../Cart-buggest/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const cx = classnames.bind(styles);
const API_URL = "http://localhost:3000/posts"; // Ensure this URL is correct

function LogIn() {
  const [data, setData] = useState({ username: "", password: "" });
  const [inputError, setInputError] = useState(false);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const { username, password } = data;

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      console.log("User is already logged in with token:", token);
      navigate("/"); // Navigate to dashboard if already logged in
    }
  }, [navigate]);

  const checkUser = async () => {
    try {
      console.log("API_URL:", API_URL); // Debugging log
      console.log("Data sent:", { username, password }); // Debugging log

      const response = await axios.post(API_URL, { username, password });
      const { token } = response.data;

      if (token) {
        localStorage.setItem("authToken", token);
        console.log("Login successful, token received:", token);
        navigate("/"); // Navigate to dashboard after successful login
        setLoginError("");
      } else {
        console.log("Wrong email or password");
        setLoginError("Sai email hoặc mật khẩu");
      }
    } catch (error) {
      console.error("Failed to login", error);
      setLoginError("Có lỗi xảy ra. Vui lòng thử lại.");
    }
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputError(!username || !password); // Check if input fields are empty
    if (username && password) {
      checkUser();
    }
  };

  return (
    <div className={cx("Content_LogIn-input")}>
      <p className={cx("Content_LogIN")}>Đăng Nhập</p>
      <div className={cx("Content_LogOUT-mk")}>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Số điện thoại hoặc email"
              name="username"
              value={username}
              onChange={changeHandler}
              className={inputError && !username ? "error" : ""}
              required
            />
            {inputError && !username && (
              <span className="error-message">
                Hãy nhập số điện thoại hoặc email
              </span>
            )}
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Mật khẩu"
              name="password"
              value={password}
              onChange={changeHandler}
              className={inputError && !password ? "error" : ""}
              required
            />
            {inputError && !password && (
              <span className="error-message">Hãy nhập mật khẩu</span>
            )}
          </div>
          {loginError && <span className="error-message">{loginError}</span>}
          <Buttonn
            className={cx("Content_LogOUT-mk-button")}
            type="submit"
            primary
            more
          >
            Đăng Nhập
          </Buttonn>
        </form>
      </div>
      <div className={cx("Content_LogOUT_QUEN")}>
        <p className={cx("Content_LogOUT_QUENMK")}>Quên Mật Khẩu</p>
        <p className={cx("Content_LogOUT_QUENMK")}>Đăng Nhập Với SmS</p>
      </div>
      <div className={cx("element")}>
        <div className={cx("border-segment")}></div>
        <div className={cx("login-text")}>Hoặc</div>
        <div className={cx("border-segment")}></div>
      </div>
      <div className={cx("Content_LogOUT_BUtton")}>
        <Buttonn className={cx("Content_LogOUT_BUtton1")} primary>
          <p>Facebook</p>
        </Buttonn>
        <Buttonn className={cx("Content_LogOUT_BUtton1")} primary>
          <p>Google</p>
        </Buttonn>
      </div>
      <div className={cx("Content_LogOUT_chuabiet")}>
        <p className={cx("Content_LogOUT_text1")}>Bạn đến C2111oJu?</p>
      </div>
    </div>
  );
}

export default LogIn;
