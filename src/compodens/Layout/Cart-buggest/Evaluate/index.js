import styles from "./Evaluate-module.scss";
import classnames from "classnames/bind";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Evaluate_main from "./evaluate-main";
const cx = classnames.bind(styles);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "770px",
  minWidth: "170px",
  minHeight: "650px",

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const BUTTON_Evaluate = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "100px",
  padding: "9px 16px",
  borderRadius: "4px",
  fontSize: "1.6rem",
  fontWeight: "700",
  height: "38px",
  marginRight: "5px",
  cursor: "pointer",
  border: "1px solid transparent",
  userSelect: "none",
  color: "#add8e6",
  backgroundColor: "#f5f5dc",
  borderColor: "#f5f5dc",
  "&:hover": {
    borderColor: "#f5f5dc",
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)), #f5f5dc",
  },
  "& + .wrapper": {
    marginLeft: "8px",
  },
};

function Evaluate() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={BUTTON_Evaluate} onClick={handleOpen}>
        Đánh Giá
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* Evaluate */}
          <Evaluate_main handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}

export default Evaluate;
