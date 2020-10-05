import React from 'react';
import {
  CardBackground,
  VideoContainer,
  VideoWindow,
  Videoframe,
  AddButton,
} from './components';
import { useCurrentVideo } from '../../providers/CurrentVideo';

const VideoPlayer = ({ videoId }) => {
  const { currentVideo } = useCurrentVideo();
  const { snippet } = currentVideo;

  // const handleAddVideoButton = (event) => {
  //   event.preventDefault();
  // };

  return videoId && snippet ? (
    <CardBackground>
      <VideoContainer>
        <VideoWindow>
          <Videoframe
            title={videoId}
            className="video-iframe"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameborder="0"
            allowfullscreen
          />
        </VideoWindow>
      </VideoContainer>
      <h1>{snippet.title || 'null'}</h1>
      <AddButton type="button"> + </AddButton>
    </CardBackground>
  ) : (
    <p> NULL </p>
  );
};

export default VideoPlayer;
