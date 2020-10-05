import styled from 'styled-components';

export const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const VideoWindow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 720px;
  height: 580px;
`;

export const Videoframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

export const CardBackground = styled.div`
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 24px;
  height: auto;
  width: 750px;
  margin: 560px 8px 16px 8px;
`;

export const AddButton = styled.div`
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
  height: 40px;
  width: 40px;

  & :hover {
    cursor: pointer;
  }
`;
