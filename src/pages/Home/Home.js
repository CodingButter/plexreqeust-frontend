import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import Slider from "../../components/Slider/Slider";
import styled from "styled-components";
import {
  useUserSettings,
  useSetUserSettings,
} from "../../context/UserSettingsContext";
import { useStatefulObject } from "../../hooks/useStatefulObject";

const Home = () => {
  const userSettings = useUserSettings();
  const updateSettings = useSetUserSettings();
  const handleUpdateValue = (value) => {
    userSettings.mediaScale.value = value;
    updateSettings(userSettings);
  };
  const [statefulObject, updateStatefulObject] = useStatefulObject({
    value1: 1,
    value2: "Hello",
  });

  const handleUpdateHello = () => {
    console.log("clicked");
    updateStatefulObject({ value2: "test" });
  };

  return (
    <>
      <PageHeader onClick={handleUpdateHello}>Home</PageHeader>
      <p>{statefulObject.value2}</p>
      <Wrapper>
        <Slider
          sliderValue={userSettings.mediaScale.value}
          updateSliderValue={handleUpdateValue}
        />
      </Wrapper>
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  position: relative;
  width: 100px;
  height: 50px;
`;
