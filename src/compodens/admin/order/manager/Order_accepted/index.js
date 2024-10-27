import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  TableSortLabel,
} from "@mui/material";
import classnames from "classnames/bind";
import styles from "./orrder-module.scss";

const cx = classnames.bind(styles);

const OrderTable = () => {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios
      .get("http://localhost:3000/orders")
      .then((response) => {
        const acceptedOrders = response.data.filter(
          (order) => order.accept === true
        );
        setOrders(acceptedOrders);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleDelivery = (id) => {
    axios
      .patch(`http://localhost:3000/orders/${id}`, { orderStatus: "Delivered" })
      .then((response) => {
        setOrders(
          orders.map((order) =>
            order.id === id ? { ...order, orderStatus: "Delivered" } : order
          )
        );
      })
      .catch((error) => console.error("Error updating status:", error));
  };

  const handleCancel = (id) => {
    axios
      .patch(`http://localhost:3000/orders/${id}`, { accept: null })
      .then(() => {
        setOrders(
          orders.map((order) =>
            order.id === id ? { ...order, accept: null } : order
          )
        );
      })
      .catch((error) => console.error("Error updating accept status:", error));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const filteredOrders = orders
    .filter(
      (order) =>
        order.id.includes(searchTerm) ||
        order.customerContact.includes(searchTerm) ||
        order.orderDate.includes(searchTerm)
    )
    .filter((order) => {
      if (startDate && endDate) {
        const orderDate = new Date(order.orderDate);
        const start = new Date(startDate);
        const end = new Date(endDate);
        return orderDate >= start && orderDate <= end;
      }
      return true;
    });

  const sortedOrders = filteredOrders.sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  return (
    <TableContainer component={Paper}>
      {/* //scss ở order_manager_module.scss   */}
      <div className={cx("Order_input")}>
        <TextField
          label="Search by ID, Email, Date"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchTerm}
          onChange={handleSearch} className={cx("Order_input_search")}
        />
        <TextField
          label="Start Date"
          variant="outlined"
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          style={{ marginRight: "10px" }}
          InputLabelProps={{ shrink: true }}className={cx("Order_input_date")}

        />
        <TextField
          label="End Date"
          variant="outlined"
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          style={{ marginRight: "10px" }}
          InputLabelProps={{ shrink: true }}
          className={cx("Order_input_date")}
        />
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={cx("Order_table")}>Customer Name</TableCell>
            <TableCell className={cx("Order_table")}>Contact</TableCell>
            <TableCell className={cx("Order_table")}>
              <TableSortLabel
                active={sortConfig.key === "orderDate"}
                direction={sortConfig.direction}
                onClick={() => handleSort("orderDate")}
              >
                Order Date
              </TableSortLabel>
            </TableCell>
            <TableCell className={cx("Order_table")}>
              <TableSortLabel
                active={sortConfig.key === "totalAmount"}
                direction={sortConfig.direction}
                onClick={() => handleSort("totalAmount")}
              >
                Total Amount
              </TableSortLabel>
            </TableCell>
            <TableCell className={cx("Order_table")}>Payment Status</TableCell>
            <TableCell className={cx("Order_table")}>Delivery Address</TableCell>
            <TableCell className={cx("Order_table")}>Delivery</TableCell>
            <TableCell className={cx("Order_table")}>Cancel</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className={cx("Order_table")}>{order.customerName}</TableCell>
              <TableCell className={cx("Order_table")}>{order.customerContact}</TableCell>
              <TableCell className={cx("Order_table")}>{order.orderDate}</TableCell>
              <TableCell className={cx("Order_table")}>{order.totalAmount}</TableCell>
              <TableCell className={cx("Order_table")}>{order.paymentStatus}</TableCell>
              <TableCell className={cx("Order_table")}>{order.deliveryAddress}</TableCell>
              <TableCell className={cx("Order_table")}>
                {order.orderStatus === "Processing" ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleDelivery(order.id)}
                  >
                    Delivered to Carrier
                  </Button>
                ) : (
                  "Delivered"
                )}
              </TableCell>
              <TableCell className={cx("Order_table")}>
                {order.orderStatus === "Processing" && (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleCancel(order.id)}
                  >
                    Cancel
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
