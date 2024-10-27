import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import classnames from "classnames/bind";
import styles from "../Voucher-moudules.scss";

import VoucherModal from "../VoucherModal";

const cx = classnames.bind(styles);
const VoucherTable = ({
  apiEndpoint = "http://localhost:3000/freeshipVouchers",
}) => {
  const [vouchers, setVouchers] = useState([]);
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [discountSearch, setDiscountSearch] = useState("");

  useEffect(() => {
    fetchVouchers();
  }, [apiEndpoint]);

  const fetchVouchers = async () => {
    try {
      const response = await axios.get(apiEndpoint);
      setVouchers(response.data);
    } catch (error) {
      console.error("Error fetching vouchers:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiEndpoint}/${id}`);
      fetchVouchers();
    } catch (error) {
      console.error("Error deleting voucher:", error);
    }
  };

  const handleOpen = (voucher) => {
    setSelectedVoucher(voucher);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedVoucher(null);
    setOpen(false);
    fetchVouchers();
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDiscountSearchChange = (event) => {
    setDiscountSearch(event.target.value);
  };

  const filteredVouchers = vouchers.filter((voucher) => {
    const isMatchCode = voucher.code
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    let isMatchDiscount = true;

    if (discountSearch) {
      if (discountSearch.startsWith("<=")) {
        const maxDiscount = parseFloat(discountSearch.substring(2));
        isMatchDiscount = voucher.discount <= maxDiscount;
      } else if (discountSearch.startsWith("<")) {
        const maxDiscount = parseFloat(discountSearch.substring(1));
        isMatchDiscount = voucher.discount < maxDiscount;
      } else if (discountSearch.startsWith(">=")) {
        const minDiscount = parseFloat(discountSearch.substring(2));
        isMatchDiscount = voucher.discount >= minDiscount;
      } else if (discountSearch.startsWith(">")) {
        const minDiscount = parseFloat(discountSearch.substring(1));
        isMatchDiscount = voucher.discount > minDiscount;
      } else if (discountSearch.includes("-")) {
        const [min, max] = discountSearch
          .split("-")
          .map((num) => parseFloat(num));
        isMatchDiscount = voucher.discount >= min && voucher.discount <= max;
      } else {
        const exactDiscount = parseFloat(discountSearch);
        if (!isNaN(exactDiscount)) {
          isMatchDiscount = voucher.discount === exactDiscount;
        }
      }
    }

    return isMatchCode && isMatchDiscount;
  });
  //in scss Order_table
  return (
    <div>
      <div className={cx("Order_list")}>
        <div
          className={cx("voucher_div")}
          style={{ display: "flex", gap: "16px", margin: "16px 0" }}
        >
          <TextField
            label="Search by Code"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            className={cx("Order_input_search")}
          />
          <TextField
            label="Discount Search (%)"
            variant="outlined"
            value={discountSearch}
            onChange={handleDiscountSearchChange}
            style={{ marginBottom: "16px", marginTop: "16px" }}
            className={cx("Order_input_date")}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpen(null)}
        >
          Add Voucher
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={cx("Order_table")}>Code</TableCell>
              <TableCell className={cx("Order_table")}>Discount</TableCell>
              <TableCell className={cx("Order_table")}>Expiry Date</TableCell>
              <TableCell className={cx("Order_table")}>Quantity</TableCell>
              <TableCell className={cx("Order_table")}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredVouchers.map((voucher) => (
              <TableRow key={voucher.id}>
                <TableCell className={cx("Order_table")}>
                  {voucher.code}
                </TableCell>
                <TableCell className={cx("Order_table")}>
                  {voucher.discount}
                </TableCell>
                <TableCell className={cx("Order_table")}>
                  {voucher.expiryDate}
                </TableCell>
                <TableCell className={cx("Order_table")}>
                  {voucher.quantity}
                </TableCell>
                <TableCell className={cx("Order_table")}>
                  <Button
                    variant="contained"
                    onClick={() => handleOpen(voucher)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => handleDelete(voucher.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <VoucherModal
        open={open}
        onClose={handleClose}
        voucher={selectedVoucher}
        apiEndpoint={apiEndpoint}
      />
    </div>
  );
};

export default VoucherTable;
