import classnames from "classnames/bind";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useParams } from "react-router-dom";

import styles from "./Cart-module.scss";
import All_cart from "./all-cart";
import Cancer from "./cancer";
import Finish from "./finish";
import Return_Refurn from "./return-refurn";
import TranSport from "./transport";
import Wait_Pay from "./wait-pay";
import Wait_Transport from "./wait-transport";

const cx = classnames.bind(styles);

function Cart_buggert() {
  const { tab } = useParams(); // Nhận giá trị tab từ params
  const [value, setValue] = React.useState(tab || "1"); // Sử dụng tab nếu có, mặc định là "1"

  React.useEffect(() => {
    if (tab) {
      setValue(tab);
    }
  }, [tab]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={cx("Cart-buggert")}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab className={cx("Cart1")} label="Tất cả" value="1" />
              <Tab className={cx("Cart1")} label="Chờ thanh toán" value="2" />
              <Tab
                className={cx("Cart1")}
                label="Hoàn thành "
                sx={{ "& .MuiTab-wrapper": { fontSize: "50px" } }}
                value="3"
              />
              <Tab
                className={cx("Cart1")}
                label="Trả Hàng/Hoàn tiền"
                value="4"
              />
              <Tab className={cx("Cart1")} label="Đánh Giá" value="5" />
              <Tab className={cx("Cart1")} label="Chờ thanh toán" value="6" />
              <Tab className={cx("Cart1")} label="Chờ Giao Hàng" value="7" />
            </TabList>
          </Box>
          <TabPanel className={cx("Cart-item")} value="1">
            <All_cart />
          </TabPanel>
          <TabPanel value="2">
            <Cancer />
          </TabPanel>
          <TabPanel value="3">
            <Finish />
          </TabPanel>
          <TabPanel value="4">
            <Return_Refurn />
          </TabPanel>
          <TabPanel value="5">
            <TranSport />
          </TabPanel>
          <TabPanel value="6">
            <Wait_Pay />
          </TabPanel>
          <TabPanel value="7">
            <Wait_Transport />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default Cart_buggert;
