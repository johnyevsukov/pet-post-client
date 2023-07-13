import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/pages/Login/Login";
import { Signup } from "./components/pages/Signup/Signup";
import { NotFound } from "./components/pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>home</div>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
