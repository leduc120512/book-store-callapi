import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames/bind";
import Button from "../../Cart-buggest/button";
import {
  faCartArrowDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./cart.module.scss";
import Cart_action from "./cart-action";
const cx = classnames.bind(styles);
function Cart() {
  return (
    <div className={cx("uploat1")}>
      {/* upload */}

      {/* Tin Nhắn */}

      {/* Hộp Thư Đến */}
      {/* 
      <div className={cx("search")}>
        <button className={cx("search-btn")}>
          <FontAwesomeIcon icon={faCartArrowDown} />
        </button>
        <Button className={cx("btn")} primary small>
          Đăng Nhập
        </Button>
      </div> */}

      <div className={cx("search1")}>
        {" "}
        <Link to="Cart">
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faCartArrowDown} />
          </button>
        </Link>
        <Cart_action className={cx("User")} />
      </div>

      {/* button anh */}
    </div>
  );
}

export default Cart;
