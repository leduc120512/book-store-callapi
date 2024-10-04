import React from "react";
import Header from "./header";
import Sidebar from "./Sidebar";
import classnames from "classnames/bind";
import styles from "./defaultLayout-modele.scss";
import { Outlet } from "react-router-dom";
import { Box, Paper, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const cx = classnames.bind(styles);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function DefaultLayout() {
  return (
    <div className={cx("Boc")}>
      <div className={cx("Headr")}>
        <Header />
      </div>

      <Grid className={cx("container")} container spacing={2}>
        <Grid
          className={cx("with-content")}
          item
          xs={0} // Ẩn khi kích thước màn hình là xs (mobile)
          // Chiếm 2 cột khi màn hình là sm
          md={3}
        >
          <Sidebar />
        </Grid>
        <Grid className={cx("content")} xs={12} sm={12} md={9}>
          <Outlet />
        </Grid>
      </Grid>

      <div className={cx("Footer")}></div>
    </div>
  );
}

export default DefaultLayout;
