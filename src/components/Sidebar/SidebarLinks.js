import {
  SidebarLink,
  SidebarLinkWrap,
  SidebarIconWrap,
  SidebarLinkTitleWrap,
  SidebarLinkTitle,
} from "./Sidebar.elements";
import { Icon } from "../global";

const SidebarLinks = ({ location, sidebarLinks }) => {
  return sidebarLinks.map(({ title, link, icon, Component }) => {
    return (
      <SidebarLinkWrap
        key={title}
        selected={location.pathname === link}
        className="sidebar-link-wrap"
      >
        <SidebarLink
          to={{
            pathname: link,
            state: {
              title,
            },
          }}
          className="sidebar-link"
        >
          <SidebarIconWrap className="sidebar-icon-wrap">
            {Component ? (
              <Component />
            ) : (
              <Icon className="sidebar-icon" iconName={icon} />
            )}
          </SidebarIconWrap>
          <SidebarLinkTitleWrap className="sidebar-link-title-wrap">
            <SidebarLinkTitle className="sidebar-link-title">
              {title}
            </SidebarLinkTitle>
          </SidebarLinkTitleWrap>
        </SidebarLink>
      </SidebarLinkWrap>
    );
  });
};
export default SidebarLinks;
