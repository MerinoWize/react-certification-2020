import React from 'react';
import { useHistory } from 'react-router-dom';
import { useWatchlist } from '../../providers/Watchlist';
import { useCurrentVideo } from '../../providers/CurrentVideo';
import { TitleCard, TitlesHolder, RemoveButton, TitleText } from './components';

const WatchlistTitles = () => {
  const history = useHistory();
  const { watchlist, removeVideo } = useWatchlist();
  const { setVideo } = useCurrentVideo();

  const goToVideo = async (event, video) => {
    event.preventDefault();
    await setVideo(video.data);
    history.push(`/video/${video.id}`);
  };

  const removeVideoFromWL = (event, index) => {
    event.preventDefault();
    removeVideo(index);
  };

  return (
    <TitlesHolder>
      {watchlist.map((video, index) => (
        <TitleCard key={video.id}>
          <TitleText onClick={(e) => goToVideo(e, video)}>{video.title}</TitleText>
          <RemoveButton onClick={(e) => removeVideoFromWL(e, index)}>X</RemoveButton>
        </TitleCard>
      ))}
    </TitlesHolder>
  );
};

export default WatchlistTitles;
