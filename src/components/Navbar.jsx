import { useEffect, useState } from "react";
import { Bell, User, Settings, LogOut } from "lucide-react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
    const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
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

                    <button className="hidden sm:block">
                        <p className="text-sm font-medium text-gray-900">
                            {user?.displayName || user?.email?.split("@")[0] || "User"}
                        </p>

                        <p className="text-xs text-gray-500">
  Personal Account
                        </p>
                    </button>

                   
                    <button
                       onClick={handleLogout}
                       className="rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
                       aria-label="Logout"
                    >
                     <LogOut size={20} />
                    </button>
                    <button
                       onClick={() => navigate("/logout")}
                           className="rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100"
                    >
                            Log Out
                    </button>
                    
                </div>
            </div>
        </nav>
    
    )
    
}