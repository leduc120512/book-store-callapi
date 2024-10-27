import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Buttonn from "../../../Cart-buggest/button";
import classnames from "classnames/bind";
import styles from "./LouOut-module.scss";

const cx = classnames.bind(styles);
const API_URL = "http://localhost:3000/posts";

function LogOut() {
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setInputError(!phoneOrEmail || !password);

    if (!phoneOrEmail || !password) {
      return;
    }

    try {
      const response = await fetch(API_URL);
      const users = await response.json();

      const user = users.find(
        (user) =>
          (user.email === phoneOrEmail || user.phone === phoneOrEmail) &&
          user.password === password
      );

      if (user) {
        console.log("Đăng nhập thành công:", user);
        navigate("/", { state: { user } });
      } else {
        console.log("Đăng nhập thất bại");
        setLoginError(true);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setInputError(true);
    }
  };

  return (
    <div className={cx("Content_LogOUT-input")}>
      <p className={cx("Content_LogIN")}>Đăng Nhập</p>
      <div className={cx("Content_LogOUT-mk")}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Số điện thoại hoặc email"
            value={phoneOrEmail}
            onChange={(e) => setPhoneOrEmail(e.target.value)}
            className={inputError && !phoneOrEmail ? "error" : ""}
          />
          {inputError && !phoneOrEmail && (
            <span className="error-message">
              Hãy nhập số điện thoại hoặc email
            </span>
          )}
        </div>
        <div className="input-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputError && !password ? "error" : ""}
          />
          {inputError && !password && (
            <span className="error-message">Hãy nhập mật khẩu</span>
          )}
          {loginError && (
            <span className="error-message">Sai tài khoản hoặc mật khẩu</span>
          )}
          <span
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </span>
        </div>
        <Buttonn
          className={cx("Content_LogOUT-mk-button")}
          onClick={handleLogin}
          disabled={!phoneOrEmail || !password}
          primary
          more
        >
          Đăng Nhập
        </Buttonn>
      </div>
      <div className={cx("Content_LogOUT_QUEN")}>
        <Link className={cx("Content_LogOUT_textz")} to="LogIn">
          <p className={cx("Content_LogOUT_QUENMK")}>Quên Mật Khẩu</p>
        </Link>
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
        <p className={cx("Content_LogOUT_text1")}>Bạn đến CoJu?</p>
      </div>
    </div>
  );
}

export default LogOut;
