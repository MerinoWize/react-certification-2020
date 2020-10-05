import React from 'react';
import { useHistory } from 'react-router-dom';
import { useWatchlist } from '../../providers/Watchlist';
import { useCurrentVideo } from '../../providers/CurrentVideo';
import { TitleCard, TitlesHolder } from './components';

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

  if (watchlist.length) {
    const titles = watchlist.map((video, index) => (
      <TitleCard onClick={(e) => goToVideo(e, video)} key={video.id}>
        {video.title}
      </TitleCard>
    ));

    return <TitlesHolder>{titles}</TitlesHolder>;
  }

  return <span> LOADING... </span>;
};

export default WatchlistTitles;
