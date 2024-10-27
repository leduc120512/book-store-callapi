import styles from "./Pay-bank-module.scss";
import classnames from "classnames/bind";

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Pay_product from "./Pay-product-now";
import Pay_bank from "./pay_product_finish";
// Thêm dòng này

const cx = classnames.bind(styles);

function Sidebar() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const styles = {
    fontSize: 11,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "210px",
    borderRadius: "4px",
    height: "30px",
    marginLeft: "10px",
    fontWeight: "600",
    cursor: "pointer",
    backgroundColor: "var(--white)",
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
    "&.disabled": {
      pointerEvents: "none",
      opacity: 0.5,
    },
    "& + .wrapper": {
      marginLeft: "8px",
    },
  };

  return (
    <div className={cx("pay_right123")}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <p className={cx("pay_right12345")}>Phương Thức Thanh Toán </p>

              <Tab label="Thanh Toán Khi Nhận Hàng" value="1" sx={styles} />
              <Tab label="Chuyển Khoản Ngân Hàng" sx={styles} value="2" />
              <Tab label="Thẻ Tín Dụng/Ghi Nợ" sx={styles} value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Pay_product />
          </TabPanel>
          <TabPanel className={cx("tab-font-size")} value="2">
            {/* Thay đổi ở đây */}
            <Pay_bank />
          </TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default Sidebar;
