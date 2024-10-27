import styles from "./Profile-address-module.scss";
import classnames from "classnames/bind";
import Buttonn from "../../../../compodens/Layout/Cart-buggest/button";

const cx = classnames.bind(styles);
function Sidebar() {
  return (
    <div className={cx("profile-address")}>
      {/* header  */}
      <div className={cx("proAdress1")}>
        <div className={cx("proAdress2")}>
          <p className={cx("proAdress3")}>Đỉa Chỉ Giao Hàng</p>
          <Buttonn className={cx("edfsdfgsd")} primary>
            Thêm Đỉa Chỉ
          </Buttonn>
        </div>
        {/* profile  */}
        <div className={cx("proAdress4")}>
          <div className={cx("proAdrsess4")}>
            <p className={cx("proAdress5")}>Đỉa Chỉ</p>
            <div className={cx("proAasdress5")}>
              <div className={cx("proAdress6")}>
                <div className={cx("proAdress7 yyy")}>
                  <p className={cx("proAdress8")}>Lê Xuân Đức</p>
                  <p className={cx("proAdress9 dtadress")}>(+84) 965777705</p>
                </div>
                <div className={cx("asesav yyy")}>
                  <p className={cx("proAdress11 dtadress")}>Số 62, </p>
                  <p className={cx("proAdress12 dtadress")}>Trương Định</p>
                </div>
                <div className={cx("proAdress10 yyy")}>
                  <p className={cx("proAdress13 dtadress")}>
                    Phường Trương Định,
                  </p>
                  <p className={cx("proAdress14 dtadress")}>
                    {" "}
                    Quận Hai Bà Trưng,
                  </p>
                  <p className={cx("proAdress15 dtadress")}> Hà Nội</p>
                </div>{" "}
                {/* select  */}
                <p className={cx("proAdress16")}>Mặc Định</p>
              </div>
              {/* option  */}
              <div className={cx("proAdress17")}>
                <p className={cx("proAdress18")}>Cập nhật</p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("proAdress4")}>
          <div className={cx("proAdrsess4")}>
            <p className={cx("proAdress5")}>Đỉa Chỉ</p>
            <div className={cx("proAasdress5")}>
              <div className={cx("proAdress6")}>
                <div className={cx("proAdress7 yyy")}>
                  <p className={cx("proAdress8")}>Lê Xuân Đức</p>
                  <p className={cx("proAdress9 dtadress")}>(+84) 965777705</p>
                </div>
                <div className={cx("asesav yyy")}>
                  <p className={cx("proAdress11 dtadress")}>Số 62, </p>
                  <p className={cx("proAdress12 dtadress")}>Trương Định</p>
                </div>
                <div className={cx("proAdress10 yyy")}>
                  <p className={cx("proAdress13 dtadress")}>
                    Phường Trương Định,
                  </p>
                  <p className={cx("proAdress14 dtadress")}>
                    {" "}
                    Quận Hai Bà Trưng,
                  </p>
                  <p className={cx("proAdress15 dtadress")}> Hà Nội</p>
                </div>{" "}
                <p className={cx("proAdress16")}>Mặc Định</p>
              </div>

              <div className={cx("proAdress17")}>
                <p className={cx("proAdress18")}>Cập nhật</p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("proAdress4")}>
          <div className={cx("proAdrsess4")}>
            <p className={cx("proAdress5")}>Đỉa Chỉ</p>
            <div className={cx("proAasdress5")}>
              <div className={cx("proAdress6")}>
                <div className={cx("proAdress7 yyy")}>
                  <p className={cx("proAdress8")}>Lê Xuân Đức</p>
                  <p className={cx("proAdress9 dtadress")}>(+84) 965777705</p>
                </div>
                <div className={cx("asesav yyy")}>
                  <p className={cx("proAdress11 dtadress")}>Số 62, </p>
                  <p className={cx("proAdress12 dtadress")}>Trương Định</p>
                </div>
                <div className={cx("proAdress10 yyy")}>
                  <p className={cx("proAdress13 dtadress")}>
                    Phường Trương Định,
                  </p>
                  <p className={cx("proAdress14 dtadress")}>
                    {" "}
                    Quận Hai Bà Trưng,
                  </p>
                  <p className={cx("proAdress15 dtadress")}> Hà Nội</p>
                </div>{" "}
                <p className={cx("proAdress16")}>Mặc Định</p>
              </div>

              <div className={cx("proAdress17")}>
                <p className={cx("proAdress18")}>Cập nhật</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
