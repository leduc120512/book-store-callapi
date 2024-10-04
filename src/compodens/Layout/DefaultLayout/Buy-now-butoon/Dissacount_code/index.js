import styles from "./Disacount_code.scss";
import Buttonn from "../../../Cart-buggest/button";
import Disacount_code_ship from "./Dissacount_free_ship";
import Disacount_code_sale from "./disacount_code-sale";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";

import classnames from "classnames/bind";
// backgroup
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  minHeight: 700,
  minWidth: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const text = {
  marginRight: "20px",
  color: "rgba(0, 0, 255, 0.7)",
  fontWeight: "550",
  fontSize: "14px",
};

const cx = classnames.bind(styles);

function Acount_freeship() {
  // MODAL
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // INPUT CODE
  const [inputValue, setInputValue] = React.useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={cx("Disacount_code")}>
      {" "}
      <Button sx={text} onClick={handleOpen}>
        Chọn Hoặc Nhập Mã
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={cx("Disacount_code_")}>
            <div>
              <div className={cx("Disacount_code_SUPORT")}>
                <p className={cx("Disacount_code_SUPORTP1")}>
                  Chọn Hoặc Nhập Mã
                </p>
                <p className={cx("Disacount_code_SUPORTP2")}>Hỗ Trợ</p>
              </div>
              <div className={cx("Disacount_code_INPUT")}>
                <p className={cx("Disacount_code_INPUT-1")}>Mã Voucher</p>
                <input
                  className={cx(
                    "evaluate-feature-title12 Disacount_code_INPUT-2"
                  )}
                  type="text"
                  id="inputText"
                  placeholder="Nhập Mã Tại Đây"
                  onChange={handleInputChange}
                ></input>
                <Buttonn primary disabled={!inputValue}>
                  {" "}
                  Áp Dụng
                </Buttonn>
              </div>
            </div>
            <div>
              <Disacount_code_ship />
            </div>
            <div className={cx("Disacaasdount_code_SUPORT")}>
              <p className={cx("Dissaqwacount_code_SUPORT")}>Giảm Giá</p>
              <p className={cx("sdfgDisacount_code_SUPORT")}>
                Có Thể Chọn 1 Voucher
              </p>
            </div>
            <div>
              {" "}
              <Disacount_code_sale />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Acount_freeship;
