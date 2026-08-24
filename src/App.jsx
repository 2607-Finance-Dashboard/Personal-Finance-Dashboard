import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/transactions';
import BudgetsPage from './components/budget/BudgetsPage';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/budgets" element={<BudgetsPage />} />

            <Route
              path="/goals"
              element={<h1 className="text-2xl font-bold">Goals</h1>}
            />
            <Route
              path="/reports"
              element={<h1 className="text-2xl font-bold">Reports</h1>}
            />
            <Route
              path="/settings"
              element={<h1 className="text-2xl font-bold">Settings</h1>}
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;