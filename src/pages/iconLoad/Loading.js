import React from "react";
import classnames from "classnames/bind";
import styles from "./leduc-module.scss"; // Import file SCSS nếu có

const cx = classnames.bind(styles);

function YourComponent() {
  return (
    <div className={cx("boxes")}>
      <div className={cx("box")}>
        <div className={cx("playcart")}></div>
        <div className={cx("playcart")}></div>
        <div className={cx("playcart")}></div>
        <div className={cx("playcart")}></div>
      </div>
      <div className={cx("box")}>
        <div className={cx("playcart")}></div>
        <div className={cx("playcart")}></div>
        <div className={cx("playcart")}></div>
        <div className={cx("playcart")}></div>
      </div>
      <div className={cx("box")}>
        <div className={cx("playcart")}></div>
        <div className={cx("playcart")}></div>
        <div className={cx("playcart")}></div>
        <div className={cx("playcart")}></div>
      </div>
      <div className={cx("box")}>
        <div className={cx("playcart")}></div>
        <div className={cx("playcart")}></div>
        <div className={cx("playcart")}></div>
        <div className={cx("playcart")}></div>
      </div>
    </div>
  );
}

export default YourComponent;
