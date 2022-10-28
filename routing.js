import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import SignIn from "./signIn";
import SignUp from "./signUp";
import Home from "./home";

export default function Routing() {
  return (
<Router>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
</Router>
  );
}
