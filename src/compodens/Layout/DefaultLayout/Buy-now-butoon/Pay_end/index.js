import styles from "./Pay_end-module.scss";
import classnames from "classnames/bind";
import Buttonn from "../../../Cart-buggest/button";

const cx = classnames.bind(styles);
function Pay_end() {
  return (
    <div>
      <div>
        <div>
          <div>
            <p>Tổng tiền hàng</p>
            <p>166.000</p>
          </div>
          <div>
            <p>Phí vận chuyển</p>
            <p>12.800</p>
          </div>
          <div>
            <p>Tổng thanh toán</p>
            <p>178.000</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p>Nhấn "Đặt hàng" đồng nghĩa với việc bạn tuân thủ theo</p>
          <p>Điều Khoản của Jogo</p>
          <Buttonn primary> Đặt hàng</Buttonn>
        </div>
      </div>
    </div>
  );
}

export default Pay_end;
