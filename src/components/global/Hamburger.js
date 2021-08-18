import styled from "styled-components";
import Icon from "./Icon";
import { ButtonLink } from "./Link";
import { useSetSidebar } from "../../context/SidebarContext";

export const HamburgerIcon = styled(Icon)`
  top: 0;
`;

const Hamburger = () => {
  const toggleExpanded = useSetSidebar();
  return (
    <ButtonLink
      onClick={toggleExpanded}
      aria-label="Collapse"
      type="button"
      role="button"
      className="hamburger-button"
    >
      <HamburgerIcon iconName="hamburger" />
    </ButtonLink>
  );
};

export default Hamburger;
