import styled from "styled-components";
import icons from "../../bin/icons.json";
const SVG = styled.svg`
  fill: currentColor;
  display: inline-block;
  height: 1em;
  line-height: 1;
  position: relative;
  top: -2px;
  vertical-align: middle;
  width: 1em;
`;

const Icon = ({ iconName }) => {
  return (
    <SVG
      className={`${iconName}-icon`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 560 560"
    >
      <path d={icons[iconName]} />
    </SVG>
  );
};
export default Icon;
