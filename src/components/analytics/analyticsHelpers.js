export function getTotalIncome(transactions) {
  return transactions
    .filter((tx) => tx.type === 'income')
    .reduce((sum, tx) => sum + Number(tx.amount), 0);
}

export function getTotalExpenses(transactions) {
  return transactions
    .filter((tx) => tx.type === 'expense')
    .reduce((sum, tx) => sum + Number(tx.amount), 0);
}

// groups transactions by month ("2026-08") and totals income/expenses for each
export function getMonthlyTotals(transactions) {
  const totals = {};

  transactions.forEach((tx) => {
    const month = tx.date.slice(0, 7);
    if (!totals[month]) totals[month] = { month, income: 0, expense: 0 };

    if (tx.type === 'income') {
      totals[month].income += Number(tx.amount);
    } else {
      totals[month].expense += Number(tx.amount);
    }
  });

  return Object.values(totals).sort((a, b) => a.month.localeCompare(b.month));
}
