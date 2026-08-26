import React, { useState } from 'react';
import { User, Bell, Palette, Lock, Save } from 'lucide-react';

export default function Settings() {
  const [settings, setSettings] = useState({
    name: 'FinTrack User',
    email: 'user@example.com',
    currency: 'KES',
    notifications: true,
    darkMode: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Settings
        </h1>

        <p className="mt-1 text-slate-500">
          Manage your FinTrack account and preferences.
        </p>
      </div>

      {/* Profile */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-lg bg-blue-100 p-3">
            <User className="text-blue-600" size={22} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Profile
            </h2>

            <p className="text-sm text-slate-500">
              Update your personal information.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={settings.name}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

        </div>

      </div>

      {/* Preferences */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-lg bg-purple-100 p-3">
            <Palette className="text-purple-600" size={22} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Preferences
            </h2>

            <p className="text-sm text-slate-500">
              Customize your finance dashboard.
            </p>
          </div>
        </div>

        <div className="space-y-5">

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Currency
            </label>

            <select
              name="currency"
              value={settings.currency}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-slate-400 md:w-1/2"
            >
              <option value="KES">Kenyan Shilling (KES)</option>
              <option value="USD">US Dollar (USD)</option>
              <option value="EUR">Euro (EUR)</option>
              <option value="GBP">British Pound (GBP)</option>
            </select>
          </div>

          <div className="flex items-center justify-between border-t pt-5">

            <div className="flex items-center gap-3">
              <Bell size={20} className="text-slate-500" />

              <div>
                <p className="font-medium text-slate-800">
                  Notifications
                </p>

                <p className="text-sm text-slate-500">
                  Receive reminders about your finances.
                </p>
              </div>
            </div>

            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
              className="h-5 w-5"
            />

          </div>

          <div className="flex items-center justify-between border-t pt-5">

            <div className="flex items-center gap-3">
              <Palette size={20} className="text-slate-500" />

              <div>
                <p className="font-medium text-slate-800">
                  Dark Mode
                </p>

                <p className="text-sm text-slate-500">
                  Change the appearance of your dashboard.
                </p>
              </div>
            </div>

            <input
              type="checkbox"
              name="darkMode"
              checked={settings.darkMode}
              onChange={handleChange}
              className="h-5 w-5"
            />

          </div>

        </div>

      </div>

      {/* Security */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-lg bg-red-100 p-3">
            <Lock className="text-red-600" size={22} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Security
            </h2>

            <p className="text-sm text-slate-500">
              Keep your account secure.
            </p>
          </div>
        </div>

        <button className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 hover:bg-slate-100">
          Change Password
        </button>

      </div>

      {/* Save */}
      <div className="flex justify-end">

        <button
          onClick={handleSave}
          className="flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-700"
        >
          <Save size={18} />
          Save Changes
        </button>

      </div>

    </div>
  );
}