import React from 'react';
import FinancialSummary from './FinancialSummary';
import IncomeExpenseChart from './IncomeExpenseChart';
import SpendingByCategory from './SpendingByCategory';
import MonthlySpendingChart from './MonthlySpendingChart';

// Mock Data representing what might come from a backend or state
const RAW_TRANSACTIONS = [
  { id: 1, month: 'Jan', type: 'income', category: 'Salary', amount: 5000 },
  { id: 2, month: 'Jan', type: 'expense', category: 'Rent', amount: 1500 },
  { id: 3, month: 'Jan', type: 'expense', category: 'Food', amount: 400 },
  { id: 4, month: 'Feb', type: 'income', category: 'Salary', amount: 5000 },
  { id: 5, month: 'Feb', type: 'expense', category: 'Rent', amount: 1500 },
  { id: 6, month: 'Feb', type: 'expense', category: 'Food', amount: 600 },
  { id: 7, month: 'Feb', type: 'expense', category: 'Utilities', amount: 200 },
  { id: 8, month: 'Mar', type: 'income', category: 'Salary', amount: 5500 },
  { id: 9, month: 'Mar', type: 'expense', category: 'Rent', amount: 1500 },
  { id: 10, month: 'Mar', type: 'expense', category: 'Food', amount: 350 },
  { id: 11, month: 'Mar', type: 'expense', category: 'Entertainment', amount: 400 },
];

export default function Analytics() {
  // DATA HANDLING: Reduce transactions into total summary metrics
  const summary = RAW_TRANSACTIONS.reduce(
    (acc, curr) => {
      if (curr.type === 'income') acc.totalIncome += curr.amount;
      if (curr.type === 'expense') acc.totalExpense += curr.amount;
      acc.netSavings = acc.totalIncome - acc.totalExpense;
      return acc;
    },
    { totalIncome: 0, totalExpense: 0, netSavings: 0 }
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 text-gray-800">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Financial Analytics</h1>
          <p className="text-gray-500 text-sm mt-1">Visual data breakdown of your income and expenditures.</p>
        </div>

        {/* 1. Financial Summary Cards */}
        <FinancialSummary summary={summary} />

        {/* Charts Grid Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <IncomeExpenseChart transactions={RAW_TRANSACTIONS} />
          <SpendingByCategory transactions={RAW_TRANSACTIONS} />
        </div>

        {/* Charts Grid Row 2 */}
        <div className="grid grid-cols-1 gap-6">
          <MonthlySpendingChart transactions={RAW_TRANSACTIONS} />
        </div>

      </div>
    </div>
  );
}
