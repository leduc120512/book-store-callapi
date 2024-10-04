import styles from "./profile-mk-module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);
function Proifile_mk() {
  return <div className={cx("Profile-mk")}></div>;
}

export default Proifile_mk;
