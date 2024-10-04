import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { updateData, createData } from "../api";

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

const scrollableContainerStyle = {
  maxHeight: "60vh", // Adjust as needed
  overflow: "auto",
};

export default function PostUpdateModal({
  open,
  handleClose,
  product,
  isUpdate,
  handleAddProduct,
  handleUpdateProduct,
}) {
  const [formData, setFormData] = useState({
    id: "",
    category: "",
    name: "",
    thumbnail: "",
    price: "",
    salePrice: "",
    star: "",
    evalu: "",
    sold: "",
    stock: "",
    sout_out: false,
    date: "",
    featured: false,
    newProduct: false,
    notes: "",
    top:"",
  });

  useEffect(() => {
    if (isUpdate && product) {
      setFormData(product);
    } else {
      setFormData({
        id: "",
        category: "",
        name: "",
        thumbnail: "",
        price: "",
        salePrice: "",
        star: "",
        evalu: "",
        sold: "",
        stock: "",
        sout_out: false,
        date: "",
        featured: false,
        newProduct: false,
        notes: "",
        top:"",
      });
    }
  }, [isUpdate, product]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isUpdate) {
      try {
        await updateData(formData);
        handleUpdateProduct(formData);
      } catch (error) {
        console.error("Error updating product:", error);
      }
    } else {
      handleAddProduct(formData);
    }
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style} component="form" onSubmit={handleSubmit}>
        <Box sx={scrollableContainerStyle}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="id"
            label="ID"
            name="id"
            value={formData.id}
            onChange={handleChange}
            disabled={isUpdate}
            style={{ fontSize: "16px" }}
            InputLabelProps={{ style: { fontSize: "16px" } }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="category"
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={{ fontSize: "16px" }}
            InputLabelProps={{ style: { fontSize: "16px" } }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ fontSize: "16px" }}
            InputLabelProps={{ style: { fontSize: "16px" } }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="thumbnail"
            label="Thumbnail URL"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            style={{ fontSize: "16px" }}
            InputLabelProps={{ style: { fontSize: "16px" } }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="price"
            label="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            style={{ fontSize: "16px" }}
            InputLabelProps={{ style: { fontSize: "16px" } }}
          />
          <TextField
            margin="normal"
            fullWidth
            id="salePrice"
            label="Sale Price"
            name="salePrice"
            value={formData.salePrice}
            onChange={handleChange}
            style={{ fontSize: "16px" }}
            InputLabelProps={{ style: { fontSize: "16px" } }}
          />
          <TextField
            margin="normal"
            fullWidth
            id="star"
            label="Star"
            name="star"
            value={formData.star}
            onChange={handleChange}
            style={{ fontSize: "16px" }}
            InputLabelProps={{ style: { fontSize: "16px" } }}
          />
          <TextField
            margin="normal"
            fullWidth
            id="evalu"
            label="Evaluation"
            name="evalu"
            value={formData.evalu}
            onChange={handleChange}
            style={{ fontSize: "16px" }}
            InputLabelProps={{ style: { fontSize: "16px" } }}
          />
          <TextField
            margin="normal"
            fullWidth
            id="sold"
            label="Sold"
            name="sold"
            value={formData.sold}
            onChange={handleChange}
            style={{ fontSize: "16px" }}
            InputLabelProps={{ style: { fontSize: "16px" } }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="stock"
            label="Stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            style={{ fontSize: "16px" }}
            InputLabelProps={{ style: { fontSize: "16px" } }}
          />
          <TextField
            margin="normal"
            fullWidth
            id="notes"
            label="Notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            style={{ fontSize: "16px" }}
            InputLabelProps={{ style: { fontSize: "16px" } }}
          />
           <TextField
            margin="normal"
            fullWidth
            id="top"
            label="top"
            name="top"
            value={formData.top}
            onChange={handleChange}
            style={{ fontSize: "16px" }}
            InputLabelProps={{ style: { fontSize: "16px" } }}
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ fontSize: "16px" }}
          >
            {isUpdate ? "Update Product" : "Add Product"}
          </Button>
          <Button
  type="button"
  variant="contained"
  color="secondary"
  onClick={handleClose} // Thay đổi ở đây
  style={{ fontSize: "16px" }}
>
  Close
</Button>
        </Box>
      </Box>
    </Modal>
  );
}
