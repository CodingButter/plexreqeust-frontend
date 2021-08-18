import { useActivity } from "../../context/ActivityContext";
import {
  ActivityLink,
  IconContainer,
  ActivityIcon,
  ActivityLabel,
} from "./ActivityButton.elements";
const ActivityButton = () => {
  const activity = useActivity();
  return (
    <ActivityLink
      type="button"
      role="button"
      to="/activity"
      className="activity-link"
    >
      <IconContainer className="icon-container" activity={activity.length}>
        <ActivityIcon iconName="activity"></ActivityIcon>
      </IconContainer>
      <ActivityLabel className="activity-label" activity={activity.length}>
        {activity.length > 0 && activity.length}
      </ActivityLabel>
    </ActivityLink>
  );
};

export default ActivityButton;
