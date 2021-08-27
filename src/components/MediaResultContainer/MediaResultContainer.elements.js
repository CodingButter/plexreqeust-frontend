import styled from "styled-components";

export const MediaResultWrap = styled.div`
  display: contents;
  position: relative;
  padding-bottom: 50px;
`;

export const MediaContent = styled.div`
  flex-grow: 1;
  position: relative;
`;
export const MediaContainerHeader = styled.h1`
  font-size: 15px;
  color: white;
  padding: 0px 0px 0px 30px;
  display: grid;
`;
export const HeaderWrap = styled.span`
  padding: 5px;
  position: relative;
  display: grid;
`;

export const PageManager = styled.div`
  display: flex;
  width: 100%;
  top: 24px;
  clear: both;
`;
export const Button = styled.button`
  border-radius: 4px;
  border: none;
  display: inline-block;
  position: relative;
  font-size: 15px;
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
