import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import defaultSettings from "../bin/defaultsettings.json";
const UserSettingsContext = React.createContext();
const UserSettingsUpdateContext = React.createContext();

export const useUserSettings = () => {
  return useContext(UserSettingsContext);
};

export const useSetUserSettings = () => {
  return useContext(UserSettingsUpdateContext);
};

export const UserSettingsProvider = ({ children }) => {
  const [userSettings, updateUserSettings] = useLocalStorage(
    "settings",
    defaultSettings
  );
  const updateSettings = (settings) => {
    updateUserSettings((previousSettings) => ({
      ...previousSettings,
      ...settings,
    }));
  };
  return (
    <UserSettingsContext.Provider value={userSettings}>
      <UserSettingsUpdateContext.Provider value={updateSettings}>
        {children}
      </UserSettingsUpdateContext.Provider>
    </UserSettingsContext.Provider>
  );
};
