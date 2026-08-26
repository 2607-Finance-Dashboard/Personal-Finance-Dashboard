import ProfileSection from "../components/ProfileSection";
import SettingsSection from "../components/SettingsSection";

function ProfileSettings({ darkMode, setDarkMode }) {
  return (
    <main className="min-h-screen bg-gray-50 p-4 transition-colors dark:bg-gray-950 md:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <ProfileSection />

        <SettingsSection
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>
    </main>
  );
}

export default ProfileSettings;