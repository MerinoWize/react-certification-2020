import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 250px;
  width: auto;

  :hover {
    cursor: pointer;
    box-shadow: 10px 20px black;
  }
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
  padding: 8px;
`;

export const CardTitle = styled.span`
  font-size: 18px;
  font-family: Arial Black;
  text-overflow: ellipsis;
`;
