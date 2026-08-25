import React from 'react';
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Wallet,
} from 'lucide-react';

const monthlyData = [
  { month: 'Jan', income: 45000, expenses: 28000 },
  { month: 'Feb', income: 50000, expenses: 32000 },
  { month: 'Mar', income: 48000, expenses: 30000 },
  { month: 'Apr', income: 55000, expenses: 35000 },
  { month: 'May', income: 52000, expenses: 31000 },
  { month: 'Jun', income: 60000, expenses: 38000 },
];

const categoryData = [
  { category: 'Food & Dining', amount: 12500 },
  { category: 'Rent & Housing', amount: 10000 },
  { category: 'Transport', amount: 6500 },
  { category: 'Shopping', amount: 4500 },
  { category: 'Utilities', amount: 3500 },
];

export default function Reports() {
  const totalIncome = monthlyData.reduce(
    (sum, item) => sum + item.income,
    0
  );

  const totalExpenses = monthlyData.reduce(
    (sum, item) => sum + item.expenses,
    0
  );

  const totalSavings = totalIncome - totalExpenses;

  const highestExpense = Math.max(
    ...categoryData.map((item) => item.amount)
  );

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Financial Reports
        </h1>

        <p className="mt-1 text-slate-500">
          Understand your income, spending and savings.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">

            <div className="rounded-lg bg-green-100 p-3">
              <TrendingUp
                size={22}
                className="text-green-600"
              />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Total Income
              </p>

              <h2 className="text-2xl font-bold">
                KSh {totalIncome.toLocaleString()}
              </h2>
            </div>

          </div>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">

            <div className="rounded-lg bg-red-100 p-3">
              <TrendingDown
                size={22}
                className="text-red-600"
              />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Total Expenses
              </p>

              <h2 className="text-2xl font-bold">
                KSh {totalExpenses.toLocaleString()}
              </h2>
            </div>

          </div>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">

            <div className="rounded-lg bg-blue-100 p-3">
              <Wallet
                size={22}
                className="text-blue-600"
              />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Net Savings
              </p>

              <h2 className="text-2xl font-bold text-blue-600">
                KSh {totalSavings.toLocaleString()}
              </h2>
            </div>

          </div>
        </div>

      </div>

      {/* Monthly Report */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <div className="mb-6 flex items-center gap-3">
          <BarChart3 size={22} />

          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Monthly Overview
            </h2>

            <p className="text-sm text-slate-500">
              Income compared with expenses
            </p>
          </div>
        </div>

        <div className="space-y-5">

          {monthlyData.map((item) => {
            const expensePercentage =
              (item.expenses / item.income) * 100;

            return (
              <div key={item.month}>

                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-semibold">
                    {item.month}
                  </span>

                  <span className="text-slate-500">
                    Income: KSh {item.income.toLocaleString()}
                  </span>

                  <span className="text-red-500">
                    Expenses: KSh {item.expenses.toLocaleString()}
                  </span>
                </div>

                <div className="h-3 rounded-full bg-slate-200">

                  <div
                    className="h-3 rounded-full bg-red-400"
                    style={{
                      width: `${Math.min(expensePercentage, 100)}%`,
                    }}
                  ></div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* Spending Categories */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <h2 className="text-xl font-bold text-slate-800">
          Spending by Category
        </h2>

        <p className="mb-6 text-sm text-slate-500">
          See where most of your money is going.
        </p>

        <div className="space-y-5">

          {categoryData.map((item) => {
            const percentage =
              (item.amount / highestExpense) * 100;

            return (
              <div key={item.category}>

                <div className="mb-2 flex justify-between">
                  <span className="font-medium text-slate-700">
                    {item.category}
                  </span>

                  <span className="font-semibold">
                    KSh {item.amount.toLocaleString()}
                  </span>
                </div>

                <div className="h-3 rounded-full bg-slate-200">

                  <div
                    className="h-3 rounded-full bg-slate-800"
                    style={{
                      width: `${percentage}%`,
                    }}
                  ></div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* Financial Insight */}
      <div className="rounded-xl border bg-slate-900 p-6 text-white">

        <h2 className="text-xl font-bold">
          Financial Insight
        </h2>

        <p className="mt-2 text-slate-300">
          You earned KSh {totalIncome.toLocaleString()} and spent
          KSh {totalExpenses.toLocaleString()} during the period.
          Your current net savings are KSh{' '}
          {totalSavings.toLocaleString()}.
        </p>

      </div>

    </div>
  );
}