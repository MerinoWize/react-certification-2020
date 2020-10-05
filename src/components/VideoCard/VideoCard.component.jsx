import React from 'react';
import { Card, CardText, CardTitle, VideoThumbnail } from './components';

const VideoCard = ({ videoSnippet, onClick }) => {
  const handleCardClick = (event) => {
    event.preventDefault();
    onClick();
  };

  return (
    <Card onClick={(e) => handleCardClick(e)}>
      <CardText>
        <VideoThumbnail src={videoSnippet.thumbnails.high.url} />
        <CardTitle> {videoSnippet.title} </CardTitle>
      </CardText>
    </Card>
  );
};

export default VideoCard;
