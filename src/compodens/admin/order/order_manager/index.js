import React, { useEffect, useState } from "react";
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
import { fetchData, updateData } from "./api";
import classnames from "classnames/bind";
import styles from "./order_manager_module.scss";

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

  const fetchOrders = async () => {
    try {
      const data = await fetchData();
      const filteredOrders = data.filter((order) => order.accept === true || order.accept === null);
      setOrders(filteredOrders);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  const handleAccept = async (id) => {
    try {
      await updateData(id, { accept: true });
      fetchOrders(); // Refresh the orders list after updating
    } catch (error) {
      console.error("Error updating accept status:", error);
    }
  };

  const handleCancelAccept = async (id) => {
    try {
      await updateData(id, { accept: false });
      fetchOrders(); // Refresh the orders list after updating
    } catch (error) {
      console.error("Error updating accept status:", error);
    }
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
      <div  className={cx("Order_input")}>
        <TextField
          label="Search by ID, Email, Date"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchTerm}
          onChange={handleSearch}
          className={cx("Order_input_search")}
        />
        <TextField
          label="Search Start Date"
          className={cx("Order_input_date")}
          variant="outlined"
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
      
          InputLabelProps={{ shrink: true }}
        />
        <TextField
         className={cx("Order_input_date")}
          label="Search End Date"
          variant="outlined"
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
   
          InputLabelProps={{ shrink: true }}
        />
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={cx("Order_table")}>Customer Name</TableCell>
            <TableCell className={cx("Order_table")}>Contact</TableCell>
            <TableCell className={cx("Order_table")} > <TableSortLabel
                active={sortConfig.key === "totalAmount"}
                direction={sortConfig.direction}
                onClick={() => handleSort("totalAmount")}
                >
                  Total Amount
                </TableSortLabel></TableCell>
            <TableCell className={cx("Order_table")}>
              <TableSortLabel
                active={sortConfig.key === "orderDate"}
                direction={sortConfig.direction}
                onClick={() => handleSort("orderDate")}
              >
                Order Date
              </TableSortLabel>
            </TableCell>
            <TableCell className={cx("Order_table")} >
            paymentStatus
            </TableCell>
            <TableCell className={cx("Order_table")}>deliveryAddress</TableCell>
            <TableCell className={cx("Order_table ddds" )}>itemsOrdered</TableCell>
            <TableCell className={cx("Order_table")}>Accept</TableCell>
            <TableCell className={cx("Order_table")}>Cancel Accept</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className={cx("Order_table")}>{order.customerName}</TableCell>
              <TableCell className={cx("Order_table")}>{order.customerContact}</TableCell>
              <TableCell className={cx("Order_table")}>{order.totalAmount}</TableCell>
              <TableCell className={cx("Order_table")}>{order.orderDate}</TableCell>
           
              <TableCell className={cx("Order_table")}>{order.paymentStatus}</TableCell>
              <TableCell className={cx("Order_table")}>{order.deliveryAddress}</TableCell>
              <TableCell className={cx("Order_table")}>
              <ul>
                {order.itemsOrdered.map((item, index) => (
                  <li  className={cx("Order_tableli")}key={index}>
                    {item.productName} - {item.quantity} x {item.price} VND - {item.product_styles}
                  </li>
                ))}
              </ul>
            </TableCell>
              <TableCell className={cx("Order_table")}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAccept(order.id)}
                >
                  Accept
                </Button>
              </TableCell>
              <TableCell className={cx("Order_table")}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleCancelAccept(order.id)}
                >
                  Cancel Accept
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
