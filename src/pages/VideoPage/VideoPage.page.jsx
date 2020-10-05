import React, { useRef } from 'react';
import { withRouter } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer';
import VideoCardList from '../../components/VideoCardList';
import { useRelatedVids } from '../../utils/hooks/useYoutube';
import { Container } from './components';

const VideoPage = ({ match }) => {
  const sectionRef = useRef(null);

  const { params } = match;
  const { id } = params;

  const { relatedVids } = useRelatedVids(id);

  return (
    <Container ref={sectionRef}>
      <VideoPlayer videoId={id} />
      <VideoCardList videos={relatedVids} />
    </Container>
  );
};

export default withRouter(VideoPage);
