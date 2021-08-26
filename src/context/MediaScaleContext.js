import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import defaultSettings from "../bin/defaultsettings.json";
const MediaScaleContext = React.createContext();
const MediaScaleUpdateContext = React.createContext();

export const useMediaScale = () => {
  return useContext(MediaScaleContext);
};

export const useUpdateMediaScale = () => {
  return useContext(MediaScaleUpdateContext);
};

export const MediaScaleProvider = ({ children }) => {
  const [mediaScale, updateMediaScale] = useLocalStorage(
    "mediaScale",
    defaultSettings.media.mediaScale.value
  );
  const handleUpdateMedia = (value) => {
    updateMediaScale(value);
  };
  return (
    <MediaScaleContext.Provider value={mediaScale}>
      <MediaScaleUpdateContext.Provider value={handleUpdateMedia}>
        {children}
      </MediaScaleUpdateContext.Provider>
    </MediaScaleContext.Provider>
  );
};
