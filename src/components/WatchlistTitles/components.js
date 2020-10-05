import styled from 'styled-components';

export const TitleCard = styled.div`
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: auto;
  width: 100%;
  padding: 0 8px;

  margin: 8px;
`;

export const TitleText = styled.span`
  & :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const TitlesHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
`;

export const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b3b3b3;
  padding: 8px;
  border-radius: 50%;
  color: white;
  font-size: 18px;
  font-weight: bolder;
  text-decoration: none;
  height: 24px;
  width: 24px;

  & :hover {
    cursor: pointer;
  }
`;
