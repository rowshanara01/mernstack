import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminNavbar from "./Components/Admin/AdminNavbar/AdminNavbar";
import MakeAdmin from "./Components/Admin/MakeAdmin/MakeAdmin";
import OrderList from "./Components/Admin/OrderList/OrderList";
import ServiceList from "./Components/Admin/ServiceList/ServiceList";
import BookingDetails from "./Components/Booking/BookingDetails/BookingDetails";
import BookingList from "./Components/Booking/BookingList/BookingList";
import BookingNavbar from "./Components/Booking/BookingNavbar/BookingNavbar";
import Review from "./Components/Booking/Review/Review";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/HomePage/Navbar/Navbar";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/booking" element={<BookingNavbar/>} >
            <Route index element={<BookingList />} />
            <Route path="book/:id" element={<BookingDetails />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route path="/admin" element={<AdminNavbar/>}>
              <Route index element={<OrderList/>} />
              <Route path="addService" element={<ServiceList/>} />
              <Route path="makeAdmin" element={<MakeAdmin/>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
