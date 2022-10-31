import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./signIn";
import SignUp from "./signUp";
import Home from "./home";
import { AuthContextProvider } from "./authContext";

export default function Routing() {
  return (
<AuthContextProvider>
<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
</AuthContextProvider>
   

  );
}
