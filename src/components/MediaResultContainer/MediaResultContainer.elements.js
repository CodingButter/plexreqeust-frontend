import styled from "styled-components";

export const MediaResultWrap = styled.div`
  display: contents;
  position: relative;
`;

export const MediaContent = styled.div`
  flex-grow: 1;
  position: relative;
`;
export const MediaContainerHeader = styled.h1`
  font-size: 15px;
  color: white;
  padding: 0px 0px 0px 30px;
  display: flex;
`;
export const HeaderWrap = styled.span`
  padding: 5px;
`;

export const PageManager = styled.div`
  display: flex;
`;
export const Button = styled.button`
  border-radius: 4px;
  border: none;
  display: flex;
  font-size: 20px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin: 2px;
  filter: ${({ selected }) => (selected ? "invert()" : "none")};
  &:hover {
    filter: ${({ selected }) => (!selected ? "invert()" : "none")};
  }
  color: var(--color-accent-background);
  background: #1f2326;
`;
