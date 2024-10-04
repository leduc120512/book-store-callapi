import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { fetchData, deleteData, updateData, createData } from "./api";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import styles from "../admin-module.scss";
import classnames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const tableCellStyle = {
  fontSize: "15px", // tăng kích thước font chữ lên 15px
};

const textFieldStyle = {
  "& .MuiInputBase-input": {
    fontSize: "15px",
    width: "100px",
  },
};

const buttonStyle = {
  fontSize: "15px",
};

const cx = classnames.bind(styles);

export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({});
  const [rows, setRows] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const [idError, setIdError] = React.useState(false);
  const [phoneError, setPhoneError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);

  const handleOpen = (row = {}) => {
    setModalData(row);
    setIsEdit(!!row.id); // Xác định xem đây là chế độ chỉnh sửa hay thêm mới
    setOpen(true);
    setIdError(false); // Reset lại trạng thái lỗi khi mở modal
    setPhoneError(false); // Reset lại trạng thái lỗi điện thoại
    setEmailError(false); // Reset lại trạng thái lỗi email
    setPasswordError(false); // Reset lại trạng thái lỗi mật khẩu
  };

  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    async function getData() {
      try {
        const data = await fetchData();
        setRows(data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    }
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "id" && value !== "") {
      const idExists = rows.some((row) => row.id === Number(value));
      setIdError(idExists && !isEdit);
    }

    if (name === "phone" && value !== "") {
      const phonePattern = /^\d+$/;
      setPhoneError(!phonePattern.test(value));
    }

    if (name === "email" && value !== "") {
      setEmailError(!validEmail.test(value));
    }

    if (name === "password" && value !== "") {
      setPasswordError(!validPassword.test(value));
    }
  };

  const handleSave = async () => {
    try {
      if (idError) {
        console.error("ID already exists");
        return;
      }

      if (phoneError) {
        console.error("Invalid phone number");
        return;
      }

      if (emailError) {
        console.error("Invalid email format");
        return;
      }

      if (passwordError) {
        console.error("Invalid password format");
        return;
      }

      if (
        modalData.id &&
        (!Number.isInteger(Number(modalData.id)) || Number(modalData.id) <= 0)
      ) {
        console.error("Invalid ID");
        return;
      }

      if (isEdit) {
        const updatedData = await updateData(modalData);
        setRows((prevRows) =>
          prevRows.map((row) => (row.id === updatedData.id ? updatedData : row))
        );
        console.log("Data updated successfully");
      } else {
        const newData = await createData(modalData);
        setRows((prevRows) => [...prevRows, newData]);
        console.log("Data created successfully");
      }
      handleClose();
    } catch (error) {
      console.error("Failed to save data", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteData(id);
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      console.log("Data deleted successfully");
    } catch (error) {
      console.error("Failed to delete data", error);
    }
  };

  const filteredAndSortedRows = rows
    .filter((row) => {
      const queryLower = query.toLowerCase();
      return (
        (row.email && row.email.toLowerCase().includes(queryLower)) ||
        (row.phone && row.phone.toLowerCase().includes(queryLower)) ||
        (row.id && row.id.toString().toLowerCase().includes(queryLower))
      );
    })
    .sort((a, b) => {
      const queryLower = query.toLowerCase();
      const aStartsWith =
        (a.email && a.email.toLowerCase().startsWith(queryLower)) ||
        (a.phone && a.phone.toLowerCase().startsWith(queryLower)) ||
        (a.id && a.id.toString().toLowerCase().startsWith(queryLower));
      const bStartsWith =
        (b.email && b.email.toLowerCase().startsWith(queryLower)) ||
        (b.phone && b.phone.toLowerCase().startsWith(queryLower)) ||
        (b.id && b.id.toString().toLowerCase().startsWith(queryLower));
      if (aStartsWith && !bStartsWith) return -1;
      if (!aStartsWith && bStartsWith) return 1;
      return (
        (a.email ? a.email.toLowerCase().indexOf(queryLower) : Infinity) -
        (b.email ? b.email.toLowerCase().indexOf(queryLower) : Infinity)
      );
    });

  return (
    <div>
      {/* set up*/}
      <div className={cx("Table")}>
        <Box sx={{ display: "flex", alignItems: "center", width: 100 }}>
          <TextField
            fullWidth
            label="ID OR EMAIL OR PHONE"
            id="search"
            onChange={(e) => setQuery(e.target.value)}
            sx={{ width: 300 }}
          />
          <Stack direction="row" spacing={2} mt={2}>
            {/* //add new  */}
            <Button
              variant="contained"
              color="success"
              onClick={() => handleOpen({})}
              sx={buttonStyle}
            >
              Add new
            </Button>
          </Stack>
        </Box>
        {/* //name table  */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: "300px" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={tableCellStyle}>User ID</TableCell>
                <TableCell sx={tableCellStyle} align="right">
                  Email
                </TableCell>
                <TableCell sx={tableCellStyle} align="right">
                  Phone
                </TableCell>
                <TableCell sx={tableCellStyle} align="right">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredAndSortedRows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={tableCellStyle} component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell sx={tableCellStyle} align="right">
                    {row.email}
                  </TableCell>
                  <TableCell sx={tableCellStyle} align="right">
                    {row.phone}
                  </TableCell>
                  {/* //delete , edit  */}
                  <TableCell align="right">
                    <Button sx={buttonStyle} onClick={() => handleOpen(row)}>
                      Edit
                    </Button>
                    <Button
                      sx={buttonStyle}
                      onClick={() => handleDelete(row.id)}
                      color="error"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {/* table  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            {isEdit ? "Edit Data" : "Add New Data"}
          </Typography>
          <TextField
            label="User ID"
            name="id"
            value={modalData.id || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={idError}
            helperText={idError ? "ID already exists." : ""}
            disabled={isEdit} // Vô hiệu hóa trường ID khi chỉnh sửa
            sx={textFieldStyle}
          />
          <TextField
            label="Email (example@example.com)"
            name="email"
            value={modalData.email || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={emailError}
            helperText={emailError ? "Invalid email format." : ""}
            sx={textFieldStyle}
          />
          <TextField
            label="Phone"
            name="phone"
            value={modalData.phone || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={phoneError}
            helperText={phoneError ? "Invalid phone number." : ""}
            sx={textFieldStyle}
          />
          <TextField
            label="Name"
            name="name"
            value={modalData.name || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
            sx={textFieldStyle}
          />
          <TextField
            label="Class"
            name="class"
            value={modalData.class || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
            sx={textFieldStyle}
          />
          <TextField
            label="Password (At least 6 characters, including 1 letter and 1 number)"
            name="password"
            type={showPassword ? "text" : "password"}
            value={modalData.password || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={passwordError}
            helperText={passwordError ? "Invalid password format." : ""}
            sx={textFieldStyle}
            // eye
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    ) : (
                      <FontAwesomeIcon icon={faEye} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {/* //save  */}
          <Button
            onClick={handleSave}
            variant="contained"
            color="primary"
            sx={buttonStyle}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
