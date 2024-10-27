import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames/bind";

import {
  faCartArrowDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./siderbar-module.scss";
import Seach_3 from "./seach";
import End_bar from "./side-bar-end";
import Buttoon from "./button-siderbar";
const cx = classnames.bind(styles);
function Sidebar() {
  return (
    <div className={cx("Sider-bar")}>
      <div className={cx("Sidert")}>
        <Seach_3 />
      </div>
      <div className={cx("BUTON")}>
        <Buttoon />
      </div>
      <div className={cx("enda")}>
        {" "}
        <End_bar />
      </div>
    </div>
  );
}

export default Sidebar;
