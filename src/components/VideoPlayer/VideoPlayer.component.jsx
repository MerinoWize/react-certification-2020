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
import { useAuth } from '../../providers/Auth';

const VideoPlayer = ({ videoId }) => {
  const { authenticated } = useAuth();
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
      {authenticated ? (
        <div>
          <AddButton type="button" onClick={handleAddVideoButton}>
            +
          </AddButton>
          Add to Watchlist!
        </div>
      ) : null}
    </CardBackground>
  ) : (
    <p> NULL </p>
  );
};

export default VideoPlayer;
