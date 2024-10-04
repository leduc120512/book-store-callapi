import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames/bind";
import { searchProductsByCategory } from "./api";
import styles from "./search3-module.scss";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Link, useNavigate } from "react-router-dom";

const cx = classnames.bind(styles);

function valuetext(value) {
  return `${value} vnđ`;
}

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

function Search_3() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [noPriceMatch, setNoPriceMatch] = useState(false); // Add state for no price match
  const menuRef = useRef(null);
  const noResultsTimeoutRef = useRef(null);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const navigate = useNavigate();

  // Input for price range
  const [value, setValue] = useState([20000, 2000000]);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

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

  const handleSearch = async () => {
    if (debouncedSearchQuery.trim() === "") {
      setProducts([]);
      setShowMenu(false);
      setNoResults(false);
      setNoPriceMatch(false); // Reset no price match
      return;
    }
    try {
      const result = await searchProductsByCategory(
        debouncedSearchQuery,
        value
      );
      if (result.length > 0) {
        setProducts(result);
        setShowMenu(true);
        setNoResults(false);
        setNoPriceMatch(false); // Reset no price match
        clearTimeout(noResultsTimeoutRef.current);
      } else {
        setProducts([]);
        setShowMenu(true);
        setNoPriceMatch(true); // Set no price match
        clearTimeout(noResultsTimeoutRef.current);
        noResultsTimeoutRef.current = setTimeout(() => {
          setNoResults(true);
        }, 3000); // Delay of 3 seconds
      }
    } catch (error) {
      console.error("Error searching products by category:", error);
    }
  };

  useEffect(() => {
    if (debouncedSearchQuery.trim() !== "") {
      handleSearch();
    }
  }, [debouncedSearchQuery, value]);

  const handleCategoryClick = (category) => {
    window.location.href = `/category/${category}`;
  };

  return (
    <div className={cx("back-group")}>
      <h4>Tìm Kiếm Thể Loại</h4>
      <div className={cx("search3")}>
        <input
          className={cx("input3")}
          placeholder="Thể loại - Giá thành"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowMenu(true)}
        />
        <button className={cx("search-btn3")} onClick={handleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      {showMenu && (
        <div className={cx("menuContainer_catacorty")} ref={menuRef}>
          {noResults ? (
            <div className={cx("noResults")}>No products found</div>
          ) : (
            <div className={cx("productContainer")}>
              <div className={cx("input_search")}>
                <TextField
                  id="outlined-start-adornment"
                  sx={{ m: 1 }}
                  value={value[0]}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">vnđ</InputAdornment>
                    ),
                  }}
                  className={cx("input_item")}
                  onChange={(e) => setValue([+e.target.value, value[1]])}
                />
                <TextField
                  id="outlined-start-adornment"
                  sx={{ m: 1 }}
                  value={value[1]}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">vnđ</InputAdornment>
                    ),
                  }}
                  className={cx("input_item")}
                  onChange={(e) => setValue([value[0], +e.target.value])}
                />
              </div>
              <Box className={cx("Slider_item")}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleSliderChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  className={cx("Slider_item")}
                  min={0}
                  max={2000000}
                />
              </Box>
              {noPriceMatch && (
                <p className={cx("noPriceMatch")}>Vui lòng tìm giá khác</p>
              )}
              {products.map((product) => (
                <Link
                  key={product.category}
                  className={cx("productItem")}
                  to={`/category/${product.category}`}
                >
                  <div className={cx("productCategory")}>
                    {product.category}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Search_3;
