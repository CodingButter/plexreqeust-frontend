import { useActivity } from "../../context/ActivityContext";
import {
  ActivityLink,
  IconContainer,
  ActivityIcon,
  ActivityLabel,
} from "./ActivityButton.elements";
const ActivityButton = () => {
  const { active } = useActivity();
  return (
    <ActivityLink
      type="button"
      role="button"
      to="/activity"
      className="activity-link"
    >
      <IconContainer className="icon-container" activity={active.length}>
        <ActivityIcon iconName="activity"></ActivityIcon>
      </IconContainer>
      <ActivityLabel className="activity-label" activity={active.length}>
        {active.length > 0 && active.length}
      </ActivityLabel>
    </ActivityLink>
  );
};

export default ActivityButton;
