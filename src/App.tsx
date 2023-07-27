import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home/Home";
import { Login } from "./components/pages/Login/Login";
import { Signup } from "./components/pages/Signup/Signup";
import { Profile } from "./components/pages/Profile/Profile";
import { NotFound } from "./components/pages/NotFound/NotFound";
import { Settings } from "./components/pages/Settings/Settings";
import { LoggedInLayout } from "./components/templates/LoggedInLayout/LoggedInLayout";
import { ProtectedRoute } from "./components/organisms/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<LoggedInLayout />}>
        <Route path="/profile/:id">
          <Route
            index
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
