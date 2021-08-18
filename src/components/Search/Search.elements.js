import styled from "styled-components";
import Icon from "../global/Icon";

export const Container = styled.div`
  display: inline-block;
  height: 40px;
  margin-left: 10px;
  position: relative;
  vertical-align: super;
  width: 360px;
`;

export const InputContainer = styled.div`
  align-items: center;
  background: ${({ focus }) =>
    focus ? "var(--color-focus-background)" : "hsla(0, 0%, 100%, 0.08)"};
  border-radius: 4px;
  color: ${({ focus }) =>
    focus ? "var(--color-focus-foreground)" : "var(--color-focus-background)"};
  display: flex;
  flex-flow: row nowrap;
  font-family: Open Sans Regular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 13px;
  height: 40px;
  padding: 4px;
  transition: background-color 0.2s, color 0.2s;
`;

export const InputIcon = styled(Icon)`
  font-size: 14px;
  margin: 4px 10px 0 18px;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  flex-grow: 1;
  height: 100%;
  outline: 0;
`;
