import React, { useState, useEffect, useContext, useCallback } from 'react';
import { storage } from '../../utils/storage';
import { CV_STORAGE_KEY } from '../../utils/constants';

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
    const storedVideo = storage.get(CV_STORAGE_KEY);

    setCurrentVideo(storedVideo);
  }, []);

  const setVideo = useCallback((video) => {
    setCurrentVideo(video);
    storage.set(CV_STORAGE_KEY, video);
  }, []);

  return (
    <CurrentVideoContext.Provider value={{ setVideo, currentVideo }}>
      {children}
    </CurrentVideoContext.Provider>
  );
}

export { useCurrentVideo };
export default CurrentVideoProvider;
