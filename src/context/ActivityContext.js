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
  const [activity, updateActivity] = React.useState({
    active: [],
    qued: [],
    complete: [],
  });

  const plexFetch = async () => {
    const resp = await fetch(
      `${process.env.REACT_APP_PLEX_REQUEST_SERVER}/movies`
    );
    const activities = await resp.json(function (k, v) {
      return typeof v === "object" || isNaN(v) ? v : parseInt(v, 10);
    });
    const filtered = activities.map(
      ({
        title,
        poster,
        status,
        downloadSpeed,
        numSeeders,
        connections,
        completedLength,
        totalLength,
        length,
      }) => {
        if (length) totalLength = length;
        return {
          title,
          poster,
          downloadSpeed: parseInt(downloadSpeed),
          numSeeders: parseInt(numSeeders),
          connections: parseInt(connections),
          completedLength: parseInt(completedLength),
          totalLength: parseInt(totalLength),
          status,
        };
      }
    );
    const active = filtered.filter(
      ({ completedLength }) => parseInt(completedLength) > 0
    );
    const qued = filtered.filter(
      ({ completedLength }) => parseInt(completedLength) === 0
    );
    updateActivity({ qued, active });
  };

  useEffect(() => {
    plexFetch();
    const interval = setInterval(() => plexFetch(), 5000);
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
