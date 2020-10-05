import React, { useRef } from 'react';
import { withRouter } from 'react-router-dom';
import WatchlistTitles from '../../components/WatchlistTitles';

const VideoPage = () => {
  const sectionRef = useRef(null);

  return (
    <div ref={sectionRef}>
      <WatchlistTitles />
    </div>
  );
};

export default withRouter(VideoPage);
