import React from 'react';
import { CardBackground, VideoContainer, Videoframe } from './components';
import { useCurrentVideo } from '../../providers/CurrentVideo';
// import { useWatchlist } from '../../providers/Watchlist';

const VideoPlayer = ({ videoId }) => {
  const { currentVideo } = useCurrentVideo();
  // const { addVideo } = useWatchlist();
  const { snippet } = currentVideo || {};

  console.log(JSON.stringify(currentVideo));

  // const handleAddVideoButton = (event) => {
  //   event.preventDefault();
  // };

  return videoId ? (
    <CardBackground>
      <VideoContainer className="video-player">
        <Videoframe
          title={videoId}
          className="video-iframe"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameborder="0"
          allowfullscreen
        />
      </VideoContainer>
      <h1>{snippet.title || 'null'}</h1>
      <button type="button"> + </button>
    </CardBackground>
  ) : (
    <p> NULL </p>
  );
};

export default VideoPlayer;
