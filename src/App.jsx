import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import BudgetsPage from './Components/budget/BudgetsPage'
import Goals from './Pages/Goals'
import Report from './Pages/Report'
import ProfileSettings from './Pages/ProfileSettings'

function App() {
  return (
  
      <div className="min-h-screen bg-slate-50">

        <Navbar />

        <div className="flex">
          <Sidebar />

          <main className="flex-1 p-6">
            <Routes>

              <Route path="/" element={<Dashboard />} />

              <Route
                path="/transactions"
                element={<Transactions/>}
              />

              <Route
                path="/budgets"
                element={<BudgetsPage/>}
              />

              <Route
                path="/goals"
                element={<Goals/>}
              />

              <Route
                path="/reports"
                element={<Report/>}
              />

              <Route
                path="/settings"
                element={<ProfileSettings/>}
              />

            </Routes>
          </main>
        </div>

      </div>
    </div>
  )
}

export default App;