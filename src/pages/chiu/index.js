import classNames from "classnames/bind";
import styles from "./leduc-module.scss";
const cx = classNames.bind(styles);

function He() {
  return (
    <div className={cx("Main")}>
      <h1>Thời khóa biểu lớp T0908I</h1>
      <div className={cx("Main-1")}>
        <div className={cx("Main-k")}>
          <div className={cx("Main-2")}>Thứ 3</div>
          <p className={cx("Main-3")}>CF -T1,L1</p>
          <p className={cx("Main-3")}>CF -T4,L4</p>
        </div>
        <div className={cx("Main-k")}>
          <div className={cx("Main-2 ds")}>
            {" "}
            <div>Thứ 5</div>
          </div>
          <p className={cx("Main-3")}>CF -T2,L2</p>
          <p className={cx("Main-3")}>CF - Written test</p>
        </div>
        <div className={cx("Main-k")}>
          <div className={cx("Main-2")}>Thứ 7</div>
          <p className={cx("Main-3")}>CF -T3,L3</p>
          <p className={cx("Main-3")}>C -T1,L1</p>
        </div>
      </div>
    </div>
  );
}

export default He;
