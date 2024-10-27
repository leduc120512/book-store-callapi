import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, Button, Grid, CircularProgress, Box } from "@mui/material";
import {
  fetchData,
  deleteData,
  deleteMultipleData,
  createData,
  updateData,
} from "./api";
import PostUpdateModal from "./post_update";
import classnames from "classnames/bind";
import styles from "./Product_manager-module.scss";

const cx = classnames.bind(styles);

const columns = (handleEdit, handleDelete) => [
  {
    field: "id",
    headerName: "ID",
    headerClassName: cx("custom-header-id"),
    width: 30,
    headerAlign: "center",
    renderCell: ({ value }) => <div className={cx("fontsize")}>{value}</div>,
  },
  {
    field: "category",
    headerName: "Category",
    width: 130,
    headerClassName: cx("custom-header-id"),
    headerAlign: "center",
    renderCell: ({ value }) => <div className={cx("fontsize")}>{value}</div>,
  },
  {
    field: "name",
    headerName: "Namwwe",
    width: 130,
    headerClassName: cx("custom-header-id"),
    fontSize: "15px",
    headerAlign: "center",
    renderCell: ({ value }) => <div className={cx("fontsize")}>{value}</div>,
  },
  {
    field: "thumbnail",
    headerName: "Thumbnail",
    width: 100,
    headerClassName: cx("custom-header-id"),
    headerAlign: "center",
    renderCell: ({ value, row }) => (
      (<img src={value} alt={row.name} width="50" />),
      (<div className={cx("fontsize dich")}>{value}</div>)
    ),
  },
  {
    field: "price",
    headerName: "Price",
    width: 50,
    headerClassName: cx("custom-header-id"),
    headerAlign: "center",
    renderCell: ({ value }) => <div className={cx("fontsize")}>{value}</div>,
  },
  {
    field: "salePrice",
    headerName: "Sale Price",
    width: 100,
    headerClassName: cx("custom-header-id"),
    headerAlign: "center",
    renderCell: ({ value }) => <div className={cx("fontsize")}>{value}</div>,
  },
  {
    field: "star",
    headerName: "Star",
    width: 100,
    headerClassName: cx("custom-header-id"),
    headerAlign: "center",
    renderCell: ({ value }) => (
      <div className={cx("fontsize dich")}>{value}</div>
    ),
  },
  {
    field: "evalu",
    headerName: "Evaluation",
    width: 100,
    headerClassName: cx("custom-header-id"),
    headerAlign: "center",
    renderCell: ({ value }) => (
      <div className={cx("fontsize dddw")}>{value}</div>
    ),
  },
  {
    field: "sold",
    headerName: "Sold",
    width: 100,
    headerClassName: cx("custom-header-id"),
    headerAlign: "center",
    renderCell: ({ value }) => (
      <div className={cx("fontsize dddw")}>{value}</div>
    ),
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 100,
    headerAlign: "center",
    headerClassName: cx("custom-header-id"),
    renderCell: ({ value }) => (
      <div className={cx("fontsize dddw")}>{value}</div>
    ),
  },
  {
    field: "soldOut",
    headerName: "Sold Out",
    width: 50,
    headerClassName: cx("custom-header-id"),
    headerAlign: "center",
    renderCell: ({ value }) => (
      <div className={cx("fontsize")}>{value ? "Yes" : "No"}</div>
    ),
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 180,
    headerClassName: cx("custom-header-id"),
    headerAlign: "center",
    renderCell: ({ row }) => (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleEdit(row)}
          style={{ fontSize: "14px", marginRight: "10px" }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleDelete(row.id)}
          style={{ fontSize: "14px" }}
        >
          Delete
        </Button>
      </div>
    ),
  },
];

export default function PostUpdate() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchData();
        setProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Search by ID, Name, and Category
  useEffect(() => {
    const handleSearch = async () => {
      try {
        const data = await fetchData();
        const filteredProducts = data.filter((product) => {
          const matchesSearchTerm =
            !searchTerm ||
            product.id.toString().includes(searchTerm.toLowerCase()) ||
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase());
          const matchesDateRange =
            (!dateRange.start ||
              new Date(product.date) >= new Date(dateRange.start)) &&
            (!dateRange.end ||
              new Date(product.date) <= new Date(dateRange.end));
          const matchesPriceRange =
            (!priceRange.min || product.price >= Number(priceRange.min)) &&
            (!priceRange.max || product.price <= Number(priceRange.max));
          return matchesSearchTerm && matchesDateRange && matchesPriceRange;
        });
        setProducts(filteredProducts);
      } catch (error) {
        setError(error);
      }
    };

    handleSearch();
  }, [searchTerm, dateRange, priceRange]);

  const handleDelete = async (productId) => {
    setLoading(true);
    try {
      await deleteData(productId);
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product) => {
    setIsUpdate(true);
    setCurrentProduct(product);
    setModalOpen(true);
  };

  const handleAdd = () => {
    setIsUpdate(false);
    setCurrentProduct(null);
    setModalOpen(true);
  };

  const handleAddProduct = async (newProduct) => {
    try {
      const addedProduct = await createData(newProduct);
      setProducts([...products, addedProduct]);
    } catch (error) {
      setError(error);
    }
  };

  const handleUpdateProduct = async (updatedProduct) => {
    try {
      const updated = await updateData(updatedProduct);
      setProducts(
        products.map((product) =>
          product.id === updated.id ? updated : product
        )
      );
    } catch (error) {
      setError(error);
    }
  };

  const handleDeleteSelected = async () => {
    setLoading(true);
    try {
      await deleteMultipleData(selectedProducts);
      setProducts(
        products.filter((product) => !selectedProducts.includes(product.id))
      );
      setSelectedProducts([]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <CircularProgress />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Grid
        container
        spacing={2}
        alignItems="center"
        style={{ marginBottom: "20px" }}
      >
        <Grid item>
          <TextField
            className={cx("input_porst")}
            label="Search by ID, Name, or Category"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            label="Start Date"
            type="date"
            value={dateRange.start}
            onChange={(e) =>
              setDateRange((prev) => ({ ...prev, start: e.target.value }))
            }
            InputLabelProps={{ shrink: true }}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            className={cx("fontsize")}
            label="End Date"
            type="date"
            value={dateRange.end}
            onChange={(e) =>
              setDateRange((prev) => ({ ...prev, end: e.target.value }))
            }
            InputLabelProps={{ shrink: true }}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            className={cx("fontsize")}
            label="Min Price"
            type="number"
            value={priceRange.min}
            onChange={(e) =>
              setPriceRange((prev) => ({ ...prev, min: e.target.value }))
            }
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            label="Max Price"
            type="number"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange((prev) => ({ ...prev, max: e.target.value }))
            }
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleAdd}>
            Add New Product
          </Button>
        </Grid>
      </Grid>

      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={products}
          columns={columns(handleEdit, handleDelete)}
          pageSize={10}
          checkboxSelection
          onSelectionModelChange={(newSelection) => {
            setSelectedProducts(newSelection.selectionModel);
          }}
          selectionModel={selectedProducts}
        />
      </div>

      <PostUpdateModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)} // Đảm bảo sử dụng handleClose chính xác
        handleAddProduct={handleAddProduct}
        handleUpdateProduct={handleUpdateProduct}
        product={currentProduct}
        isUpdate={isUpdate}
      />
    </div>
  );
}
