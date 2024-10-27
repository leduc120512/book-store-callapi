import styles from "./evaluate-main-module.scss";
import classnames from "classnames/bind";
import Buttonn from "../../button";
import anh12 from "./qrcode.jpg";

import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const cx = classnames.bind(styles);

function Evaluate_main({ handleClose }) {
  // Nhận handleClose từ props
  const [checked, setChecked] = React.useState(false);
  const [value1, setValue1] = React.useState(2);
  const [value2, setValue2] = React.useState(2);
  const [value3, setValue3] = React.useState(2);

  return (
    <div className={cx("evaluate-main")}>
      <p className={cx("evaluate-title")}>Đánh Giá Sản Phẩm</p>
      <div className={cx("evaluate-container")}>
        <div className={cx("evaluate-product-info")}>
          <img src={anh12} className={cx("evaluate-product-image")} />
          <div className={cx("evaluate-product-details")}>
            <p className={cx("evaluate-product-name")}>
              Chuột không dây Forter V181 bảo hành đổi mới trong 24 tháng
            </p>
            <p className={cx("evaluate-product-category")}>Phân Loại Hàng </p>
          </div>
        </div>
        <div className={cx("evaluate-quality")}>
          <p className={cx("evaluate-quality-title")}>Chất Lượng Sản Phẩm</p>
          <Box sx={{ "& > legend": { mt: 2 } }}>
            <Rating
              sx={{ fontSize: "18px" }}
              name="simple-controlled"
              value={value1}
              onChange={(event, newValue) => {
                setValue1(newValue);
              }}
            />
          </Box>
        </div>
        <div className={cx("evaluate-features")}>
          <div className={cx("evaluate-feature-k")}>
            <div className={cx("evaluate-feature-input")}>
              <p className={cx("evaluate-feature-title1")}>Tính Năng Nổi bật</p>
              <input
                className={cx("evaluate-feature-title12")}
                type="text"
                id="inputText"
                placeholder="Đánh giá sản phẩm"
              ></input>
            </div>
            <div className={cx("evaluate-quality-input")}>
              <p className={cx("evaluate-quality-title1")}>
                Chất Lượng Sản Phẩm
              </p>
              <input
                className={cx("evaluate-feature-title123")}
                type="text"
                id="inputText"
                placeholder="Đánh giá sản phẩm"
              ></input>
            </div>
          </div>
          <div className={cx("evaluate-add-media")}>
            <Buttonn primary className={cx("evaluate-add-image")}>
              Thêm Hình Ảnh
            </Buttonn>
            <Buttonn primary className={cx("evaluate-add-video")}>
              Thêm video
            </Buttonn>
          </div>
          <div className={cx("evaluate-reward")}>
            <p className={cx("evaluate-reward-info")}>
              Thêm 50 ký tự và 1 hình ảnh
            </p>
          </div>
        </div>
      </div>
      <div className={cx("evaluate-username-display")}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={() => setChecked(!checked)}
              sx={{ "& .MuiSvgIcon-root": { fontSize: "25px" } }}
            />
          }
        />
        <div className={cx("evaluate-username-info")}>
          <p className={cx("evaluate-username-title")}>
            Hiển thị tên đăng nhập trên đánh giá này
          </p>
          <div className={cx("evaluate-username-titlekk")}>
            <p className={cx("evaluate-username-example")}>
              Tên tài khoản sẽ được hiển thị như:
            </p>
            <p className={cx("evaluate-username")}>
              {checked ? "lexuanducqh2qq" : "*****"}
            </p>
          </div>
        </div>
      </div>
      <p className={cx("evaluate-service-title")}>Về Dịch vụ</p>
      <div className={cx("evaluate-service")}>
        <div className={cx("evaluate-service-seller")}>
          <p className={cx("evaluate-service-seller-title")}>
            Dịch vụ của người bán
          </p>
          <Box sx={{ "& > legend": { mt: 2 } }}>
            <Rating
              sx={{ fontSize: "18px" }}
              name="simple-controlled"
              value={value3}
              onChange={(event, newValue) => {
                setValue3(newValue);
              }}
            />
          </Box>
        </div>
        <div className={cx("evaluate-service-seller")}>
          <p className={cx("evaluate-service-seller-title")}>Giao hàng</p>
          <Box sx={{ "& > legend": { mt: 2 } }}>
            <Rating
              sx={{ fontSize: "18px" }}
              name="simple-controlled"
              value={value2}
              onChange={(event, newValue) => {
                setValue2(newValue);
              }}
            />
          </Box>
        </div>
        <div className={cx("evaluate-actions")}>
          <Buttonn
            outline
            className={cx("evaluate-back")}
            onClick={handleClose}
          >
            Trở Lại
          </Buttonn>
          <Buttonn primary className={cx("evaluate-complete")}>
            Hoàn Thành
          </Buttonn>
        </div>
      </div>
    </div>
  );
}

export default Evaluate_main;
