import styles from "./header.module.scss";
import classnames from "classnames/bind";
import Menu from "./Menu";
import Cart from "../cart";
import Seach_1 from "./seach1";

const cx = classnames.bind(styles);
function Sidebar() {
  return (
    <div className={cx("search")}>
      <div className={cx("Menu")}>
        <Menu />{" "}
      </div>
      <div className={cx("middle")}>
        <Seach_1 />
      </div>
      <div className={cx("end")}>
        <Cart />
      </div>
    </div>
  );
}

export default Sidebar;
