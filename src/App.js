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
            <Route path="book/:id" element={<Item_book />} />{" "}
            {/* Add this route */}
            <Route path="Cart" element={<Cart_buggert />} />
            <Route path="/BUY" element={<BuyNowComponent />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Sugest" element={<Sugest />} />
          </Route>

          {/* Login-Logout routes */}
          <Route path="LOGIN" element={<Login_Logut />}>
            <Route index element={<LogOut />} />
            <Route path="LogIn" element={<Data_login />} />
            <Route path="LogIn/Confirm" element={<Confirm />} />
          </Route>
          <Route path="Friend" element={<Admin />} />
          {/* Other routes */}
          <Route path="Buy_pay" element={<Buy_pay />} />
          <Route path="Table" element={<Bieudo />} />
          <Route path="Usecontext" element={<Accountmanagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
