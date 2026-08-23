import SummaryCard from "../components/SummaryCard"; 


function Dashboard() {
    return (
        <div className="p-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    Hello venus!
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
        
        </div>
    );
}

export default Dashboard;