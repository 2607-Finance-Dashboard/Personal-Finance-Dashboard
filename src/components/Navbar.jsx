import {Bell, User} from "lucide-react";



export default function Navbar() {
    return(
        <nav className="flex items-center justify-between boarder-b bg-white px-6 py-4">
            <div>
                <h1 className="text-xl font-bold text-gray-900">
                    FinTrack
                </h1>
                <p className="text-sm text-gray-900">
                    Personal finance
                </p>
            </div>
            <div className="flex items-center gap-4">
                <button className="rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    arial-label="Notifications">
                        <Bell size={20}/>
                </button>
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
                        <User size={18}/>
                    </div>

                    <div className="hidden sm:block">
                        <p className="text-sm font-medium text-gray-900">
                            Venus
                        </p>
                        <p className="text-xs text-gray-500">
                            Personal Account
                        </p>
                    </div>
                    
                </div>
            </div>
        </nav>
    
    )
    
}