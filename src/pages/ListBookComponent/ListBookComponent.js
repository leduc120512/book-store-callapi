import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import axios from "axios";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import styles from ".././list-book-item/list-book-item-modele.scss"; // Assuming this file exists
// Replace with correct image path if needed

const cx = classNames.bind(styles);

function ListBookComponent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/bookstore_api/api/products"
        );
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
    <div key={product.productId} className={cx("playcart")}>
      <Link className={cx("Nav-lin")} to={`/book/${product.id}`}>
        <div className={cx("card")}>
          <img
            className={cx("item-book")}
            src={product.image}
            alt={product.name}
          />
          <div>
            <h1 className={cx("Name-item")}>{product.name}</h1>
            <div className={cx("price-CART")}>
              <div className={cx("price-CAR3")}>
                <p className={cx("price-sale")}> Stock: {product.stock}</p>
                <p className={cx("price")}>{product.price}</p>
              </div>
              <div className={cx("price-CAR2")}>
                <p>
                  <span className={cx("sale-buggert")}>
                    {Math.round(
                      ((product.price - product.sale_price) / product.price) *
                        100
                    )}
                    %
                  </span>
                </p>
              </div>
            </div>
            <div className={cx("duc")}>
              <div className={cx("price-CART")}>
                <Rating
                  name="read-only"
                  value={Number(product.star)}
                  readOnly
                />
              </div>
              <div className={cx("price-CART")}>
                <p className={cx("price-Text")}>Đã bán</p>
                <p className={cx("price-soluong")}>{product.sold}</p>
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
      </Link>
    </div>
  );

  return (
    <div className={cx("LIST")}>
      {products.map((product) => renderCard(product))}
    </div>
  );
}

export default ListBookComponent;
