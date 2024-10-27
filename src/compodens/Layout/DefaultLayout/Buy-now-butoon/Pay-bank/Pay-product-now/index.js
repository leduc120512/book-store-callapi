import styles from "./pay_product_module.scss";
import classnames from "classnames/bind";
import Buttonn from "../../../../Cart-buggest/button";

const cx = classnames.bind(styles);
function Pay_product() {
  return (
    <div>
      <div className={cx("pay_right")}>
        <p className={cx("pay_right2")}>Thanh toán khi nhận hàng</p>
        <p className={cx("pay_right3")}>Phí thu hộ: </p>
        <p className={cx("pay_right4")}>0</p>
        <p className={cx("pay_right5")}>VNĐ.</p>
        <p className={cx("pay_right6")}>
          Ưu đãi về phí vận chuyển (nếu có) áp dụng cả với phí thu hộ.
        </p>
      </div>
      <div className={cx("ducv2glkad sad")}>
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
            <p className={cx("asasas")}>
              Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân Shopee
            </p>
            <p className={cx("aerwtesfd")}> Điều khoản </p>
          </div>
          {/* btn  */}
          <Buttonn className={cx("asf")} primary>
            Đặt Hàng
          </Buttonn>
        </div>
      </div>
    </div>
  );
}

export default Pay_product;
