import React, { useEffect } from "react";

const ActivityContext = React.createContext();
const ActivityUpdateContext = React.createContext();

export const useActivity = () => {
  return React.useContext(ActivityContext);
};

export const useUpdateActivity = () => {
  return React.useContext(ActivityUpdateContext);
};

export const ActivityProvider = ({ children }) => {
  const [activity, updateActivity] = React.useState([]);
  const configs = { refresh: 5000 };

  const plexFetch = async () => {
    const resp = await fetch(
      `${process.env.REACT_APP_PLEX_REQUEST_SERVER}/torrents`
    );
    const activities = await resp.json();
    updateActivity(() => activities);
  };

  useEffect(() => {
    plexFetch();
    const interval = setInterval(() => plexFetch(), configs.refresh);
    return () => clearInterval(interval);
  }, []);
  return (
    <ActivityContext.Provider value={activity}>
      <ActivityUpdateContext.Provider value={updateActivity}>
        {children}
      </ActivityUpdateContext.Provider>
    </ActivityContext.Provider>
  );
};
