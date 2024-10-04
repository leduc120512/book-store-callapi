import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./book-retail-module.scss";
import classnames from "classnames/bind";
import {
  faStar,
  faTag,
  faSyncAlt,
  faTruck,
  faMoneyBill,
  faBoxOpen,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../Cart-buggest/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useNavigate } from "react-router-dom";

const cx = classnames.bind(styles);

const BookRetail = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [bookData, setBookData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedStyle, setSelectedStyle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/products/${id}`
        );
        setBookData(response.data);
        setSelectedStyle(response.data.product_styles[0]); // Set default style to the first one
      } catch (error) {
        console.error("Error fetching book retail data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookData();
  }, [id]);

  const handleBuyNow = async () => {
    const newOrder = {
      customerName: null,
      customerContact: null,
      orderDate: new Date().toISOString().split("T")[0],
      orderStatus: "Processing",
      totalAmount: bookData.sale_price * quantity,
      paymentStatus: null,
      deliveryAddress: null,
      itemsOrdered: [
        {
          productName: bookData.name,
          quantity: quantity,
          price: bookData.sale_price,
          product_styles: selectedStyle,
        },
      ],
    };

    try {
      await axios.post("http://localhost:3000/orders", newOrder);
      navigate("/BUY");
    } catch (error) {
      console.error("Error creating new order:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!bookData) return <div>No product details available.</div>;

  const increaseQuantity = () => {
    if (quantity < bookData.stocking) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={cx("book-details")}>
      <div className={cx("item-details")}>
        <div className={cx("details-section")}>
          <p className={cx("favorite-label")}>Yêu Thích</p>
          <p className={cx("product-description")}>{bookData.name}</p>
        </div>
        <div className={cx("ratings-group")}>
          <div className={cx("rating-section duc12")}>
            <p className={cx("rating-value")}>{bookData.star}</p>
            <div className={cx("stars-wrapper")}>
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  className={cx("rating-value1")}
                  icon={faStar}
                  color={index < bookData.star ? "yellow" : "grey"}
                />
              ))}
            </div>
          </div>
          <div className={cx("reviews-detail duc12")}>
            <p className={cx("reviews-count")}>{bookData.evalu}</p>
            <p className={cx("reviews-label")}>Đánh Giá</p>
          </div>
          <div className={cx("sales-section duc12")}>
            <div className={cx("sold-detail duc12")}>
              <p className={cx("sold-count")}>{bookData.sold}</p>
              <p className={cx("sold-label")}>Đã Bán</p>
            </div>
          </div>
        </div>

        <div className={cx("pricing-details")}>
          <div className={cx("price-section duc12")}>
            <div className={cx("sale-price-wrapper duc12")}>
              <FontAwesomeIcon className={cx("sale-icon")} icon={faTag} />
              <p className={cx("sale-price")}>{bookData.sale_price}</p>
            </div>
            <div className={cx("original-price-wrapper duc12")}>
              <FontAwesomeIcon className={cx("sale-icon")} icon={faTag} />
              <p className={cx("original-price")}>{bookData.price}</p>
            </div>
          </div>
          <div className={cx("discount-section duc12")}>
            <p className={cx("discount-percentage")}>
              {((1 - bookData.sale_price / bookData.price) * 100).toFixed(2)}%
            </p>
          </div>
        </div>

        <div className={cx("shipping-details")}>
          <div className={cx("policy-section duc12")}>
            <p className={cx("policy-label")}>Mã Giảm Của Shop</p>
            <div className={cx("policy-detail")}>
              <p className={cx("refund-amount")}>Giảm 10k</p>
            </div>
          </div>
          <div className={cx("return-policy")}>
            <p className={cx("trahang")}>Chính Sách Trả Của Shop</p>
            <div className={cx("chuyen1")}>
              <FontAwesomeIcon icon={faSyncAlt} />
              <p className={cx("return-time")}>Trả Hàng trong 15 ngày</p>
              <p className={cx("free-exchange")}>Đổi Miễn Phí</p>
              <FontAwesomeIcon icon={faSyncAlt} />
            </div>
          </div>
          <div className={cx("promotion-section duc12")}>
            <p className={cx("promotion-label")}>Combo Khuyến Mãi</p>
            <Button className={cx("promotion-label-sale")} primary more>
              Mua 3 & giảm 1%
            </Button>
          </div>
          <div className={cx("chinh")}>
            <p className={cx("delivery-text")}>Vận Chuyển</p>
            <div className={cx("delivery-div")}>
              <div className={cx("delivery-div1 duc12")}>
                <FontAwesomeIcon icon={faTruck} />
                <p className={cx("free-shipping")}>Miễn Phí Vận Chuyển</p>
              </div>
              <div className={cx("hoai1")}>
                <div className={cx("delivery-div12 duc12")}>
                  <FontAwesomeIcon icon={faBoxOpen} />
                  <p className={cx("shipping-destination")}>Vận Chuyển Tới</p>
                  <p className={cx("destination-address")}>
                    Phường Trương Định
                  </p>
                </div>
                <div className={cx("duc12")}>
                  <p className={cx("shipping-fee-label")}>Phí Vận Chuyển</p>
                  <div className={cx("oi")}>
                    <FontAwesomeIcon icon={faMoneyBill} />
                    <p className={cx("shipping-fee")}>0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={cx("your-div-class-name")}>
          <div className={cx("your-div-class-name1")}>Lựa Chọn Sản Phẩm</div>
          <div className={cx("your-div-class-butoon")}>
            {bookData.product_styles.map((style, index) => (
              <Button
                key={index}
                primary
                more
                className={cx("button-class-2", {
                  selected: style === selectedStyle,
                })}
                onClick={() => setSelectedStyle(style)}
              >
                {style}
              </Button>
            ))}
          </div>
        </div>

        <div className={cx("another-div-class-name")}>
          <p>Số Lượng</p>
          <div className={cx("duc12")}>
            <FontAwesomeIcon
              className={cx("icon-")}
              icon={faMinus}
              onClick={decreaseQuantity}
            />
            <p>{quantity}</p>
            <FontAwesomeIcon
              className={cx("icon-")}
              icon={faPlus}
              onClick={increaseQuantity}
            />
            <div className={cx("duc12 chdddd")}>
              <p className={cx("product-current")}>{bookData.stocking}</p>
              <p>Sản phẩm có sẵn</p>
            </div>
          </div>
        </div>

        <div className={cx("duc12")}>
          <div className={cx("duc12")}>
            <div className={cx("button-wrapper")}>
              <Button
                className={cx("buy-now-button")}
                primary
                more
                onClick={handleBuyNow}
              >
                Mua Ngay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookRetail;
