import "./App.css";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import BudgetsPage from "./components/budget/BudgetsPage";
import Analytics from "./components/analytics/Analytics"; 
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Goals from "./pages/Goals";
import Report from "./pages/Report";
import ProfileSettings from "./pages/ProfileSettings";
import LogOut from "./pages/LogOut";

function App() {
  const navigate = useNavigate();

  return (
  <Routes>   
    <>
      <Route
        path="/"
        element={<LandingPage onGetStarted={() => navigate("/login")} />}
      />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route
        path="/dashboard"
        element={
          <div className="min-h-screen bg-slate-50">
            <Navbar />
            <div className="flex">
              <Sidebar />
              <main className="flex-1 p-6">
                <Dashboard />
              </main>
            </div>
          </div>
        }
      />

      <Route
        path="/transactions"
        element={
          <div className="min-h-screen bg-slate-50">
            <Navbar />
            <div className="flex">
              <Sidebar />
              <main className="flex-1 p-6">
                <Transactions />
              </main>
            </div>
          </div>
        }
      />

      <Route
        path="/budgets"
        element={
          <div className="min-h-screen bg-slate-50">
            <Navbar />
            <div className="flex">
              <Sidebar />
              <main className="flex-1 p-6">
                <BudgetsPage />
              </main>
            </div>
          </div>
        }
      />

      <Route
        path="/goals"
        element={
          <div className="min-h-screen bg-slate-50">
            <Navbar />
            <div className="flex">
              <Sidebar />
              <main className="flex-1 p-6">
                <Goals />
              </main>
            </div>
          </div>
        }
      />

      <Route
        path="/reports"
        element={
          <div className="min-h-screen bg-slate-50">
            <Navbar />
            <div className="flex">
              <Sidebar />
              <main className="flex-1 p-6">
                <Report />
              </main>
            </div>
          </div>
        }
      />

      <Route
        path="/profile"
        element={
          <div className="min-h-screen bg-slate-50">
            <Navbar />
            <div className="flex">
              <Sidebar />
              <main className="flex-1 p-6">
                <ProfileSettings />
              </main>
            </div>
          </div>
        }
      />

      <Route
        path="/analytics"
        element={
          <div className="min-h-screen bg-slate-50">
            <Navbar />
            <div className="flex">
              <Sidebar />
              <main className="flex-1 p-6">
                <Analytics />
              </main>
            </div>
          </div>
        }
      />

      <Route
        path="/logout"
        element={<LogOut />}
      />
   

  


      <Route
        path="/ProfileSettings"
        element={
          <ProfileSettings
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        }
      />
      </>   
    </Routes>
  );
}
export default App;