import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames/bind";
import { searchProducts } from "./api";
import styles from "./search1-module.scss";
import { useNavigate } from "react-router-dom";

const cx = classnames.bind(styles);

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const menuRef = useRef(null);
  const noResultsTimeoutRef = useRef(null);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleSearch = async () => {
      if (debouncedSearchQuery.trim() === "") {
        setProducts([]);
        setShowMenu(false);
        setNoResults(false);
        return;
      }
      try {
        const result = await searchProducts(debouncedSearchQuery);
        if (result.length > 0) {
          setProducts(result);
          setShowMenu(true);
          setNoResults(false);
          clearTimeout(noResultsTimeoutRef.current);
        } else {
          setProducts([]);
          setShowMenu(false);
          clearTimeout(noResultsTimeoutRef.current);
          noResultsTimeoutRef.current = setTimeout(() => {
            setNoResults(true);
          }, 3000); // Delay of 3 seconds
        }
      } catch (error) {
        console.error("Error searching products:", error);
      }
    };

    handleSearch();
  }, [debouncedSearchQuery]);

  const handleProductClick = (productName) => {
    setShowMenu(false);
    navigate(`/search/${productName}`);
  };

  return (
    <div className={cx("container")}>
      <div className={cx("searchBar")}>
        <input
          className={cx("inputField")}
          placeholder="Search for products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowMenu(true)}
        />
        <button className={cx("searchButton")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      {showMenu && (
        <div className={cx("menuContainer")} ref={menuRef}>
          {noResults ? (
            <div className={cx("noResults")}>No products found</div>
          ) : (
            <div className={cx("productContainer")}>
              {products.map((product) => (
                <div
                  key={product.id}
                  className={cx("productItem")}
                  onClick={() => handleProductClick(product.name)}
                >
                  <div className={cx("productName")}>{product.name}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
