import SummaryCard from "../components/SummaryCard"; 
import TransactionItem from "../components/TransactionItem";


function Dashboard() {
    return (
        <div className="p-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    Hello There User!
                </h1>

                <p className="mt-1 text-gray-500">
                    Here is what is happening with your finances today.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <SummaryCard
                  title="Total Balance"
                  amount="KSh 85,000"
                  description="Available balance"
                />
  

                <SummaryCard
                  title="Income"
                  amount="KSh 120,000"
                  description="This month"
                />

                <SummaryCard
                  title="Expenses"
                  amount="KSh 35,000"
                  description="This month"
                />

                <SummaryCard
                  title="Savings"
                  amount="KSh 25,000"
                  description="This month"
                />
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-5">
                    <h2 className="text-lg font-semibold text-gray-900">
                       Recent Transactions
                    </h2>

                    <button className="text-sm text-blue-600 hover:underline">
                        View all
                    </button>
                </div>

                <div>
                   <TransactionItem
                      name="Salary"
                      category="Income"
                      amount="50000"
                      type="income"
                    />

                    <TransactionItem
                      name="Groceries"
                      category="Food"
                      amount="3500"
                      type="expense"
                    />

                    <TransactionItem
                      name="Transport"
                      category="Travel"
                      amount="1200"
                      type="expense"
                    />
                </div>
            </div>
            <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                    Financial Overview
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-xl bg-green-50">
                        <p className="text-sm text-gray-500">Income</p>
                        <p className="text-2xl font-bold text-green-600 mt-2">
                              KSh 120,000
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                           This month
                        </p>
                    </div>

                    <div className="p-5 rounded-xl bg-red-50">
                        <p className="text-sm text-gray-500">Expenses</p>
                        <p className="text-2xl font-bold text-red-600 mt-2">
                            KSh 35,000
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          This month
                        </p>
                    </div>
                </div>

                    <div className="mt-6 p-5 rounded-xl bg-blue-50">
                        <p className="text-sm text-gray-500">
                           Monthly savings
                        </p>

                        <p className="text-2xl font-bold text-blue-600 mt-2">
                             KSh 25,000
                        </p>

                        <p className="text-sm text-gray-500 mt-1">
                            You're saving from your monthly income
                        </p>
                    </div>
            </div>
        
        </div>
    );
}

export default Dashboard;