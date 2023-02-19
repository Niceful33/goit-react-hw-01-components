import styled from 'styled-components';

export const Item = styled.li`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  height: 100px;
  width: 350px;
  padding: 10px 20px;
  margin-bottom: 10px;
  background: rgba(95, 201, 21, 0.2);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  align-items: center;
  gap: 30px;
`;

export const Indicator = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
