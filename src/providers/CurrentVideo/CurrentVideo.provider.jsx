import React, { useState, useEffect, useContext, useCallback } from 'react';

const CurrentVideoContext = React.createContext(null);

function useCurrentVideo() {
  const context = useContext(CurrentVideoContext);
  if (!context) {
    throw new Error(`Can't use "useCurrentVideo" without an CurrentVideoProvider!`);
  }
  return context;
}

function CurrentVideoProvider({ children }) {
  const [currentVideo, setCurrentVideo] = useState({});

  useEffect(() => {
    setCurrentVideo({});
  }, []);

  const setVideo = useCallback((video) => {
    setCurrentVideo(video);
  }, []);

  return (
    <CurrentVideoContext.Provider value={{ setVideo, currentVideo }}>
      {children}
    </CurrentVideoContext.Provider>
  );
}

export { useCurrentVideo };
export default CurrentVideoProvider;
