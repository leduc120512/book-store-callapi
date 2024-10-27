import styles from "./Profile--profile-module.scss";
import classnames from "classnames/bind";
import Buttonn from "../../../../compodens/Layout/Cart-buggest/button";

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const styles1 = {
  width: "100px",
  height: "30px",
  // các thuộc tính khác của bạn...
};
const cx = classnames.bind(styles);
function Sidebar() {
  // age
  const [age, setAge] = React.useState("");
  const [day, setDay] = React.useState("");
  const [month, setMonth] = React.useState("");
  const handleChange1 = (event) => {
    setAge(event.target.value);
  };
  const handleChange2 = (event) => {
    setMonth(event.target.value);
  };
  const handleChange3 = (event) => {
    setDay(event.target.value);
  };
  return (
    <div className={cx("Profile")}>
      {/* profile  */}
      <div className={cx("Profile1")}>
        <div className={cx("ProfileDiv")}>
          <p className={cx("ProfileP2")}>Hồ Sơ Cá Nhân</p>
          <p className={cx("ProfileP asdfgww")}>
            Quản lý thông tin hồ sơ để bảo mật tài khoản
          </p>
        </div>
        <div className={cx("ProfileDiv1")}>
          <div className={cx("ProfileDiv14")}>
            <div className={cx("ProfileDiv15 yyy")}>
              <p className={cx("ProfileP  ")}>Tên Đăng Nhập</p>
              <p className={cx("ProfileP asgsagej")}>Lê Xuân Đức</p>
            </div>
            <div className={cx("ProfileDiv16 yyy")}>
              <p className={cx("ProfileP ")}>Tên</p>
              <input
                className={cx("duasgac ae4")}
                type="text"
                id="inputText"
                placeholder="Nhập Biệt Danh"
              ></input>
            </div>
            <div className={cx("ProfileDiv17 yyy ")}>
              <p className={cx("ProfileP")}>Email</p>
              <p className={cx("ProfileP jert")}>du********@gmail.com</p>
              <p className={cx("ProfileP")}>Thay Đổi</p>
            </div>
            <div className={cx("ProfileDiv18 yyy")}>
              <p className={cx("ProfileP ")}>Số Điện Thoại</p>
              <p className={cx("ProfileP sdt")}>*********05</p>
              <p className={cx("ProfileP")}>Thay Đổi</p>
            </div>
            {/* male /famale  */}
            <div className={cx("ProfileDiv19 yyy")}>
              <p className={cx("ProfileP")}>Giới Tính</p>
              <div className={cx("ProfilePasd")}>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 24,
                        },
                        "& .MuiFormControlLabel-label": {
                          fontSize: 16,
                        },
                      }}
                      value="female"
                      control={<Radio />}
                      label="Nam"
                    />
                    <FormControlLabel
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 24,
                        },
                        "& .MuiFormControlLabel-label": {
                          fontSize: 16,
                        },
                      }}
                      value="male"
                      control={<Radio />}
                      label="Nữ"
                    />
                    <FormControlLabel
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 24,
                        },
                        "& .MuiFormControlLabel-label": {
                          fontSize: 16,
                        },
                      }}
                      value="other"
                      control={<Radio />}
                      label="Khác"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            {/* date  */}
            <div className={cx("ProfileDiv20 yyy")}>
              <p className={cx("ProfileP")}>Ngày Sinh</p>
              <div className={cx("ProfilaarweP")}>
                <div className={cx("ProfileDiv asg")}>
                  {/* day  */}
                  <Box sx={styles1}>
                    <FormControl fullWidth>
                      <InputLabel
                        sx={{ fontSize: 15 }}
                        id="demo-simple-select-label"
                      >
                        Ngày
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={day}
                        label="Day"
                        onChange={handleChange3}
                      >
                        <MenuItem sx={{ fontSize: 15 }} value={10}>
                          Ten
                        </MenuItem>
                        <MenuItem sx={{ fontSize: 15 }} value={20}>
                          Twenty
                        </MenuItem>
                        <MenuItem sx={{ fontSize: 15 }} value={30}>
                          Thirty
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                {/* month  */}
                <div className={cx("ProfileDiv asg")}>
                  <Box sx={styles1}>
                    <FormControl fullWidth>
                      <InputLabel
                        sx={{ fontSize: 15 }}
                        id="demo-simple-select-label"
                      >
                        Tháng
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={month}
                        label="Month"
                        onChange={handleChange2}
                      >
                        <MenuItem sx={{ fontSize: 15 }} value={10}>
                          Ten
                        </MenuItem>
                        <MenuItem sx={{ fontSize: 15 }} value={20}>
                          Twenty
                        </MenuItem>
                        <MenuItem sx={{ fontSize: 15 }} value={30}>
                          Thirty
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                {/* year  */}
                <div className={cx("ProfileDiv asg")}>
                  <Box sx={styles1}>
                    <FormControl fullWidth>
                      <InputLabel
                        sx={{ fontSize: 15 }}
                        id="demo-simple-select-label"
                      >
                        Năm
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange1}
                      >
                        <MenuItem sx={{ fontSize: 15 }} value={10}>
                          Ten
                        </MenuItem>
                        <MenuItem sx={{ fontSize: 15 }} value={20}>
                          Twenty
                        </MenuItem>
                        <MenuItem sx={{ fontSize: 15 }} value={30}>
                          Thirty
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
            </div>
            <Buttonn primary more className={cx("ProfileButton")}>
              Lưu
            </Buttonn>
          </div>
          <div className={cx("ProfileDiv")}>
            <div className={cx("ProfileDiv")}>
              <img className={cx("ProfileImg")} />
              <p className={cx("ProfileP")}></p>
            </div>
            {/* img display  */}
            <div className={cx("ProfileDiv")}>
              <p className={cx("ProfileP")}>Dụng lượng file tối đa 1 MB</p>
              <p className={cx("ProfileP")}>Định dạng:.JPEG, .PNG</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
