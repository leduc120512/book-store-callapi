import styles from "./profile_delete_module.scss";
import classnames from "classnames/bind";

import Buttonn from "../../../../compodens/Layout/Cart-buggest/button";

const cx = classnames.bind(styles);
function Sidebar() {
  return (
    <div className={cx("Profile-delete")}>
      <div className={cx("Profile-deletdfe")}>
        <p className={cx("Profile-p")}>Privacy Settings</p>
        <div className={cx("Profile-detle-item")}>
          <p className={cx("Profile-detle-delete")}>Yêu Cầu Xóa Tài Khoản</p>
          <Buttonn className={cx("Profile-detle-delete--btn")} primary>
            {" "}
            Xóa Bỏ
          </Buttonn>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
