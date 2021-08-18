import styled from "styled-components";
import { Link } from "react-router-dom";

export const ALink = styled(Link)`
  color: hsla(0, 0%, 100%, 0.7);
  -webkit-tap-highlight-color: transparent;
  background: none;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  margin: 0;
  outline: none;
  padding: 0;
  text-align: inherit;
  text-decoration: none;
  touch-action: manipulation;
  transition: color 0.2s;
  -webkit-user-select: none;
  user-select: none;
  &:hover {
    color: #fff;
  }
`;

export const ButtonLink = styled.button`
  color: hsla(0, 0%, 100%, 0.7);
  -webkit-tap-highlight-color: transparent;
  background: none;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  margin: 0;
  outline: none;
  padding: 0;
  text-align: inherit;
  text-decoration: none;
  touch-action: manipulation;
  transition: color 0.2s;
  -webkit-user-select: none;
  user-select: none;
  &:hover {
    color: #fff;
  }
`;
