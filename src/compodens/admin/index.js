import React from "react";
import classnames from "classnames/bind";
import styles from "./admin-module.scss";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

// Import your components
import Sales from "./Sales";
import Bieudo from "./urser";
import Product_manager from "./Product_Management";
import Order_Manager from "./order/order_manager";
import OrderAccept from "./order/manager/Order_accepted";
import OrderUnAccept from "./order/manager/order_cancellation";
import Bank_voucher from "./Voucher/Bank_voucher";
import Book_voucher from "./Voucher/Bookstore";
import Freeship_voucher from "./Voucher/FresShip";

const cx = classnames.bind(styles);

const tabStyles = {
  width: "250px",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 1.5)",
  },
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAccordionButtonClick = (index) => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        minHeight: 224,
        minWidth: 250,
      }}
    >
      <div className={cx("Admin")}>
        <div>
          <p className={cx("Admin_text")}>Admin</p>

          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab
              className={cx("Admin_sibar")}
              sx={tabStyles}
              label="Tài Khoản"
              {...a11yProps(0)}
            />
            <Tab
              className={cx("Admin_sibar")}
              sx={tabStyles}
              label="Doanh Thu"
              {...a11yProps(1)}
            />
            <Tab
              className={cx("Admin_sibar")}
              sx={tabStyles}
              label="Quản lí sản phẩm"
              {...a11yProps(2)}
            />
            <Tab
              className={cx("Admin_sibar")}
              sx={tabStyles}
              label="Quản lí đơn hàng"
              {...a11yProps(3)}
            />
          </Tabs>

          <Accordion className={cx("admin-tab_list")}>
            <AccordionSummary className={cx("admin-tab_list dsd")}>
              <p className={cx("dsd")}> Quản lí sản phẩm</p>
            </AccordionSummary>
            <AccordionDetails className={cx("admin-tab_item")}>
              <Button
                className={cx("admin-tab_item1")}
                onClick={() => handleAccordionButtonClick(4)}
              >
                Đơn hàng chấp nhận
              </Button>
              <Button
                className={cx("admin-tab_item1")}
                onClick={() => handleAccordionButtonClick(5)}
              >
                Đơn hàng không chấp nhận
              </Button>
            </AccordionDetails>
          </Accordion>

          <Accordion className={cx("admin-tab_list")}>
            <AccordionSummary className={cx("admin-tab_list dsd")}>
              <p className={cx("dsd")}> Quản lí Voucher</p>
            </AccordionSummary>
            <AccordionDetails className={cx("admin-tab_item")}>
              <Button
                className={cx("admin-tab_item1")}
                onClick={() => handleAccordionButtonClick(7)}
              >
                Quản lí Voucher Freeship
              </Button>
              <Button
                className={cx("admin-tab_item1")}
                onClick={() => handleAccordionButtonClick(8)}
              >
                Quản lí Voucher bookstore
              </Button>
              <Button
                className={cx("admin-tab_item1")}
                onClick={() => handleAccordionButtonClick(9)}
              >
                Quản lí Voucher Bank
              </Button>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <TabPanel className={cx("admin-tab")} value={value} index={0}>
        <Bieudo />
      </TabPanel>
      <TabPanel className={cx("admin-tab")} value={value} index={1}>
        <Sales />
      </TabPanel>
      <TabPanel className={cx("admin-tab")} value={value} index={2}>
        <Product_manager />
      </TabPanel>
      <TabPanel className={cx("admin-tab")} value={value} index={3}>
        <Order_Manager />
      </TabPanel>
      <TabPanel className={cx("admin-tab")} value={value} index={4}>
        <OrderAccept />
      </TabPanel>
      <TabPanel className={cx("admin-tab")} value={value} index={5}>
        <OrderUnAccept />
      </TabPanel>

      <TabPanel className={cx("admin-tab")} value={value} index={7}>
        <Freeship_voucher />
      </TabPanel>
      <TabPanel className={cx("admin-tab")} value={value} index={8}>
        <Book_voucher />
      </TabPanel>
      <TabPanel className={cx("admin-tab")} value={value} index={9}>
        <Bank_voucher />
      </TabPanel>
    </Box>
  );
}

export default VerticalTabs;
