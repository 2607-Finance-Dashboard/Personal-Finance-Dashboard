import React from 'react';

export default function FinancialSummary({ summary }) {
  const cards = [
    { title: 'Total Income', value: summary.totalIncome, color: 'text-gray-900' },
    { title: 'Total Expenses', value: summary.totalExpense, color: 'text-gray-600' },
    { title: 'Net Savings', value: summary.netSavings, color: 'text-black font-semibold' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">{card.title}</p>
          <p className={`text-2xl mt-2 ${card.color}`}>
            ${card.value.toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
