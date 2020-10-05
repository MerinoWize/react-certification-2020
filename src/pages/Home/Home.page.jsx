import React, { useRef } from 'react';
import VideoCardList from '../../components/VideoCardList';
import { usePopularVids } from '../../utils/hooks/useYoutube';

const HomePage = () => {
  const sectionRef = useRef(null);
  const { popularVids } = usePopularVids();

  return (
    <div ref={sectionRef}>
      <VideoCardList videos={popularVids} />
    </div>
  );
};

export default HomePage;
