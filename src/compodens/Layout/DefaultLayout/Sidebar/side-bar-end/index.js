import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames/bind";
import { faCableCar } from "@fortawesome/free-solid-svg-icons";
import styles from "./side-bar-end.module.scss";

const cx = classnames.bind(styles);

function End_bar() {
  return (
    <div className={cx("end-bar")}>
      {/* Sử dụng Link thay vì div để tạo điều hướng */}
      <Link to="/Cart/5" className={cx("bam")}>
        <FontAwesomeIcon className={cx("bam-2")} icon={faCableCar} />
        <span className={cx("bam1")}>Đánh Giá</span>
      </Link>
      <Link to="/Sugest" className={cx("bam")}>
        <FontAwesomeIcon className={cx("bam-2")} icon={faCableCar} />
        <span className={cx("bam1")}>Gợi ý Thể Loại</span>
      </Link>
      <Link to="/Introduce" className={cx("bam")}>
        <FontAwesomeIcon className={cx("bam-2")} icon={faCableCar} />
        <span className={cx("bam1")}>Lịch Sử Của Sách</span>
      </Link>
      <Link to="/Profile" className={cx("bam")}>
        <FontAwesomeIcon className={cx("bam-2")} icon={faCableCar} />
        <span className={cx("bam1")}>Hồ Sơ Cá Nhân</span>
      </Link>
      <Link to="/LOGIN" className={cx("bam")}>
        <FontAwesomeIcon className={cx("bam-2")} icon={faCableCar} />
        <span className={cx("bam1")}>Đăng Xuất</span>
      </Link>
    </div>
  );
}

export default End_bar;
