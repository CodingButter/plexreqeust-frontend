import MediaResultContainer from "../../components/MediaResultContainer/MediaResultContainer";
import PageHeader from "../../components/PageHeader";
import { HeaderLeft, HeaderRight } from "./Activity.elements";
import { useActivity } from "../../context/ActivityContext";
import {
  useUserSettings,
  useSetUserSettings,
} from "../../context/UserSettingsContext";
import { StyledSlider } from "./Activity.elements";
const Activity = () => {
  const activeTorrents = useActivity();
  const userSettings = useUserSettings();
  const updateSettings = useSetUserSettings();
  const handleUpdateValue = (value) => {
    userSettings.mediaScale.value = value;
    updateSettings(() => userSettings);
  };
  return (
    <>
      <PageHeader className="page-header">
        <HeaderLeft>Activity</HeaderLeft>
        <HeaderRight>
          <StyledSlider
            sliderValue={userSettings}
            updateSliderValue={handleUpdateValue}
          />
        </HeaderRight>
      </PageHeader>
      <MediaResultContainer medialist={activeTorrents} />
    </>
  );
};

export default Activity;
