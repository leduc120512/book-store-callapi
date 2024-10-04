import styles from "./transport-module.scss";
import classnames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRadiation } from "@fortawesome/free-solid-svg-icons";
import Buttonn from "../button";
import Evaluate from "../Evaluate";

import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "770px",
  minWidth: "170px",
  minHeight: "650px",

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const cx = classnames.bind(styles);
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
function Sidebar() {
  //open
  const [open1, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose1 = () => setOpen(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={cx("cart-container")}>
      <div className={cx("cart-item")}>
        <div className={cx("item-favorites")}>
          <p className={cx("favorites-title")}>Yêu Thích</p>
          <div className={cx("item-status")}>
            <FontAwesomeIcon icon={faRadiation} className={cx("status-icon")} />
            <p className={cx("status-message1")}>Giao hàng thành công</p>
            <FontAwesomeIcon
              icon={faRadiation}
              className={cx("status-icon1")}
            />
            <p className={cx("status-message")}>Hoàn Thành</p>
          </div>
        </div>
        <div className={cx("product-details")}>
          <div className={cx("product-image-wrapper chinh")}>
            {/* <img alt="Anh" className={cx("product-image")} /> */}
            <div className={cx("product-description")}>
              <p className={cx("product-name")}>
                Chuột Không Giây v font bao hành đổi trong 24 tháng
              </p>
              <p className={cx("product-category")}>Phân Loại Hàng</p>
              <p className={cx("product-quantity")}>x1</p>
              <p className={cx("product-return-policy")}>
                Trả Hàng miễn Phí trong 15 ngày
              </p>
            </div>
          </div>
          <div className={cx("product-pricing chinh")}>
            <div className={cx("price-original")}>
              <div className={cx("chinh")}>
                <FontAwesomeIcon
                  icon={faRadiation}
                  className={cx("price-icon1")}
                />
                <p className={cx("price-value")}>49.000</p>
              </div>
              <div className={cx("chinh")}>
                <FontAwesomeIcon
                  icon={faRadiation}
                  className={cx("price-icon")}
                />
                <p className={cx("price-value-sale")}>37.000</p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("checkout-section")}>
          <div className={cx("product-review-section")}>
            <div className={cx("review-deadline")}>
              <div className={cx("deadline-message")}>
                <p className={cx("deadline-instruction")}>
                  Đánh giá sản phẩm trước ngày
                </p>
                <p className={cx("deadline-date")}>07-06-2024</p>
              </div>
              <p className={cx("review-prompt")}>
                Đánh giá ngay và nhận 200 xu
              </p>
            </div>
          </div>
          <div className={cx("total-price-wrapper")}>
            <div className={cx("chinh")}>
              {" "}
              <div className={cx("chinh")}>
                <FontAwesomeIcon
                  icon={faRadiation}
                  className={cx("total-price-icon")}
                />
                <p className={cx("total-price-label")}>Thành tiền :</p>
              </div>
              <div className={cx("rrr")}>
                <FontAwesomeIcon
                  icon={faRadiation}
                  className={cx("total-price-icon1")}
                />
                <p className={cx("total-price-label1")}>30.000</p>
              </div>
            </div>{" "}
            {/* btn */}
            <div className={cx("action-buttons")}>
              {/* FEETBACK  */}
              <Evaluate />
              {/* REFUND  */}
              <Buttonn primary className={cx("refund-request-button")}>
                Yêu Cầu Trả Hàng Hoàn Tiền
              </Buttonn>
              <Link className={cx("xoagachchan")} to="/list_book">
                <Button className={cx("refund-request-button")}>Mua lại</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
