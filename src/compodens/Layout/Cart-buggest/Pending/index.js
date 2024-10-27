import styles from "./cart-ALL.module.scss";
import classnames from "classnames/bind";

import imgqr from "./d91264e165ed6facc6178994d5afae79.png";
import * as React from "react";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoneIcon from "@mui/icons-material/Done";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Evaluate from "../Evaluate";
import { useAuth } from "../../DefaultLayout/Login-LogOUT/LogOut/AuthProvider/AuthProvider";
import Notfound from "../../../../pages/iconLoad/NotFound";
import axios from "axios"; // Make sure to import axios
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Buttonn from "../../Cart-buggest/button";
import { Link } from "react-router-dom";
import Loadding from "../../../../pages/iconLoad/Loading";
const cx = classnames.bind(styles);
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function OrderHistory() {
  const { pendingOrders, user } = useAuth();
  const [orderDetails, setOrderDetails] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(null);

  // modal
  const [open1, setOpen1] = React.useState(false);
  const handleOpen = () => setOpen1(true);
  const handleClose = () => setOpen1(false);

  const fetchOrderDetails = async (userId, orderId) => {
    try {
      console.log(
        `Fetching order details for userId: ${userId}, orderId: ${orderId}`
      );
      const response = await axios.get(
        `http://localhost:8080/bookstore_api/api/detailorder/${userId}/${orderId}`
      );
      console.log("API response data:", response.data); // Check the response data
      setOrderDetails(response.data);
      setOpen(true); // Open modal after receiving data
    } catch (error) {
      console.error("Error fetching order details:", error);
      setError("Error fetching order details: " + error.message);
    }
  };

  return (
    <div className={cx("cart-container")}>
      {pendingOrders.length > 0 ? (
        pendingOrders.map((order) => (
          <div className={cx("cart-item")} key={order.orderId}>
            <div className={cx("item-favorites")}>
              <p className={cx("favorites-title")}>Yêu Thích</p>
              <div className={cx("item-status")}>
                <CheckCircleIcon className={cx("status-icon")} />

                <p className={cx("status-message")}>Mới Đặt</p>
              </div>
            </div>
            <div className={cx("product-details")}>
              <div className={cx("product-image-wrapper chinh")}>
                <div className={cx("product-description")}>
                  {/* Aggregate product names */}
                  <p className={cx("product-name")}>
                    {order.items.length > 10
                      ? order.items
                          .slice(0, 10)
                          .reduce((acc, item) => {
                            const existingProduct = acc.find(
                              (p) => p.productId === item.productId
                            );
                            if (existingProduct) return acc; // Skip if already added
                            acc.push(item);
                            return acc;
                          }, [])
                          .map((item) => item.productName)
                          .join(", ") + "..."
                      : order.items
                          .reduce((acc, item) => {
                            const existingProduct = acc.find(
                              (p) => p.productId === item.productId
                            );
                            if (existingProduct) return acc; // Skip if already added
                            acc.push(item);
                            return acc;
                          }, [])
                          .map((item) => item.productName)
                          .join(", ")}
                  </p>

                  {/* Aggregate category names */}
                  <p className={cx("product-category")}>
                    {order.items.length > 10
                      ? order.items
                          .slice(0, 10)
                          .reduce((acc, item) => {
                            const existingProduct = acc.find(
                              (p) => p.productId === item.productId
                            );
                            if (existingProduct) return acc; // Skip if already added
                            acc.push(item);
                            return acc;
                          }, [])
                          .map((item) => item.categoryName)
                          .join(", ") + "..."
                      : order.items
                          .reduce((acc, item) => {
                            const existingProduct = acc.find(
                              (p) => p.productId === item.productId
                            );
                            if (existingProduct) return acc; // Skip if already added
                            acc.push(item);
                            return acc;
                          }, [])
                          .map((item) => item.categoryName)
                          .join(", ")}
                  </p>

                  {/* Sum total quantities */}
                  <p className={cx("product-quantity")}>
                    x
                    {order.items.reduce((sum, item) => {
                      const existingProduct = order.items.find(
                        (p) => p.productId === item.productId
                      );
                      return (
                        sum + (existingProduct ? existingProduct.quantity : 0)
                      );
                    }, 0)}
                  </p>

                  <p className={cx("product-return-policy")}>
                    Trả Hàng miễn Phí trong 15 ngày
                  </p>
                </div>
              </div>

              <div className={cx("product-pricing chinh")}>
                <div className={cx("price-original")}>
                  <div className={cx("chinh")}>
                    <AttachMoneyIcon className={cx("price-icon1")} />
                    <p className={cx("price-value")}>
                      {order.totalPrice.toLocaleString()} VND
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("checkout-section")}>
              <div className={cx("product-review-section")}>
                <div className={cx("review-deadline")}>
                  <div className={cx("deadline-message")}>
                    <p className={cx("deadline-instruction")}>
                      Đơn Hàng Được Đặt
                    </p>
                    <p className={cx("deadline-date")}>{order.dateOrder}</p>
                  </div>
                  <p className={cx("review-prompt")}>
                    Đánh giá ngay và nhận 200 xu
                  </p>
                </div>
              </div>
              <div className={cx("total-price-wrapper")}>
                <div className={cx("chinh")}>
                  <ShoppingBagIcon className={cx("total-price-icon")} />
                  <p className={cx("total-price-label")}>Thành tiền :</p>
                  <p className={cx("total-price-label1")}>{order.totalPrice}</p>
                </div>
                <div className={cx("action-buttons")}>
                  <Buttonn
                    className={cx("actddsssion-buttons")}
                    primary1
                    onClick={() => {
                      fetchOrderDetails(user.userId, order.orderId);
                      handleOpen(); // Mở modal sau khi lấy dữ liệu
                    }}
                  >
                    Xem Đơn Hàng Chi Tiết
                  </Buttonn>
                  <Modal
                    open={open1}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      className={cx("product-sssdetails-container")}
                      sx={style}
                    >
                      {orderDetails && orderDetails.length > 0 ? (
                        <div>
                          {orderDetails
                            .reduce((acc, product) => {
                              const existingProduct = acc.find(
                                (p) => p.productId === product.productId
                              );
                              if (existingProduct) {
                                existingProduct.quantity += product.quantity; // Sum the quantities
                              } else {
                                acc.push({ ...product }); // Add new product
                              }
                              return acc;
                            }, [])
                            .map((product) => (
                              <div
                                className={cx("product-box")}
                                key={product.productId}
                              >
                                <a
                                  href={`/book/${product.productId}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <div className={cx("div_classmain")}>
                                    <div className={cx("div_class")}>
                                      <img
                                        src={product.image}
                                        alt={`Hình ảnh của ${product.productName}`}
                                        width="100"
                                        className={cx("product-image")}
                                      />
                                      <div className={cx("product-info")}>
                                        <p>
                                          <strong>Product ID:</strong>{" "}
                                          {product.productId}
                                        </p>
                                        <p>
                                          <strong>Sản phẩm:</strong>{" "}
                                          {product.productName}
                                        </p>
                                        <p>
                                          <strong>Thể loại:</strong>{" "}
                                          {product.categoryName}
                                        </p>
                                        <p>
                                          <strong>Số lượng:</strong>{" "}
                                          {product.quantity}
                                        </p>
                                        <p>
                                          <strong>Giá:</strong>{" "}
                                          {product.price.toLocaleString()} VND
                                        </p>
                                      </div>
                                    </div>
                                    <Buttonn primary1 className={cx("lhd")}>
                                      <a href={`/book/${product.productId}`}>
                                        Xem Chi Tiết
                                      </a>
                                    </Buttonn>
                                  </div>
                                </a>
                              </div>
                            ))}
                        </div>
                      ) : (
                        <Loadding />
                      )}
                      <Buttonn
                        className={cx("jfsd")}
                        primary1
                        onClick={handleClose}
                      >
                        Thoát
                      </Buttonn>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className={cx("xoagacsdfsdfhchanss")}>
          <Notfound />
        </div>
      )}
    </div>
  );
}

export default OrderHistory;
