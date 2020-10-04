import React, { useRef } from 'react';
import VideoCardList from '../../components/VideoCardList';
// import './Home.styles.css';s

const HomePage = () => {
  const sectionRef = useRef(null);
  return (
    <div ref={sectionRef}>
      <VideoCardList />
    </div>
  );
};

export default HomePage;
