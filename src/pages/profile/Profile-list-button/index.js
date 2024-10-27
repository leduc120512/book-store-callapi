import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Profile_address from "../profile-chinh/Profile-address";
import Profile_profile from "../profile-chinh/profile-profile";
import Profile_delete from "../profile-chinh/profile_delete";

import styles from "./Profile-list-button-module.scss";
import classnames from "classnames/bind";
const cx = classnames.bind(styles);

const styles12 = {
  height: "190%",
  width: "100%",
  // các thuộc tính khác của bạn...
};
const styles122 = {
  width: 200,
  height: 40,
  fontSize: "13px",
  fontWeight: "600",
  // các thuộc tính khác của bạn...
};

export default function VerticalTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ display: "flex", height: 224, alignItems: "flex-end" }}>
        <TabList orientation="vertical" value={value} onChange={handleChange}>
          <Tab label="Thông Tin" value="1" sx={styles122} />
          <Tab label="Địa Chỉ" value="3" sx={styles122} />{" "}
          <Tab label="Xóa Tài Khoản" value="2" sx={styles122} />
          {/* Thêm các tab khác tại đây */}
        </TabList>
        <Box sx={styles12}>
          <TabPanel sx={styles12} className={cx("Profile-asbutton")} value="1">
            <Profile_profile />{" "}
          </TabPanel>

          <TabPanel sx={styles12} value="3">
            <Profile_address />
          </TabPanel>
          <TabPanel sx={styles12} className={cx("Profile-asbutton")} value="2">
            <Profile_delete />
          </TabPanel>
          {/* Thêm nội dung cho các tab khác tại đây */}
        </Box>
      </Box>
    </TabContext>
  );
}
