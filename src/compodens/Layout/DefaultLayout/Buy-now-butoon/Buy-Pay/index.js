import styles from "./Buy-Pay-module.scss";
import qr from "./qrcode.jpg";
import Discount_code from "../Dissacount_code"; // Fixed spelling
import Buy_change_address from "./Buy-chage-adress"; // Fixed spelling
import Buychange_giaohang from "./Buychange-giaohang";

import classnames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const cx = classnames.bind(styles);

function Buyyy() {
  return (
    <div className={cx("NowContainer")}>
      {/* header  */}

      {/* address  */}
      <div className={cx("NowAddressContainer")}>
        <div className={cx("NowAddressHeader")}>
          <p className={cx("NowAddressTitle")}>Địa chỉ nhận hàng</p>
        </div>
        <div className={cx("NowAddressTitle11")}>
          <div className={cx("NowAddressDetails yyy")}>
            <p className={cx("NowName")}>Lê Xuân Đức :</p>
            <p className={cx("NowPhone")}>0965777705</p>
            <div className={cx("NowAddressDetailt yyy")}>
              <p className={cx("NowStreet")}>Số 62 Trương Định,</p>
              <p className={cx("NowWard")}>Phường Trương Định,</p>
              <p className={cx("NowDistrict")}>Hai Bà Trưng,</p>
              <p className={cx("NowCity")}>Hà Nội</p>
            </div>
          </div>
          <div className={cx("NowDefault")}>
            <p className={cx("NowDefaultText")}>Mặc định</p>
          </div>
          <div className={cx("NowChange")}>
            {/* <p className={cx("NowChangeText")}>Thay Đổi</p> */}
            <Buy_change_address /> {/* Fixed spelling */}
          </div>
        </div>
      </div>
      {/* product  */}
      <div className={cx("NowProductContainer")}>
        <div className={cx("NowProductContainer1")}>
          <div className={cx("NowProductHeader")}>
            <div className={cx("NowProductTitleContainer")}>
              <p className={cx("NowProductTitle")}>Sản Phẩm</p>
            </div>
            <div className={cx("NowProductInfo")}>
              <p className={cx("NowProductPriceTitle")}>Đơn Giá</p>
              <p className={cx("NowProductQuantityTitle")}>Số Lượng</p>
              <p className={cx("NowProductTotalTitle")}>Thành Tiền</p>
            </div>
          </div>
          <div className={cx("NowProductDetails yyy")}>
            <p className={cx("NowFavorite")}>Yêu Thích</p>
            <p className={cx("NowMall")}>Mall</p>
            <div className={cx("NowChatContainer yyy")}>
              <p className={cx("NowChatText")}>Chat ngay</p>
              <FontAwesomeIcon icon={faMessage} />
            </div>
          </div>
          <div className={cx("NowProductItem")}>
            <div className={cx("NowProductItemDetails")}>
              <div className={cx("yyy")}>
                <img src={qr} className={cx("NowProductItemDetaiimg")} />
                <div className={cx("NowProductDescriptionContainer qqq")}>
                  <p className={cx("NowProductDescription")}>
                    Chuột ko dây Bluetooth tự sạc pin SIDOTECH M1P ko tiến
                  </p>
                  <p className={cx("NowProductReturnPolicy")}>
                    Đổi miễn phí trong 15 ngày
                  </p>
                </div>
              </div>
              <div className={cx("NowProductTypeContainer yyy")}>
                <p className={cx("NowProductTypeTitle")}>Loại :</p>
                <p className={cx("NowProductType")}>M1 Trắng + USB 2.4G</p>
              </div>
              <div className={cx("NowProductPriceContainer yyy")}>
                <p className={cx("NowProductPrice")}>160.000</p>
                <p className={cx("NowProductQuantity")}>1</p>
                <p className={cx("NowProductTotal")}>160.000</p>
              </div>
            </div>
            <div className={cx("NowVoucherContainer")}>
              <p className={cx("NowVoucherTitle")}>Voucher</p>
              <Discount_code /> {/* Fixed spelling */}
            </div>
          </div>
        </div>
      </div>
      {/* messsing  */}
      <div className={cx("NowMessageAndShipping")}>
        <div className={cx("NowShippin1g")}>
          <div className={cx("NowShippin11g")}>
            <div className={cx("NowMessage yyy")}>
              <p className={cx("NowMessageTitle")}>Lời nhắn:</p>
              <input
                className={cx("NowMessageTitle-input")}
                type="text"
                id="inputText"
                placeholder="Nhắn tin cho người bán"
              ></input>
            </div>
            {/* van chuyen */}
            <div className={cx("NowShipping")}>
              <div className={cx("NowShippingMethodContainer yyy")}>
                <p className={cx("NowShippingMethodTitle")}>
                  Đơn vị vận chuyển:
                </p>
                <p className={cx("NowShippingMethod")}>Nhanh</p>
                <Buychange_giaohang />
                <p className={cx("NowShippingCost")}>12.800</p>
              </div>
            </div>
          </div>
          <div className={cx("NowShippingGuaranteeContainer")}>
            <p className={cx("NowShippingGuaranteeDate")}>
              Đảm bảo nhận hàng từ 17 Tháng 5 - 18 Tháng 5
            </p>
            <p className={cx("NowShippingGuaranteeVoucher")}>
              Nhận Voucher trị giá ₫10.000 nếu đơn hàng được giao đến bạn sau
              ngày 18 Tháng 5 2024. ₫12.800
            </p>
          </div>
          <div className={cx("NowShippingFastContainer")}>
            <div className={cx("NowShippingFastOption yyy")}>
              <p className={cx("NowShippingFastOptionTitle")}>
                Hoặc chọn phương thức Hỏa Tốc để
              </p>
              <p className={cx("NowShippingFastOptionGuarantee")}>
                Đảm bảo nhận hàng vào hôm nay
              </p>
            </div>
            <p className={cx("NowShippingInspection")}>Được đồng kiểm</p>
          </div>
          <div className={cx("NowTotalContainer")}>
            <div className={cx("NowTotalDetails yyy")}>
              <p className={cx("NowTotalTitle")}>Tổng số tiền</p>
              <p className={cx("NowTotalQuantity")}>1</p>
              <p className={cx("NowTotalProductTitle")}>sản phẩm</p>
            </div>
            <p className={cx("NowTotalAmount")}>178.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buyyy;
