import styles from "./cart-ALL.module.scss";
import classnames from "classnames/bind";
import Buttonn from "../button";
import imgqr from "./d91264e165ed6facc6178994d5afae79.png";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Evaluate from "../Evaluate";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoneIcon from "@mui/icons-material/Done";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

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
            <CheckCircleIcon className={cx("status-icon")} />
            <p className={cx("status-message1")}>Giao hàng thành công</p>
            <DoneIcon className={cx("status-icon1")} />
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
                <AttachMoneyIcon className={cx("price-icon1")} />
                <p className={cx("price-value")}>49.000</p>
              </div>
              <div className={cx("chinh")}>
                <AttachMoneyIcon className={cx("price-icon")} />
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
              <div className={cx("chinh")}>
                <ShoppingBagIcon className={cx("total-price-icon")} />
                <p className={cx("total-price-label")}>Thành tiền :</p>
              </div>
              <div className={cx("rrr")}>
                <ShoppingBagIcon className={cx("total-price-icon1")} />
                <p className={cx("total-price-label1")}>30.000</p>
              </div>
            </div>
            <div className={cx("action-buttons")}>
              <Evaluate className={cx("review-button")} />
              <Link to="list_book">
                <Buttonn primary className={cx("refund-request-button")}>
                  Yêu Cầu Trả Hàng Hoàn Tiền
                </Buttonn>
              </Link>
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
