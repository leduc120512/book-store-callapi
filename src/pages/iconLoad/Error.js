import React from "react";
import classnames from "classnames/bind";
import styles from "./leduc-module.scss"; // Import your SCSS file

const cx = classnames.bind(styles);

function TVComponent() {
  return (
    <div className={cx("main_wrapper")}>
      <div className={cx("main")}>
        <div className={cx("antenna")}>
          <div className={cx("antenna_shadow")}></div>
          <div className={cx("a1")}></div>
          <div className={cx("a1d")}></div>
          <div className={cx("a2")}></div>
          <div className={cx("a2d")}></div>
          <div className={cx("a_base")}></div>
        </div>
        <div className={cx("tv")}>
          <div className={cx("curve")}>
            <svg
              className={cx("curve_svg")}
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 189.929 189.929"
              xmlSpace="preserve"
            >
              <path
                d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
                C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
              ></path>
            </svg>
          </div>
          <div className={cx("display_div")}>
            <div className={cx("screen_out")}>
              <div className={cx("screen_out1")}>
                <div className={cx("screen")}>
                  <span className={cx("notfound_text")}>
                    Check Your Network :(
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("lines")}>
            <div className={cx("line1")}></div>
            <div className={cx("line2")}></div>
            <div className={cx("line3")}></div>
          </div>
          <div className={cx("buttons_div")}>
            <div className={cx("b1")}>
              <div></div>
            </div>
            <div className={cx("b2")}></div>
            <div className={cx("speakers")}>
              <div className={cx("g1")}>
                <div className={cx("g11")}></div>
                <div className={cx("g12")}></div>
                <div className={cx("g13")}></div>
              </div>
              <div className={cx("g")}></div>
              <div className={cx("g")}></div>
            </div>
          </div>
        </div>
        <div className={cx("bottom")}>
          <div className={cx("base1")}></div>
          <div className={cx("base2")}></div>
          <div className={cx("base3")}></div>
        </div>
      </div>
    </div>
  );
}

export default TVComponent;
