import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Tạo context cho việc xác thực
const AuthContext = createContext();

// Hook để sử dụng AuthContext trong các component con
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(user?.cartItems || []);
  const [pendingOrders, setPendingOrders] = useState(user?.pendingOrders || []);
  const [cancerOrders, setCancerOrders] = useState(user?.cancerOrders || []);
  const [shippingOrders, setShippingOrders] = useState(
    user?.shippingOrders || []
  );
  const [completedOrders, setCompletedOrders] = useState(
    user?.completedOrders || []
  );

  // Khôi phục từ localStorage khi tải lại trang
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      const parsedUser = JSON.parse(storedUser);
      const orders = parsedUser.orders || [];

      // Phân loại đơn hàng theo trạng thái
      const pendingOrders = orders.filter(
        (order) => order.status === "pending"
      );
      const shippingOrders = orders.filter(
        (order) => order.status === "shipped"
      );
      const completedOrders = orders.filter(
        (order) => order.status === "completed"
      );
      const cancerOrders = orders.filter(
        (order) => order.status === "canceled"
      );

      setCartItems(parsedUser.cartItems || []);
      setPendingOrders(pendingOrders);
      setShippingOrders(shippingOrders);
      setCompletedOrders(completedOrders);
      setCancerOrders(cancerOrders);

      dispatch(login({ user: parsedUser, token: storedToken }));
    }
  }, [dispatch]);

  // Hàm để đăng nhập
  const loginAction = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:8080/bookstore_api/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: data.username,
            password: data.password,
          }),
          credentials: "include",
        }
      );

      if (response.ok) {
        const userData = await response.json();
        const { cartItems, orders } = userData;

        // Phân loại đơn hàng theo trạng thái
        const pendingOrders = orders.filter(
          (order) => order.status === "pending"
        );
        const shippingOrders = orders.filter(
          (order) => order.status === "shipped"
        );
        const completedOrders = orders.filter(
          (order) => order.status === "completed"
        );
        const cancerOrders = orders.filter(
          (order) => order.status === "canceled"
        );

        // Cập nhật state
        setCartItems(cartItems || []);
        setPendingOrders(pendingOrders);
        setShippingOrders(shippingOrders);
        setCompletedOrders(completedOrders);
        setCancerOrders(cancerOrders);

        // Lưu vào localStorage
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", userData.token || "");

        // Cập nhật redux store
        dispatch(
          login({
            user: { ...userData, cartItems: cartItems || [], orders },
            token: userData.token || null,
          })
        );

        navigate(userData.role === "admin" ? "/admin" : "/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Lỗi",
          text: "Tài Khoản Hoặc Mật Khẩu Sai",
        });
      }
    } catch (err) {
      console.error("Đã xảy ra lỗi trong quá trình đăng nhập", err);
    }
  };

  // Hàm đăng xuất
  const logOut = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setCartItems([]);
    setPendingOrders([]);
    setShippingOrders([]);
    setCompletedOrders([]);
    setCancerOrders([]);
    navigate("/login");
  };

  // Hàm xóa item khỏi giỏ hàng
 

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        cartItems,
        pendingOrders,
        shippingOrders,
        completedOrders,
        cancerOrders,
        loginAction,
        logOut,
      
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
