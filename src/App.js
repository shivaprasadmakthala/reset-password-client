import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="welcome" element={<Welcome />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
