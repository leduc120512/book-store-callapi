import styles from "./Buy-now-butoon-module.scss";
import classnames from "classnames/bind";
import Buy_Pay from "./Buy-Pay";
import Pay_back from "./Pay-bank";

const cx = classnames.bind(styles);

function Sidebar() {
  return (
    <div className={cx("jjasd")}>
      <div className={cx("NowHeader")}>
        <p className={cx("NowHeaderTitle")}>Thanh Toán</p>
      </div>{" "}
      <div className={cx("ducv2glk")}>
        <Buy_Pay />
      </div>
      <div className={cx("ducv2glk")}>
        <Pay_back />
      </div>
      {/* end  */}
    </div>
  );
}

export default Sidebar;
