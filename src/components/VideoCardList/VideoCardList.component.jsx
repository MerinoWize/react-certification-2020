import React from 'react';
import { useHistory } from 'react-router-dom';
import VideoCard from '../VideoCard';
import { CardListBoard } from './components';
import { useCurrentVideo } from '../../providers/CurrentVideo';

const VideoCardList = ({ videos }) => {
  const { setVideo } = useCurrentVideo();
  const history = useHistory();

  const handleClick = async (video) => {
    await setVideo(video);
    history.push(`/video/${video.id}`);
  };

  if (videos.length) {
    const cardlist = videos.map((video) => (
      <VideoCard
        onClick={() => handleClick(video)}
        videoSnippet={video.snippet}
        key={video.id}
      />
    ));

    return <CardListBoard>{cardlist}</CardListBoard>;
  }

  return <span> LOADING... </span>;
};

export default VideoCardList;
