import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import styles from "./List_book_product.module.scss"; // Ensure this path is correct
import img_list from "./e3cc4c9bef8fc28dfef26231a0768701.jpg";

const cx = classNames.bind(styles);

function List_book_product() {
  const { productName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        const allProducts = response.data;

        // Filter products based on the search query (productName)
        const filteredProducts = allProducts.filter(
          (product) =>
            product.name &&
            product.name.toLowerCase().includes(productName.toLowerCase())
        );

        // Sort products based on the exact match and then partial match
        const sortedProducts = filteredProducts.sort((a, b) => {
          const aNameMatchExact =
            a.name && a.name.toLowerCase() === productName.toLowerCase();
          const bNameMatchExact =
            b.name && b.name.toLowerCase() === productName.toLowerCase();
          const aNameMatchPartial = a.name
            ? a.name.toLowerCase().includes(productName.toLowerCase())
            : false;
          const bNameMatchPartial = b.name
            ? b.name.toLowerCase().includes(productName.toLowerCase())
            : false;

          if (aNameMatchExact && !bNameMatchExact) return -1;
          if (!aNameMatchExact && bNameMatchExact) return 1;
          if (aNameMatchPartial && !bNameMatchPartial) return -1;
          if (!aNameMatchPartial && bNameMatchPartial) return 1;
          return 0;
        });

        setProducts(sortedProducts);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [productName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const renderCard = (product) => (
    <div key={product.id} className={cx("playcart")}>
      <Link className={cx("Nav-lin")} to={`/book/${product.id}`}>
        <div className={cx("card")}>
          <img className={cx("item-book")} src={img_list} alt={product.name} />
          <div>
            <h1 className={cx("Name-item")}>{product.name}</h1>
            <div className={cx("price-CART")}>
              <div className={cx("price-CAR3")}>
                <p className={cx("price-sale")}>{product.sale_price}</p>
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

export default List_book_product;
