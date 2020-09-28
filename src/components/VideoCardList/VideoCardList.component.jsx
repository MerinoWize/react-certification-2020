import React from 'react';
import VideoCard from '../VideoCard';
import { usePopularVids } from '../../utils/hooks/useYoutube';
import { CardListBoard } from './components';

const VideoCardList = () => {
  const { popularVids } = usePopularVids();

  if (popularVids.length) {
    const cardlist = popularVids.map((video) => (
      <VideoCard videoSnippet={video.snippet} key={video.id} />
    ));

    return <CardListBoard>{cardlist}</CardListBoard>;
  }

  return <span> LOADING... </span>;
};

export default VideoCardList;
