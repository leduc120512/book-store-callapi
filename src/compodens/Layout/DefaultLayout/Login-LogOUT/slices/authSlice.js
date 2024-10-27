import { createSlice } from "@reduxjs/toolkit";

// Khôi phục thông tin người dùng từ localStorage và xử lý lỗi JSON không hợp lệ
const getUserFromLocalStorage = () => {
  try {
    const user = localStorage.getItem("user");
    // Kiểm tra nếu user không phải là null hoặc undefined
    return user && user !== "undefined" ? JSON.parse(user) : null;
  } catch (err) {
    console.error("Stored user is not valid JSON", err);
    return null;
  }
};

const initialState = {
  user: getUserFromLocalStorage(), // Khôi phục thông tin người dùng
  token: localStorage.getItem("token") || "", // Khôi phục token
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(action.payload.user)); // Lưu thông tin người dùng
      localStorage.setItem("token", action.payload.token); // Lưu token
    },
    logout: (state) => {
      state.user = null;
      state.token = "";
      localStorage.removeItem("user"); // Xóa thông tin người dùng khỏi localStorage
      localStorage.removeItem("token"); // Xóa token khỏi localStorage
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
