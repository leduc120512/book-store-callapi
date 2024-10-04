import React from "react";
import styles from "./nav-module.scss"; // Đúng cách import styles từ module SCSS
import classnames from "classnames/bind";
import imgqr from "./d91264e165ed6facc6178994d5afae79.png";
import Buttonn from "../../../Cart-buggest/button";
const cx = classnames.bind(styles);

function Sidebar() {
  return (
    <div className={cx("navigation")}>
      {" "}
      {/* Sử dụng cx() để áp dụng các lớp CSS */}
      <ul>
        {" "}
        <li>
          <a href="Friend">Sản phẩm</a>
        </li>
        <li>
          <a href="">Trang chủ</a>
        </li>
        <li>
          <a href="/Introduce">Giới thiệu</a>
        </li>
        <div className={cx("dropdown")}>
          <li>
            <a href="#">Liên hệ</a>
          </li>
          <div className={cx("dropdown-content")}>
            <img className={cx("dropdown-img")} src={imgqr} />
            <div className={cx("dropdown-duc")}>
              <Buttonn className={cx("dropdown-btn")} primary>
                Facebook
              </Buttonn>

              <Buttonn className={cx("dropdown-btn")} primary>
                Google
              </Buttonn>
            </div>
          </div>
        </div>
        <li>
          <a href="Cart">Giỏ Hàng</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
