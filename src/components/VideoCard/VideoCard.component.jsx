import React from 'react';
import { Card, CardText, CardTitle, VideoThumbnail } from './components';

const VideoCard = ({ videoSnippet }) => {
  return (
    <Card>
      <CardText>
        <VideoThumbnail src={videoSnippet.thumbnails.high.url} />
        <CardTitle> {videoSnippet.title} </CardTitle>
      </CardText>
    </Card>
  );
};

export default VideoCard;
