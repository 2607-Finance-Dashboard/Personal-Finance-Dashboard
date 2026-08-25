import { useState, useEffect } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { updatePassword } from "firebase/auth";
import { auth } from "../lib/firebase";

function SettingsSection({ darkMode, setDarkMode }) {
 const [profileVisibility, setProfileVisibility] = useState(() => {
    return JSON.parse(
      localStorage.getItem("profileVisibility") ?? "true"
    );
  });

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [saved, setSaved] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

 useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [darkMode]);

const handleSave = () => {
  localStorage.setItem(
    "profileVisibility",
    JSON.stringify(profileVisibility)
  );

  setSaved(true);

  setTimeout(() => {
    setSaved(false);
  }, 1000);
};
  const handlePasswordChange = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Please fill in all password fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match.");
      return;
    }

    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    const user = auth.currentUser;

    if (!user) {
      alert("No user is currently signed in.");
      return;
    }

    try {
      await updatePassword(user, newPassword);

      alert("Password updated successfully!");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setShowPasswordForm(false);
    } catch (error) {
      console.error(error);

      if (error.code === "auth/requires-recent-login") {
        alert("Please sign in again before changing your password.");
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <>
      <Card className="border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <CardHeader>
          <CardTitle className="ml-10 text-xl font-semibold text-gray-900 dark:text-white">
            Settings
          </CardTitle>

          <CardDescription className="ml-10 text-gray-500 dark:text-gray-400">
            Customize your account preferences.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
        

          <div className="flex items-center justify-between border-b border-gray-100 pb-5 dark:border-gray-700">
            <div className="space-y-1">
              <Label className="ml-10 text-base text-gray-900 dark:text-white">
                Appearance
              </Label>

              <p className="ml-10 text-sm text-gray-500 dark:text-gray-400">
                Choose your app theme.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {darkMode ? "Dark" : "Light"}
              </span>

              <Switch
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
            </div>
          </div>

          <div className="flex items-center justify-between border-b border-gray-100 pb-5 dark:border-gray-700">
            <div className="space-y-1">
              <Label className="ml-10 text-base text-gray-900 dark:text-white">
                Security
              </Label>

              <p className="ml-10 text-sm text-gray-500 dark:text-gray-400">
                Manage your account security.
              </p>
            </div>

            <Button
              variant="outline"
              onClick={() => setShowPasswordForm(true)}
              className="dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
            >
              Change Password
            </Button>
          </div>

          <div className="flex items-center justify-between border-b border-gray-100 pb-5 dark:border-gray-700">
            <div className="space-y-1">
              <Label className="ml-10 text-base text-gray-900 dark:text-white">
                Privacy
              </Label>

              <p className="ml-10 text-sm text-gray-500 dark:text-gray-400">
                Manage your privacy.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setShowPrivacy(!showPrivacy)}
              className="dark:text-white dark:border-gray-600"
            >
              {showPrivacy ? "Close" : "Manage"}
            </Button>
          </div>

          {showPrivacy && (
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="ml-10 font-medium text-gray-900 dark:text-white">
                    Profile Visibility
                  </p>

                  <p className="ml-10 text-sm text-gray-500 dark:text-gray-400">
                    Allow your profile information to be visible.
                  </p>
                </div>

                <Switch
                  checked={profileVisibility}
                  onCheckedChange={setProfileVisibility}
                />
              </div>
            </div>
          )}

          <div className="flex items-center justify-end gap-3 pt-2">
            {saved && (
              <p className="ml-10 text-sm text-green-600">
                Settings saved successfully!
              </p>
            )}

            <Button
              onClick={handleSave}
              className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900"
            >
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>

      {showPasswordForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-gray-900">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Change Password
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Update your password to keep your account secure.
            </p>

            <div className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label>Current Password</Label>

                <Input
                  type="password"
                  value={currentPassword}
                  onChange={(e) =>
                    setCurrentPassword(e.target.value)
                  }
                  placeholder="Enter current password"
                />
              </div>

              <div className="space-y-2">
                <Label>New Password</Label>

                <Input
                  type="password"
                  value={newPassword}
                  onChange={(e) =>
                    setNewPassword(e.target.value)
                  }
                  placeholder="Enter new password"
                />
              </div>

              <div className="space-y-2">
                <Label>Confirm New Password</Label>

                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  placeholder="Confirm new password"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setShowPasswordForm(false)}
              >
                Cancel
              </Button>

              <Button
                onClick={handlePasswordChange}
                className="bg-gray-900 text-white hover:bg-gray-800"
              >
                Update Password
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SettingsSection;