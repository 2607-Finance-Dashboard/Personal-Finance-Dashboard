import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { db } from '../../lib/firebase';
import { getTotalIncome, getTotalExpenses, getMonthlyTotals, getSpendingByCategory } from './analyticsHelpers';

export default function Analytics() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'transactions'), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setTransactions(data);
    });
    return () => unsubscribe();
  }, []);

  const totalIncome = getTotalIncome(transactions);
  const totalExpenses = getTotalExpenses(transactions);
  const balance = totalIncome - totalExpenses;
  const monthlyData = getMonthlyTotals(transactions);
  const categoryData = getSpendingByCategory(transactions);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Analytics</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border">
          <p className="text-sm text-gray-500">Total Income</p>
          <p className="text-xl font-bold text-green-600">${totalIncome.toFixed(2)}</p>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <p className="text-sm text-gray-500">Total Expenses</p>
          <p className="text-xl font-bold text-red-600">${totalExpenses.toFixed(2)}</p>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <p className="text-sm text-gray-500">Balance</p>
          <p className="text-xl font-bold">${balance.toFixed(2)}</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg border mt-6">
        <h2 className="text-lg font-semibold mb-4">Income vs Expenses</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill="#22c55e" name="Income" />
            <Bar dataKey="expense" fill="#ef4444" name="Expenses" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded-lg border mt-6">
        <h2 className="text-lg font-semibold mb-4">Monthly Spending</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="expense" stroke="#ef4444" name="Expenses" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded-lg border mt-6">
        <h2 className="text-lg font-semibold mb-4">Spending by Category</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categoryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#3b82f6" name="Spent" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
