import{
    LayoutDashboard,
    ArrowLeftRight,
    Wallet,
    Target,
    BarChart3,
    Settings,
} from "lucide-react";

export default function Sidebar() {
    const menuItems = [
     {
        name:"Dasboard",
        icon:LayoutDashboard,
     },
     {
        name:"Transactions",
        icon:ArrowLeftRight,
     },
     {
        name:"Budgets",
        icon:Wallet,
     },
     {
        name:"Goals",
        icon:Target,
     },
     {
        name:"Reports",
        icon:BarChart3,
     },

   ];

   return (
    <aside className="Flex min-h-screen w-64 flex-col border-r bg-white p-4">
        <nav className="flex-1 space-y-2">
            {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                    <button
                    key={item.name}
                    className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                    >
                        <Icon size={20}/>
                        <span>{item.name}</span>
                    </button>
                );
            })} 
        </nav>

        <button className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
            <Settings size={20}/>
            <span>Settings</span>
        </button>
    </aside>
   );
}