import styles from "./Buychange-giaohang-moudle.scss";
import classnames from "classnames/bind";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Radio from "@mui/material/Radio";

import Buttonn from "../../../../Cart-buggest/button";

const cx = classnames.bind(styles);

// modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  minHeight: 500,
};

function Buychange_giaohang() {
  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // expanded accordion
  const [expandedAccordion, setExpandedAccordion] = React.useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  // check
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleDivClick = (value) => () => {
    setSelectedValue(value);
  };

  return (
    <div className={cx("Buy_chance_ship")}>
      <p className={cx("NowShippingChange")} onClick={handleOpen}>
        Thay đổi
      </p>

      {/* modal  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* content in modal  */}
          <div className={cx("Buy_chance_ship_go")}>
            <p className={cx("Buy_chance_ship_text")}>Chọn Đơn Vị Vận Chuyển</p>
            <div className={cx("Buy_chance_ship_list")}>
              {/* Accordion 1 */}
              <Accordion
                expanded={expandedAccordion === "panel1"}
                onChange={handleAccordionChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Giao Hàng Nhanh
                </AccordionSummary>
                <AccordionDetails>
                  <div className={cx("Buy_chandsdfsdcdasde_ship_text_main")}>
                    <Radio
                      checked={selectedValue === "a"}
                      onChange={handleChange}
                      value="a"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                    />

                    <div
                      className={cx("ddddddd")}
                      onClick={handleDivClick("a")}
                    >
                      <div
                        className={cx(
                          "yyy Buy_chandsdfsdcdasde_ship_text_main"
                        )}
                      >
                        <p className={cx("Buy_chandsdffsdcdasde_ship_text")}>
                          Standard Express
                        </p>
                        <p className={cx(" Buy_ddchandssdcdasde_ship_text")}>
                          ₫15.000
                        </p>
                      </div>
                      <div className={cx("yyy Buy_chandssdcdasde_ship_text")}>
                        <p className={cx(" Buy_chandddssdcdasde_ship_text")}>
                          Đảm Bảo Nhận Hàng từ
                        </p>
                        <p>22 Tháng 5 - 26 Tháng 5</p>
                      </div>
                      <div className={cx("yyy Buy_chancdasde_ship_text")}>
                        <p>Nhận Voucher trị giá</p>
                        <p>₫15.000</p>
                        <p>nếu đơn hàng được giao đến bạn sau ngày </p>
                        <p>26 Tháng 5 2024.</p>
                      </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>

              {/* Accordion 2 */}
              <Accordion
                expanded={expandedAccordion === "panel2"}
                onChange={handleAccordionChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Giao Hỏa Tốc
                </AccordionSummary>
                <AccordionDetails>
                  <div className={cx("Buy_chandsdfsdcdasde_ship_text_main")}>
                    <Radio
                      checked={selectedValue === "b"}
                      onChange={handleChange}
                      value="b"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "B" }}
                    />
                    <div
                      className={cx("ddddddd")}
                      onClick={handleDivClick("b")}
                    >
                      <div
                        className={cx(
                          "yyy Buy_chandsdfsdcdasde_ship_text_main"
                        )}
                      >
                        <p className={cx("Buy_chandsdffsdcdasde_ship_text")}>
                          Standard Express
                        </p>
                        <p className={cx(" Buy_ddchandssdcdasde_ship_text")}>
                          ₫15.000
                        </p>
                      </div>
                      <div className={cx("yyy Buy_chandssdcdasde_ship_text")}>
                        <p>Đảm Bảo Nhận Hàng từ</p>
                        <p>22 Tháng 5 - 26 Tháng 5</p>
                      </div>
                      <div className={cx("yyy Buy_chancdasde_ship_text")}>
                        <p>Nhận Voucher trị giá</p>
                        <p>₫15.000</p>
                        <p>nếu đơn hàng được giao đến bạn sau ngày </p>
                        <p>26 Tháng 5 2024.</p>
                      </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className={cx("Buy_chance_ship_btn")}>
              <Buttonn primary onClick={handleClose}>
                Trở Lại
              </Buttonn>
              <Buttonn primary>Hoàn Thành</Buttonn>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Buychange_giaohang;
