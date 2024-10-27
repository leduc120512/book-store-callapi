import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Buttonn from "../../../../Cart-buggest/button";
import Img_qr_pay from "./qrcode.jpg";
import styles from "./pay_product_finish-module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

function Pay_product() {
  const [show, setShow] = React.useState({
    askjd: true,
    NOW_H_CircularProgress: false,
    NOW_H_QR: false,
  });

  const handleClick = () => {
    setShow({ askjd: false, NOW_H_CircularProgress: true, NOW_H_QR: false });
    setTimeout(() => {
      setShow({ askjd: false, NOW_H_CircularProgress: false, NOW_H_QR: true });
    }, 3000);
  };

  return (
    <div>
      {show.askjd && (
        <p className={cx("askjd adfshj")}>
          Khi Bạn Bấm Đặt Hàng Sẽ Có Mã QR Xuất Tại Đây
        </p>
      )}
      {show.NOW_H_CircularProgress && (
        <div className={cx("NOW_H")}>
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      )}
      {show.NOW_H_QR && (
        <div className={cx("NOW_H")}>
          <p className={cx("NOW_H_t")}>Bạn Quét Mã Tại Đây</p>
          <img className={cx("NOW_H_IMG")} src={Img_qr_pay} />
        </div>
      )}
      <div className={cx("ducv2glkad ducv2glkadfda")}>
        <div className={cx("ducv2glkadfd")}>
          <div className={cx("yyy")}>
            <p className={cx("askjd")}>Tổng Tiền Hàng</p>
            <p className={cx("asdkfj")}>69.000</p>
          </div>
          <div className={cx("yyy")}>
            <p className={cx("askjd")}>Phí Vận Chuyển</p>
            <p className={cx("asdkfj")}>11.000</p>
          </div>
          <div className={cx("asd")}>
            <p className={cx("askjd")}>Tổng Thanh Toán</p>
            <p className={cx("as")}>80.000</p>
          </div>
        </div>
        <div className={cx("asd")}>
          <div className={cx("aass")}>
            <p className={cx("asasas")}>Nhấn "Đặt hàng" Sẽ Có Mã QR hiện ra</p>
            <p className={cx("aerwtesfd")}> Điều khoản </p>
          </div>
          {/* btn  */}
          <Buttonn className={cx("asf")} primary onClick={handleClick}>
            Đặt Hàng
          </Buttonn>
        </div>
      </div>
    </div>
  );
}

export default Pay_product;
