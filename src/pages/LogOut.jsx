import { useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../lib/firebase';

function Logout() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setLoading(true);

      await signOut(auth);

      alert("Logged out successfully!");

      navigate("/test-login");
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 dark:bg-gray-950">

      <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-900">

        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Logout
        </h1>

        <button
          onClick={handleLogout}
          disabled={loading}
          className="w-full rounded-lg bg-gray-900 px-4 py-2.5 font-medium text-white hover:bg-gray-800 disabled:opacity-50 dark:bg-white dark:text-gray-900"
        >
          {loading ? "Logging out..." : "Logout"}
        </button>

      </div>
    </div>
  );
}

export default Logout;