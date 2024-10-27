import classnames from "classnames/bind";
import styles from "./confirm-module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Buttonn from "../../../../Cart-buggest/button";

const cx = classnames.bind(styles);

function Confirm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [inputError, setInputError] = useState(false);

  const handleLogin = () => {
    if (password && password === confirmPassword) {
      console.log("Đăng ký với mật khẩu:", password);
    } else {
      setInputError(true);
    }
  };

  return (
    <div className={cx("Content_LogIn_confirm-input")}>
      {" "}
      <p className={cx("Content_LogIN")}>Đă1ng Ký</p>
      <div className={cx("Content_LogOUT-mk")}>
        <div className="input-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Tạo mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={
              inputError && (!password || password !== confirmPassword)
                ? "error"
                : ""
            }
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Nhập lại mật khẩu"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={
              inputError && (!confirmPassword || password !== confirmPassword)
                ? "error"
                : ""
            }
          />{" "}
          <span
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}{" "}
          </span>
          {inputError && (!password || password !== confirmPassword) && (
            <span className="error-message">Mật khẩu khô1ng khớp</span>
          )}
          <span
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}{" "}
          </span>
        </div>

        <Buttonn
          className={cx("Content_LogOUT-mk-button")}
          onClick={handleLogin}
          disabled={
            !password || !confirmPassword || password !== confirmPassword
          }
          primary
          more
        >
          Đăng Ký
        </Buttonn>
      </div>
      <div className={cx("Content_LogOUT_QUEN")}>
        <p className={cx("Content_LogOUT_QUENMK")}>Quên Mật Khẩu</p>
        <p className={cx("Content_LogOUT_QUENMK")}>Đăng Nhập Với SmS</p>{" "}
      </div>
      <div className={cx("element")} class="element">
        <div className={cx("border-segment")} class="border-segment"></div>
        <div className={cx("login-text")} class="login-text">
          Hoặc
        </div>
        <div className={cx("border-segment")} class="border-segment"></div>
      </div>
      <div className={cx("Content_LogOUT_BUtton")}>
        <Buttonn className={cx("Content_LogOUT_BUtton1")} primary>
          {" "}
          <p>Facebook</p>
        </Buttonn>
        <Buttonn className={cx("Content_LogOUT_BUtton1")} primary>
          {" "}
          <p>Google</p>
        </Buttonn>
      </div>
      <div className={cx("Content_LogOUT_chuabiet")}>
        <p className={cx("Content_LogOUT_text1")}>Bạn đến CoJu?</p>
      </div>
    </div>
  );
}

export default Confirm;
