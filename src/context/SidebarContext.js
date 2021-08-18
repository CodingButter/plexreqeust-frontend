import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
const SidebarContext = React.createContext();
const SidebarUpdateContext = React.createContext();

export const useSidebar = () => {
  return useContext(SidebarContext);
};

export const useSetSidebar = () => {
  return useContext(SidebarUpdateContext);
};

export const SidebarProvider = ({ children }) => {
  const [sidebar, updateSidebar] = useLocalStorage("expanded", false);
  const toggleExpanded = () => {
    updateSidebar((prevExpanded) => !prevExpanded);
  };
  return (
    <SidebarContext.Provider value={sidebar}>
      <SidebarUpdateContext.Provider value={toggleExpanded}>
        {children}
      </SidebarUpdateContext.Provider>
    </SidebarContext.Provider>
  );
};
