import styles from "./profile-module.scss";
import classnames from "classnames/bind";

import Profile_list_btn from "./Profile-list-button";

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const cx = classnames.bind(styles);
function Sidebar() {
  return (
    <div className={cx("Profile-list")}>
      <div className={cx("Profile-button")}>
        <Profile_list_btn />
      </div>
    </div>
  );
}

export default Sidebar;
