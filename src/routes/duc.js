import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Data_login from "./compodens/Layout/DefaultLayout/Login-LogOUT/LogIN/data";
import Cart_buggert from "./compodens/Layout/Cart-buggest";
import Confirm from "./compodens/Layout/DefaultLayout/Login-LogOUT/LogIN/confirm";
import DefaultLayout from "./compodens/Layout/DefaultLayout";
import Content from "../src/compodens/Layout/DefaultLayout/content";
import List_book from "./pages/list-book-item";
import Sugest from "./pages/suggest-book";
import Item_book from "../src/compodens/Layout/DefaultLayout/book-item";
import Login_Logut from "./compodens/Layout/DefaultLayout/Login-LogOUT";
import LogOut from "./compodens/Layout/DefaultLayout/Login-LogOUT/LogOut";
import BuyNowComponent from "./compodens/Layout/DefaultLayout/Buy-one";
import Buy_pay from "./compodens/Layout/DefaultLayout/Buy-now-butoon";
import Profile from "./pages/profile";
import Accountmanagement from "../src/compodens/admin/accountmanagement";
import Bieudo from "../src/compodens/admin";
import L1 from "./pages/chiu";
import List_book_catacory from "./pages/list_book-catacory";
import List_book_product from "./pages/list_book_product";
import Admin from "../src/compodens/admin";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Content />} />
            <Route path="category/:category" element={<List_book_catacory />} />
            <Route
              path="/search/:productName"
              element={<List_book_product />}
            />
            <Route path="list_book" element={<Item_book />} />
            <Route path="book/:id" element={<Item_book />} />
            <Route path="cart" element={<Cart_buggert />} />
            <Route path="/buy" element={<BuyNowComponent />} />
            <Route path="profile" element={<Profile />} />
            <Route path="suggest" element={<Sugest />} />
          </Route>

          {/* Login-Logout routes */}
          <Route path="login" element={<Login_Logut />}>
            <Route index element={<LogOut />} />
            <Route path="logIn" element={<Data_login />} />
            <Route path="logIn/confirm" element={<Confirm />} />
          </Route>
          <Route path="friend" element={<Admin />} />

          {/* Other routes */}
          <Route path="buy_pay" element={<Buy_pay />} />
          <Route path="table" element={<Bieudo />} />
          <Route path="usecontext" element={<Accountmanagement />} />

          {/* 404 Route */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
