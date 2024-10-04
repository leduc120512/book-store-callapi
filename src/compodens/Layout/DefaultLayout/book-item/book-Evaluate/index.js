import styles from "./Evaluate-book-module.scss";
import classnames from "classnames/bind";

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Rating from "@mui/material/Rating";
import Book_feed_back_vali from "./book-feed-back-vali";

const cx = classnames.bind(styles);
function Book_feed() {
  // tab
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //   Basic rating all
  const [value134, setValue234] = React.useState(2);
  //  //   Basic rating one
  return (
    <div className={cx("Book-EvaluateMain")}>
      <h className={cx("Book-EvaluateTitle")}>Đánh Giá Sản Phẩm</h>
      <div className={cx("Book-EvaluateTitlesda")}>
        <div className={cx("Book-EvaluateContainer")}>
          <div className={cx("Book-EvaluateInnerContainer")}>
            {/* start  */}
            <div>
              <div className={cx("Book-EvaluateStart")}>
                <p className={cx("Book-EvaluateStasdfrsdt")}>4.9</p>
                <p className={cx("Book-EvaluateStasdfrsdt")}>Trên</p>
                <p className={cx("Book-EvaluateStasdfrsdt")}>5</p>
              </div>
              {/* start  */}
              <div className={cx("Book-EvaluateStars")}>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                    fontSize: "18px",
                    marginTop: "-20px",
                    marginLeft: "8px", // Tăng kích thước font lên 18px
                  }}
                >
                  <Rating name="read-only" value={value134} readOnly />
                </Box>
              </div>
            </div>

            <div className={cx("Book-EvaluateStarsdffh")}>
              <Box sx={{ typography: "body1" }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab
                        sx={{
                          border: "1px solid var(--primary)",
                          marginLeft: "40px",
                          fontSize: "16px",

                          width: "150px",
                          height: "40px",
                          color: "var(--primary)",
                        }}
                        label="Tất Cả"
                        value="1"
                      />
                      <Tab
                        sx={{
                          border: "1px solid var(--primary)",
                          marginLeft: "5px",
                          fontSize: "16px",
                          width: "150px",
                          height: "40px",
                          color: "var(--primary)",
                        }}
                        label="5 Sao"
                        value="2"
                      />
                      <Tab
                        sx={{
                          border: "1px solid var(--primary)",
                          marginLeft: "5px",
                          fontSize: "16px",
                          width: "150px",
                          height: "40px",
                          color: "var(--primary)",
                        }}
                        label="4 Sao"
                        value="3"
                      />
                      <Tab
                        sx={{
                          border: "1px solid var(--primary)",
                          marginLeft: "5px",
                          fontSize: "16px",
                          width: "150px",
                          height: "40px",
                          color: "var(--primary)",
                        }}
                        label="3 Sao"
                        value="4"
                      />
                      <Tab
                        sx={{
                          border: "1px solid var(--primary)",
                          marginLeft: "5px",
                          fontSize: "16px",
                          width: "150px",
                          height: "40px",
                          color: "var(--primary)",
                        }}
                        label="2 Sao"
                        value="5"
                      />
                      <Tab
                        sx={{
                          border: "1px solid var(--primary)",
                          marginLeft: "5px",
                          fontSize: "16px",
                          fontWeight: "550",
                          width: "150px",
                          height: "40px",
                          color: "var(--primary)",
                        }}
                        label="1 Sao"
                        value="6"
                      />
                    </TabList>
                  </Box>
                </TabContext>
              </Box>
            </div>
          </div>
          {/* tab  */}
          <div className={cx("Book-EvaluateBox")}>
            <Box sx={{ typography: "body1" }}>
              <TabContext value={value}>
                <TabPanel value="1">
                  <Book_feed_back_vali />
                </TabPanel>
                <TabPanel value="2">
                  <Book_feed_back_vali />
                </TabPanel>
                <TabPanel value="3">
                  <p>1</p>
                </TabPanel>
                <TabPanel value="4">
                  <p>1</p>
                </TabPanel>
                <TabPanel value="5">
                  <p>1</p>
                </TabPanel>
                <TabPanel value="6">
                  <p>1</p>
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book_feed;
