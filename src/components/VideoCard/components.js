import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  background-color: white;
  height: 280px;
  width: 280px;

  margin: 8px;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
  padding: 8px;
`;

export const CardTitle = styled.span`
  font-size: 14px;
  font-family: Arial Black;
  text-overflow: ellipsis;
`;

export const VideoThumbnail = styled.img`
  height: auto;
  width: 100%;
  border-radius: 3px;
  margin-bottom: 8px;
`;
