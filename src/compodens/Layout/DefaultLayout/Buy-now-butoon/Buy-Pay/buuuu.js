import React from "react";
import styles from "./Buy-Pay-module.scss";
import qr from "./qrcode.jpg";
import Discount_code from "../Dissacount_code";
import Buy_change_address from "./Buy-chage-adress";
import Buychange_giaohang from "./Buychange-giaohang";
import classnames from "classnames/bind";
import { useAuth } from "../../Login-LogOUT/LogOut/AuthProvider/AuthProvider";

const cx = classnames.bind(styles);

function Buyyy({ orderDetails }) {
  const { user } = useAuth();

  const handleSubmitOrder = async () => {
    const orderData = {
      user_id: user.id, // ID người dùng
      shipping_address: user.address,
      items: orderDetails.items, // Danh sách sản phẩm trong giỏ hàng
    };

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Order placed successfully:", data.message);
        // Chuyển hướng hoặc hiển thị thông báo thành công
      } else {
        console.error("Failed to place order:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const totalAmount = orderDetails.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className={cx("NowContainer")}>
      {/* Địa chỉ nhận hàng */}
      <div className={cx("NowAddressContainer")}>
        <div className={cx("NowAddressHeader")}>
          <p className={cx("NowAddressTitle")}>Địa chỉ nhận hàng</p>
        </div>
        <div className={cx("NowAddressTitle11")}>
          <div className={cx("NowAddressDetails yyy")}>
            <p className={cx("NowName")}>{user.nameUser}</p>
            <p className={cx("NowPhone")}>{user.phone}</p>
            <div className={cx("NowAddressDetailt yyy")}>
              <p className={cx("NowStreet")}>{user.address}</p>
            </div>
          </div>
          <div className={cx("NowDefault")}>
            <p className={cx("NowDefaultText")}>Mặc định</p>
          </div>
          <div className={cx("NowChange")}>
            <Buy_change_address />
          </div>
        </div>
      </div>

      {/* Sản phẩm */}
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
          {orderDetails.items.map((item, index) => (
            <div className={cx("NowProductDetails yyy")} key={index}>
              <div className={cx("NowProductItem")}>
                <div className={cx("NowProductItemDetails")}>
                  <div className={cx("yyy")}>
                    <img
                      src={qr}
                      className={cx("NowProductItemDetaiimg")}
                      alt={item.productName}
                    />
                    <div className={cx("NowProductDescriptionContainer qqq")}>
                      <p className={cx("NowProductDescription")}>
                        {item.productName}
                      </p>
                      <p className={cx("NowProductReturnPolicy")}>
                        Đổi miễn phí trong 15 ngày
                      </p>
                    </div>
                  </div>
                  <div className={cx("NowProductPriceContainer yyy")}>
                    <p className={cx("NowProductPrice")}>
                      {item.price.toLocaleString()} đ
                    </p>
                    <p className={cx("NowProductQuantity")}>{item.quantity}</p>
                    <p className={cx("NowProductTotal")}>
                      {(item.price * item.quantity).toLocaleString()} đ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tin nhắn và vận chuyển */}
      <div className={cx("NowMessageAndShipping")}>
        <div className={cx("NowShippin1g")}>
          <div className={cx("NowMessage yyy")}>
            <p className={cx("NowMessageTitle")}>Lời nhắn:</p>
            <input
              className={cx("NowMessageTitle-input")}
              type="text"
              id="inputText"
              placeholder="Nhắn tin cho người bán"
            />
          </div>

          {/* Phương thức vận chuyển */}
          <div className={cx("NowShipping")}>
            <div className={cx("NowShippingMethodContainer yyy")}>
              <p className={cx("NowShippingMethodTitle")}>Đơn vị vận chuyển:</p>
              <p className={cx("NowShippingMethod")}>Nhanh</p>
              <Buychange_giaohang />
              <p className={cx("NowShippingCost")}>12.800 đ</p>
            </div>
          </div>

          {/* Tổng số tiền */}
          <div className={cx("NowTotalContainer")}>
            <div className={cx("NowTotalDetails yyy")}>
              <p className={cx("NowTotalTitle")}>Tổng số tiền</p>
              <p className={cx("NowTotalQuantity")}>
                {orderDetails.items.length}
              </p>
              <p className={cx("NowTotalProductTitle")}>sản phẩm</p>
            </div>
            <p className={cx("NowTotalAmount")}>
              {totalAmount.toLocaleString()} đ
            </p>
          </div>
        </div>
      </div>

      {/* Nút Mua Ngay */}
      <button onClick={handleSubmitOrder} className={cx("NowSubmitButton")}>
        Mua Ngay
      </button>
    </div>
  );
}

export default Buyyy;
