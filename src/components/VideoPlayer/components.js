import styled from 'styled-components';

export const VideoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 720px;
  height: 580px;
`;

export const Videoframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const CardBackground = styled.div`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 24px;
  height: auto;
  width: auto;

  margin: 8px;
`;
