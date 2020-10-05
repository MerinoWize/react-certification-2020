import React, { useState, useEffect, useContext, useCallback } from 'react';

import { WL_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

const WatchlistContext = React.createContext(null);

const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error(`Can't use "useWatchlist" without a WatchlistProvider!`);
  }
  return context;
};

const WatchlistProvider = ({ children }) => {
  const [watchlists, setWatchlists] = useState([{}]);
  // [{
  //   name: 'defaultList',
  //   videos: [],
  // }]

  useEffect(() => {
    const lastWatchlistState = storage.get(WL_STORAGE_KEY);
    const lasWatchListStateData = JSON.parse(lastWatchlistState);

    setWatchlists(lasWatchListStateData);
  }, []);

  const addVideo = useCallback(
    (index, id) => {
      const newWhatchlists = watchlists;
      newWhatchlists[index].videos.push(id);

      setWatchlists(newWhatchlists);
      storage.set(WL_STORAGE_KEY, newWhatchlists);
    },
    [watchlists]
  );

  const removeVideo = useCallback(
    (index, id) => {
      const newWhatchlists = watchlists;
      const newWhatchlistsVideos = newWhatchlists[index].videos;
      const vidToRemoveIndex = newWhatchlistsVideos.indexOf(id);
      if (index > -1) {
        newWhatchlistsVideos.splice(vidToRemoveIndex, 1);
      }

      setWatchlists(newWhatchlists);
      storage.set(WL_STORAGE_KEY, newWhatchlists);
    },
    [watchlists]
  );

  const renameList = useCallback(
    (index, newName) => {
      const newWhatchlists = watchlists;
      newWhatchlists[index].name = newName;

      setWatchlists(newWhatchlists);
      storage.set(WL_STORAGE_KEY, newWhatchlists);
    },
    [watchlists]
  );

  return (
    <WatchlistContext.Provider value={{ addVideo, removeVideo, renameList, watchlists }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export { useWatchlist };
export default WatchlistProvider;
