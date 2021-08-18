import { useLocation } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";
import {
  SidebarUnderlay,
  SidebarContainer,
  SidebarActivityButton,
  OverflowWrap,
} from "./Sidebar.elements";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  const location = useLocation();
  const expanded = useSidebar();

  const sidebarLinks = [
    {
      title: "Home",
      link: "/",
      icon: "home",
    },
    {
      title: "Movies",
      link: "/movies",
      icon: "movies",
    },
    {
      title: "TV Shows",
      link: "/tv",
      icon: "tv",
    },
    {
      title: "Activity",
      link: "/activity",
      Component: SidebarActivityButton,
    },
  ];

  return (
    <>
      {!expanded ? (
        <SidebarUnderlay className="sidebar-underlay"></SidebarUnderlay>
      ) : (
        ""
      )}
      <SidebarContainer expanded={expanded} className="sidebar-container">
        <OverflowWrap expanded={expanded} className="overflow-wrap">
          <SidebarLinks location={location} sidebarLinks={sidebarLinks} />
        </OverflowWrap>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
