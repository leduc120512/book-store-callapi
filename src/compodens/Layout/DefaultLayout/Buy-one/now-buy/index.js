import React, { useState, useEffect } from "react";
import styles from "./Now-buy-module.scss";
import Dissacount_Code from "../Dissacount_code";
import Buttonn from "../button"; //button
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const cx = classnames.bind(styles);

function Button_fix() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Example of fetching data from an API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/data");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData); // Assuming your API returns an array of data objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={cx("sidebar-container")}>
      <div className={cx("voucher-section")}>
        <div className={cx("share-item-container")}>
          <p className={cx("voucher-text")}> Voucher</p>
        </div>
        <div>
          {/* Example of rendering data from API */}
          {data.map((item) => (
            <p key={item.id}>
              {item.name}: {item.value}
            </p>
          ))}
        </div>
        <Dissacount_Code className={cx("choose-input-text")} />
      </div>
      <div className={cx("checkout-section")}>
        <div className={cx("select-all-container")}>
          <p className={cx("select-all-text")}>Chọn Tất cả :</p>
          <p className={cx("item-count")}>{data.length}</p>
        </div>
        <p className={cx("delete-text")}>Xóa</p>{" "}
        <div className={cx("product-count-list")}>
          <p className={cx("total-payment-text")}>Tổng Thanh Toán : </p>
          <p className={cx("product-count")}>{data.length} Sản Phẩm </p>{" "}
        </div>
        <p className={cx("total-price")}>125.000</p>
        <Link to="/Buy_pay">
          <Buttonn primary className={cx("buy-now-button")}>
            Mua Ngay
          </Buttonn>
        </Link>
      </div>
    </div>
  );
}

export default Button_fix;
