import React from 'react';
import {
  CardBackground,
  VideoContainer,
  VideoWindow,
  Videoframe,
  AddButton,
} from './components';
import { useCurrentVideo } from '../../providers/CurrentVideo';
import { useWatchlist } from '../../providers/Watchlist';

const VideoPlayer = ({ videoId }) => {
  const { currentVideo } = useCurrentVideo();
  const { addVideo } = useWatchlist();
  const { snippet } = currentVideo;

  const handleAddVideoButton = (event) => {
    event.preventDefault();
    addVideo(videoId, snippet.title, currentVideo);
  };

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
      <AddButton type="button" onClick={handleAddVideoButton}>
        +
      </AddButton>
    </CardBackground>
  ) : (
    <p> NULL </p>
  );
};

export default VideoPlayer;
