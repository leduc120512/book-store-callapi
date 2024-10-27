import classnames from "classnames/bind";
import styles from "./lOGIN-LOGOUT-MODULE.SCSS";
import React from "react";
import { Outlet } from "react-router-dom";

const cx = classnames.bind(styles);

function Login_Logut() {
  return (
    <div className={cx("Main_LogOut")}>
      <div className={cx("header_logOut")}>
        <div>
          <p className={cx("header_logOut1")}>Đăng Nhập</p>
        </div>
        <p className={cx("header_logOut2")}>Bạn Cần Giúp Đỡ Gì?</p>
      </div>
      <div className={cx("Content_LogOUT")}>
        <Outlet />
      </div>
    </div>
  );
}

export default Login_Logut;
