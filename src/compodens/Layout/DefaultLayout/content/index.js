import styles from "./content-module.scss";
import classnames from "classnames/bind";
import Navv from "./nav";
import Img from "./imgh";
import Seach_2 from "./search-2";
import List_book from "./list-book";
// import Menu from "./Menu";
// import Cart from "../cart";
// import Search from "./seach";
const cx = classnames.bind(styles);
function Sidebar() {
  return (
    <div className={cx("Content")}>
      <div className={cx("nav")}>
        <Navv />
      </div>
      <div className={cx("slide")}>
        <Img />
      </div>
      <div className={cx("end")}>
        <Seach_2 />
      </div>
      <div className={cx("end")}>
        <List_book />
      </div>
    </div>
  );
}

export default Sidebar;
