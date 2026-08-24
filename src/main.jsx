import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Analytics from './components/analytics/Analytics.jsx'
import './index.css'
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import SignUp from "./pages/SignUp";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
