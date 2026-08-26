import "./App.css";
import { Routes, Route, useNavigate, Navigate} from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

import Dashboard from "./Pages/Dashboard";
import Transactions from "./Pages/Transactions";
import BudgetsPage from "./Components/budget/BudgetsPage";
import Goals from "./Pages/Goals";
import Report from "./Pages/Report";
import ProfileSettings from "./Pages/ProfileSettings";
import LogOut from "./Pages/LogOut";
import Analytics from './components/analytics/Analytics'; 


function App() {
  const navigate = useNavigate();

  return (

    <Routes>
      
      <Route
        path="/"
        element={
          <LandingPage
            onGetStarted={() => navigate("/login")}
          />
        }
      />

      
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<SignUp />}
      />

      
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
        path="/profile-settings"
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
        path="/logout"
        element={<LogOut />}
      />
    </Routes>

  );
}
export default App;