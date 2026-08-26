import {
  LayoutDashboard,
  ArrowLeftRight,
  Wallet,
  Target,
  BarChart3,
  PieChart,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/",
    },
    {
      name: "Transactions",
      icon: ArrowLeftRight,
      path: "/transactions",
    },
    {
      name: "Budgets",
      icon: Wallet,
      path: "/budgets",
    },
    {
      name: "Goals",
      icon: Target,
      path: "/goals",
    },
    {
      name: "Analytics",
      icon: BarChart3,
      path: "/analytics",
    },
    {
      name: "Reports",
      icon: PieChart,
      path: "/reports",
    },
  ];

  return (
    <aside className="w-64 border-r bg-white p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.path}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}

        <Link
          to="/profile-settings"
          className="mt-6 flex w-full items-center gap-3 rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        >
          <Settings size={20} />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
}