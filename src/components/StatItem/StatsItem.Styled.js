import styled from 'styled-components';

export const Item = styled.li`
  height: 70px;
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: aquamarine; */
  border: 1px solid gray;
`;

export const Label = styled.span`
  color: white;
`;

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
