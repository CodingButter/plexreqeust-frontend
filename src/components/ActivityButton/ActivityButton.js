import { useEffect, useState } from "react";
import getActiveTorrents from "../../hooks/getActiveTorrents";
import {
  ActivityLink,
  IconContainer,
  ActivityIcon,
  ActivityLabel,
} from "./ActivityButton.elements";
const ActivityButton = () => {
  const [active, setActive] = useState([]);

  const handleSetActive = () => {
    const fetchedActiveTorrents = getActiveTorrents();
    if (active !== JSON.stringify(fetchedActiveTorrents.active.length))
      setActive(fetchedActiveTorrents.active.length);
  };

  useEffect(() => {
    const useInterval = setInterval(() => {
      handleSetActive();
    });
    return () => {
      clearInterval(useInterval);
    };
  }, []);
  return (
    <ActivityLink
      type="button"
      role="button"
      to="/activity"
      className="activity-link"
    >
      <IconContainer className="icon-container" activity={active}>
        <ActivityIcon iconName="activity"></ActivityIcon>
      </IconContainer>
      <ActivityLabel className="activity-label" activity={active}>
        {active > 0 && active}
      </ActivityLabel>
    </ActivityLink>
  );
};

export default ActivityButton;
