import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function IncomeExpenseChart({ transactions }) {
  // DATA HANDLING: Group data dynamically by month
  const monthlyMap = transactions.reduce((acc, curr) => {
    if (!acc[curr.month]) {
      acc[curr.month] = { month: curr.month, Income: 0, Expenses: 0 };
    }
    if (curr.type === 'income') acc[curr.month].Income += curr.amount;
    if (curr.type === 'expense') acc[curr.month].Expenses += curr.amount;
    return acc;
  }, {});

  const chartData = Object.values(monthlyMap);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-base font-medium text-gray-900 mb-4">Income vs Expenses</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} tickLine={false} />
            <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} />
            <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
            <Legend iconType="circle" />
            {/* Minimalist greyscale palette weights */}
            <Bar dataKey="Income" fill="#1f2937" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Expenses" fill="#9ca3af" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
