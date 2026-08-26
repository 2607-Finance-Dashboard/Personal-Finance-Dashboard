import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Logout from "./pages/LogOut";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Analytics from "./components/analytics/Analytics";
import ProfileSettings from "./pages/ProfileSettings";


function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/analytics" element={<Analytics />} />

      <Route
        path="/ProfileSettings"
        element={
          <ProfileSettings
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        }
      />
    </Routes>
  );
}
export default App;