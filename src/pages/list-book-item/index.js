import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import classNames from "classnames/bind";
import styles from "./list-book-item-modele.scss";
import axios from "axios";

import img_list from "./e3cc4c9bef8fc28dfef26231a0768701.jpg";

const cx = classNames.bind(styles);

function Cart() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        console.log(response.data); // Log the fetched data
        setProducts(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const renderCard = (product) => (
    <div key={product.id} className={cx("playcart")}>
      <a className={cx("Nav-lin")} href={`/book/${product.id}`}>
        <div className={cx("card")}>
          <img
            className={cx("item-book")}
            src={img_list}
            alt={product.name || "Product Image"}
          />
          <div>
            <h1 className={cx("Name-item")}>{product.name || "No Name"}</h1>
            <div className={cx("price-CART")}>
              <div className={cx("price-CAR3")}>
                <p className={cx("price-sale")}>
                  {product.sale_price
                    ? `$${product.sale_price}`
                    : "No Sale Price"}
                </p>
                <p className={cx("price")}>
                  {product.price ? `$${product.price}` : "No Price"}
                </p>
              </div>
              <div className={cx("price-CAR2")}>
                <p>
                  <span className={cx("sale-buggert")}>
                    {product.price && product.sale_price
                      ? Math.round(
                          ((product.price - product.sale_price) /
                            product.price) *
                            100
                        )
                      : 0}
                    %
                  </span>
                </p>
              </div>
            </div>
            <div className={cx("duc")}>
              <div className={cx("price-CART")}>
                <Rating
                  name="read-only"
                  value={Number(product.star) || 0}
                  readOnly
                />
              </div>
              <div className={cx("price-CART")}>
                <p className={cx("price-Text")}>Đã bán</p>
                <p className={cx("price-soluong")}>{product.sold || 0}</p>
              </div>
            </div>
            <div className={cx("Distance")}>
              <div className={cx("price-CART")}>
                <p className={cx("price-day")}>2-3 Ngày</p>
              </div>
              <div className={cx("price-CART")}>
                <p className={cx("diachi")}>Hà Nội</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );

  return (
    <div className={cx("LIST")}>
      {products.map((product) => renderCard(product))}
    </div>
  );
}

export default Cart;
