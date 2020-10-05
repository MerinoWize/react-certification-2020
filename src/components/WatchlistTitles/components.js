import styled from 'styled-components';

export const TitleCard = styled.div`
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  background-color: white;
  height: auto;
  width: 100%;
  padding: 0 8px;

  margin: 8px;

  & :hover {
    cursor: pointer;
  }
`;

export const TitlesHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
`;
