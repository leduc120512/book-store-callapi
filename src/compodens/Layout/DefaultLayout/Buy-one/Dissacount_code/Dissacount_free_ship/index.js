import styles from "./Dissacount_free_ship-module.scss";
import classnames from "classnames/bind";

import * as React from "react";
import Radio from "@mui/material/Radio";
const cx = classnames.bind(styles);

function Sidebar() {
  // radio
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <div className={cx("Disacount_code_sale")}>
        <p> Mã Miễn Phí Có Thể Chọn 1</p>{" "}
        <div className={cx("Disacount_code_sale1")}>
          <div className={cx("Disacount_code_sale2")}>
            <div className={cx("Disacount_code_sale3")}>
              <p className={cx("Disacosdunt_code_sale3")}>Free Ship</p>
              <div className={cx("Disacount_code_sale11")}>
                <p className={cx("Disacount_code_sale112")}>Tất cả hình</p>

                <p className={cx("Disacousdfjnt_code_sale112")}>
                  {" "}
                  thức thanh toán
                </p>
              </div>
            </div>
            <div className={cx("Disacount_code_sale4")}>
              <div className={cx("Disacount_code_sale4")}>
                <p className={cx("Disacsdount_code_sale4")}>Giảm tối đa 25k</p>
                <p
                  className={cx(
                    "Disacount_code_sale4 asdfasf Disacsdount_code_sale4"
                  )}
                >
                  Đơn tối thiểu 100k
                </p>
              </div>
              <p className={cx("Disacount_code_sale7 Disacount_code_sale4 ")}>
                Freeship hỏa tốc
              </p>
              <div className={cx("Disacount_code_sale6 ")}>
                <div className={cx("Disacount_code_sale8")}>
                  <p>HSD : </p>
                  <p>31.05.2024</p>
                </div>
                <p className={cx("Disacou12nt_code_sale8")}>Điều Kiện</p>
              </div>
            </div>
          </div>
          <div className={cx("Disacount_code_sale9")}>
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
            />
          </div>
        </div>
      </div>
      <div className={cx("Disacount_code_sale")}>
        <div className={cx("Disacount_code_sale1")}>
          <div className={cx("Disacount_code_sale2")}>
            <div className={cx("Disacount_code_sale3")}>
              <p className={cx("Disacosdunt_code_sale3")}>Free Ship</p>
              <div className={cx("Disacount_code_sale11")}>
                <p className={cx("Disacount_code_sale112")}>Tất cả hình</p>

                <p className={cx("Disacousdfjnt_code_sale112")}>
                  {" "}
                  thức thanh toán
                </p>
              </div>
            </div>
            <div className={cx("Disacount_code_sale4")}>
              <div className={cx("Disacount_code_sale4")}>
                <p className={cx("Disacsdount_code_sale4")}>Giảm tối đa 25k</p>
                <p
                  className={cx(
                    "Disacount_code_sale4 asdfasf Disacsdount_code_sale4"
                  )}
                >
                  Đơn tối thiểu 100k
                </p>
              </div>
              <p className={cx("Disacount_code_sale7 Disacount_code_sale4 ")}>
                Freeship hỏa tốc
              </p>
              <div className={cx("Disacount_code_sale6 ")}>
                <div className={cx("Disacount_code_sale8")}>
                  <p>HSD : </p>
                  <p>31.05.2024</p>
                </div>
                <p className={cx("Disacou12nt_code_sale8")}>Điều Kiện</p>
              </div>
            </div>
          </div>
          <div className={cx("Disacount_code_sale9")}>
            <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="b"
              name="radio-buttons"
              inputProps={{ "aria-label": "B" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
