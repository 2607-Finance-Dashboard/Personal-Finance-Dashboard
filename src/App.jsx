import './App.css'
import Transactions from './pages/Transactions'
import Analytics from './components/analytics/Analytics'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Transactions />
      <Analytics />
    </div>
  )
}

export default App