import classnames from "classnames/bind";
import Img1 from "./img/tải-xuống-_3_.png";
import Img2 from "./img/tải-xuống-_4_.png";
import styles from "./list-book-module.scss";
const cx = classnames.bind(styles);
function Cart() {
  return (
    <div className={cx("book-list-")}>
      <img className={cx("list-item")} src={Img1} alt="First slide" />
      <img className={cx("list-item")} src={Img2} alt="First slide" />
      <img className={cx("list-item")} src={Img1} alt="First slide" />
      <img className={cx("list-item")} src={Img2} alt="First slide" />
      <img className={cx("list-item")} src={Img1} alt="First slide" />
      <img className={cx("list-item")} src={Img2} alt="First slide" />
    </div>
  );
}

export default Cart;
