function TransactionItem({ name, category, amount, type }) {
  const isIncome = type === "income";

  return (
    <div className="flex items-center justify-between border-b py-4 last:border-b-0">
      <div>
        <p className="font-medium text-gray-900">
          {name}
        </p>

        <p className="text-sm text-gray-500">
          {category}
        </p>
      </div>

      <p
        className={`font-semibold ${
          isIncome ? "text-green-600" : "text-gray-900"
        }`}
      >
        {isIncome ? "+" : "-"} KSh {amount}
      </p>
    </div>
  );
}

export default TransactionItem;