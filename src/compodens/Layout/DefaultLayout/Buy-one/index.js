import styles from "./BuyNow-module.scss";
import classnames from "classnames/bind";
import QRCodeImage from "./qrcode.jpg";
import Button_fix from "./now-buy";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faCartArrowDown,
  faDeleteLeft,
  faMagnifyingGlass,
  faMinus,
  faPlug,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const cx = classnames.bind(styles);

function BuyNowComponent() {
  const [checked, setChecked] = React.useState([true, false]);

  const handleParentCheckboxChange = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChild1CheckboxChange = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChild2CheckboxChange = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  return (
    <div className={cx("BuyNowContainer")}>
      <div className={cx("BuyNowContainer-header-main")}>
        <p>Sản Phẩm</p>
        <div className={cx("BuyNowContainer-header")}>
          <p className={cx("BuyNowContainer-header1 l")}>Đơn Giá</p>
          <p className={cx("BuyNowContainer-header2 l")}>Số Lượng</p>
          <p className={cx("BuyNowContainer-header3 l")}>Số Tiền</p>
          <p className={cx("BuyNowContainer-header4 l")}>Thao Tác</p>
        </div>
      </div>
      <div className={cx("BuyNowInnerContainer")}>
        {/* check all  */}
        <div className={cx("BuyNowHeader")}>
          <FormControlLabel
            control={
              <Checkbox
                sx={{ "& .MuiSvgIcon-root": { fontSize: 23 } }}
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleParentCheckboxChange}
              />
            }
          />
          <div className={cx("BuyNowFavorites")}>
            <p className={cx("buyNow-p")}>Yêu thích</p>
            <FontAwesomeIcon className={cx("buyNow-icon1")} icon={faMessage} />
          </div>
        </div>
        {/* content  */}
        <div className={cx("BuyNowBody")}>
          {" "}
          {/* combo red  */}
          <div className={cx("BuyNowPromotion")}>
            <p>ComBo khuyến Mãi</p>
            <p>Mua 3 sản phẩm giảm 1%, giảm 3%</p>
            <div className={cx("BuyNowAddMore")}>
              <p>Thêm</p>
              <FontAwesomeIcon icon={faArrowAltCircleDown} />
            </div>
          </div>
          {/* product  */}
          <div className={cx("BuyNowProducts")}>
            {/* box1 */}
            <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
              <div className={cx("BuyNowProductItem")}>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 23 } }}
                      checked={checked[0]}
                      onChange={handleChild1CheckboxChange}
                    />
                  }
                />
                {/* list-item */}
                <div className={cx("BuyNowProductDetails")}>
                  <div className={cx("BuyNowProductImageContainer kkk")}>
                    <div className={cx("BuyNowProductImageWrapper kkk")}>
                      <img
                        className={cx("BuyNowProductIimg")}
                        src={QRCodeImage}
                      />
                      <div className={cx("BuyNowProductDescription")}>
                        <p className={cx("BuyNowProductDesc")}>Đắc Nhân Tâm</p>
                        <p className={cx("BuyNowProductDes1")}>
                          Số lượng giới hạn
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={cx("BuyNowProductClassification")}>
                    <p className={cx("BuyNowProductClasstupe")}>
                      {" "}
                      Phân Loại Hàng
                    </p>
                    <p className={cx("BuyNowProductClasshang")}>
                      Hãng Ninza Việt Nam
                    </p>
                  </div>
                  <div className={cx("BuyNowProductPricing")}>
                    <div className={cx("BuyNowProductOriginalPrice kkk")}>
                      <FontAwesomeIcon
                        className={cx("BuyNowProduct1")}
                        icon={faArrowAltCircleDown}
                      />
                      <p className={cx("BuyNowProduct12 ")}>148.000</p>
                    </div>
                    <div className={cx("BuyNowProductDiscountedPrice kkk")}>
                      <FontAwesomeIcon
                        className={cx("BuyNowProduct2 ")}
                        icon={faArrowAltCircleDown}
                      />
                      <p className={cx("BuyNowProduct23")}>145.000</p>
                    </div>
                  </div>
                  <div className={cx("BuyNowProductQuantity kkk")}>
                    <FontAwesomeIcon icon={faMinus} />
                    <p className={cx("BuyNowProducttt")}>1</p>
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                  <p className={cx("BuyNowProductFinalPrice")}>145.000</p>
                  <div className={cx("BuyNowProductRemove")}>
                    <FontAwesomeIcon
                      className={cx("BuyNowProductRemove")}
                      icon={faDeleteLeft}
                    />
                  </div>
                </div>
              </div>
              {/* box2 */}
            </Box>
          </div>
        </div>
      </div>
      <Button_fix />
    </div>
  );
}

export default BuyNowComponent;
