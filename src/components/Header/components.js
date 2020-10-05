import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: auto;
  line-height: 18px;
  border-radius: 0 0 30px 30px;
  padding: 0 30px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b3b3b3;
  padding: 8px;
  border-radius: 8px;
  color: white;
  font-size: 18px;
  text-decoration: none;
  border: none;

  :hover {
    cursor: pointer;
  }
`;

export const TitleButton = styled.button`
  margin: none;
  background: none;
  border: none;
  :hover {
    cursor: pointer;
  }
`;
