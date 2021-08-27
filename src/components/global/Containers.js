/**
Design for desktop displays from 1024×768 through 1920×1080
Design for mobile displays from 360×640 through 414×896
Design for tablet displays from 601×962 through 1280×800
 */
import styled from "styled-components";
const screenSizes = [360, 601, 1280, 1920];
screenSizes.reverse();
export const Grid = styled.div`
  padding: 5px;
  display: grid;
  align-items: center;
  & > * {
    display: grid-items;
  }
  ${({ template }) =>
    template.map(
      (minSize, index) =>
        ` @media screen and (max-width: ${screenSizes[index]}px){
            ${minSize.rows && `grid-template-rows:${minSize.rows};`}
            ${minSize.columns && `grid-template-columns:${minSize.columns};`}
            ${minSize.order && `grid-template-areas:${minSize.order};`}
            ${
              minSize.order &&
              `& > * {
                  
                  ${minSize.order.split(" ").map(
                    (area, child) => `
                    &:nth-child(${child + 1}){
                        grid-area:${area};
                        ${
                          minSize.children &&
                          Object.keys(minSize.children[child]).map(
                            (property) => {
                              return `${property}:${minSize.children[child][property]};`;
                            }
                          )
                        }
                    }`
                  )}
            }`
            }
    }`
    )}
`;

export const Container = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  grid-auto-flow: column;
`;
