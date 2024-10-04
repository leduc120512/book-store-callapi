import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classnames from "classnames/bind";
import styles from "./book-item-module.scss";
import Book_img from "./book-img";
import Book_retail from "./book-retail";
import Evaluate_bool_item from "./book-Evaluate";

const cx = classnames.bind(styles);

function BookItem() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className={cx("main-item-container")}>
      <div className={cx("book-item-container")}>
        <div className={cx("book-item-1")}>
          <Book_img />
        </div>
        <div className={cx("book-item-2")}>
          <Book_retail product={product} />
        </div>
      </div>
      <div className={cx("book-item-3")}>
        <p className={cx("book-item-p")}>Mô Tả Sản Phẩm</p>
        <span>{product.description}</span>
        <span>
          Hỗ trợ kỹ thuật 24/24 Hỗ trợ giá cạnh tranh, cam kết giá tốt nhất Việt
          Nam
        </span>
        <br />
        <span>Giá trên áp dụng số lượng lớn hơn 10, mua ít giá +10%</span>
        <hr />
        <span>
          L102 nhập khẩu bảo hành 24 tháng L102 chính hãng (nội địa trung- nhẹ
          hơn bản hãng VN, chất lượng cực cao - BH 24 tháng) L102 chính hãng
          (bản Việt Nam- tem ninza, chất lượng cực cao - BH 24 tháng)
        </span>
        <hr />
        <span>☎️ Hotline 024 3377 1777 ☎️ Đường dây nóng: 0972 301 867</span>
        <span>
          Thông tin kỹ thuật: - Hãng sản xuất: Fuhlen - Mã sản phẩm: Fuhlen-L102
          - Màu sắc: Đen - Cổng kết nối: USB - Kiểu kết nối: Có dây, quang - Độ
          nhạy: 1000dpi - Trọng lượng: 100g
        </span>
        <span>
          ► Tổng quan sản phẩm Chuột game Fuhlen L102 tại hà nội có màu đen chủ
          đạo với thiết kế Ergonomic khỏe khoẳn, cầm khá vừa tay và thoải mái để
          người dùng có thể thao tác, sử dụng trong một thời gian dài mà không
          có cảm giác bị mỏi tay và khó chịu.
        </span>
        ...
      </div>
      <div className={cx("book-item-feetback-khachhanfg")}>
        <Evaluate_bool_item />
      </div>
    </div>
  );
}

export default BookItem;
