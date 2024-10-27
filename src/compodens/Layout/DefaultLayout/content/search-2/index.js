import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames/bind";

import {
  faCartArrowDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./seacrch2-module.scss";
const cx = classnames.bind(styles);
function Cart() {
  return (
    <div className={cx("main-book")}>
      {" "}
      <h2 className={cx("list--2")}>List Book</h2>
      <div className={cx("search-2")}>
        {" "}
        <input className={cx("input-2")} placeholder="Search " />
      </div>
      {/* button anh */}
    </div>
  );
}

export default Cart;
