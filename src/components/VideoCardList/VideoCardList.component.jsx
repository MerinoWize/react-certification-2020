import React from 'react';
import { useHistory } from 'react-router-dom';
import VideoCard from '../VideoCard';
import { CardListBoard } from './components';
import { useCurrentVideo } from '../../providers/CurrentVideo';

const VideoCardList = ({ videos }) => {
  const { setVideo } = useCurrentVideo();
  const history = useHistory();

  const handleClick = async (video) => {
    console.log(video);
    await setVideo(video);
    const { id } = video;
    if (typeof id === 'string') {
      history.push(`/video/${video.id}`);
    } else {
      history.push(`/video/${video.id.videoId}`);
    }
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
