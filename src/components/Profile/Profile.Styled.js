import styled from 'styled-components';

export const ProfileInfo = styled.div`
  width: 450px;
  background-color: rgba(211, 211, 211, 0.6);
  padding: 80px;
  margin-left: auto;
  margin-right: auto;
`;

export const Description = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  padding-top: 30px;
  padding-bottom: 30px;
`;
export const Avatar = styled.img`
  height: 200px;
`;
export const Name = styled.p`
  margin-bottom: 5px;
  font-size: 24px;
  font-weight: 700;
`;
export const Stats = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  background-color: white;
  list-style: none;
  justify-content: center;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid gray;
  background-color: rgb(192, 192, 192);
  width: 100px;
  height: 70px;
`;
export const Info = styled.p`
  margin: 0 0 4px;
  text-align: center;
  font-size: 24px;
  color: #222222;
`;
