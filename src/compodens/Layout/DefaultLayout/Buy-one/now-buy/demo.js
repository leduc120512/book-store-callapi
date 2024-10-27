import React, { useState, useEffect } from "react";
import styles from "./Now-buy-module.scss";
import Dissacount_Code from "../Dissacount_code";
import Buttonn from "../button"; //button
import classnames from "classnames/bind";
import { useAuth } from "../Login-LogOUT/LogOut/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const cx = classnames.bind(styles);

function Button_fix() {
  const { cartItems, user, clearCart } = useAuth();
  const navigate = useNavigate();

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPr = cartItems.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    setTotalQuantity(totalQty);
    setTotalPrice(totalPr);
  }, [cartItems]);

  const handleBuyNow = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.id,
          shipping_address: "Địa chỉ giao hàng",
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Đặt hàng thành công:", data);
        clearCart(); // Xóa giỏ hàng sau khi đặt hàng thành công
        navigate("/order-success");
      } else {
        const errorText = await response.text();
        console.error("Đặt hàng thất bại:", errorText);
        alert("Đặt hàng thất bại: " + errorText);
      }
    } catch (error) {
      console.error("Lỗi khi gọi API đặt hàng:", error);
      alert("Đã xảy ra lỗi khi đặt hàng.");
    }
  };

  return (
    <div className={cx("sidebar-container")}>
      <div className={cx("voucher-section")}>
        <div className={cx("share-item-container")}>
          <p className={cx("voucher-text")}>Voucher</p>
        </div>
        <Dissacount_Code className={cx("choose-input-text")} />
      </div>
      <div className={cx("checkout-section")}>
        <div className={cx("select-all-container")}>
          <p className={cx("select-all-text")}>Chọn Tất cả :</p>
          <p className={cx("item-count")}>{totalQuantity}</p>
        </div>
        <p className={cx("delete-text")}>Xóa</p>
        <div className={cx("product-count-list")}>
          <p className={cx("total-payment-text")}>Tổng Thanh Toán:</p>
          <p className={cx("product-count")}>{totalQuantity} Sản Phẩm</p>
        </div>
        <p className={cx("total-price")}>{totalPrice.toLocaleString()} VND</p>
        <Buttonn
          primary
          className={cx("buy-now-button")}
          onClick={handleBuyNow}
        >
          Mua Ngay
        </Buttonn>
      </div>
    </div>
  );
}

export default Button_fix;
