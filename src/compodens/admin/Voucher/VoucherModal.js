import React, { useState, useEffect } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const VoucherModal = ({ open, onClose, voucher, apiEndpoint }) => {
  const [formData, setFormData] = useState({
    code: "",
    discount: "",
    expiryDate: "",
    quantity: 0,
  });

  useEffect(() => {
    if (voucher) {
      setFormData({
        code: voucher.code,
        discount: voucher.discount,
        expiryDate: voucher.expiryDate,
        quantity: voucher.quantity,
      });
    } else {
      setFormData({
        code: "",
        discount: "",
        expiryDate: "",
        quantity: 0,
      });
    }
  }, [voucher, open]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (voucher) {
        await axios.put(`${apiEndpoint}/${voucher.id}`, formData);
      } else {
        await axios.post(apiEndpoint, formData);
      }
      onClose();
    } catch (error) {
      console.error("Error saving voucher:", error);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          {voucher ? "Update Voucher" : "Add Voucher"}
        </Typography>
        <TextField
          label="Code"
          name="code"
          value={formData.code}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Discount"
          name="discount"
          value={formData.discount}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Expiry Date"
          name="expiryDate"
          type="date"
          value={formData.expiryDate}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Quantity"
          name="quantity"
          type="number"
          value={formData.quantity}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          {voucher ? "Update" : "Add"}
        </Button>
      </Box>
    </Modal>
  );
};

export default VoucherModal;
