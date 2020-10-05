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

  const addList = useCallback(
    (newListName) => {
      const newWatchlists = watchlists;
      newWatchlists.push({
        name: newListName,
        videos: [],
      });
      setWatchlists(newWatchlists);
      storage.set(WL_STORAGE_KEY, newWatchlists);
    },
    [watchlists]
  );

  const addVideo = useCallback(
    (index, id) => {
      const newWatchlists = watchlists;
      newWatchlists[index].videos.push(id);

      setWatchlists(newWatchlists);
      storage.set(WL_STORAGE_KEY, newWatchlists);
    },
    [watchlists]
  );

  const removeVideo = useCallback(
    (index, id) => {
      const newWatchlists = watchlists;
      const newWatchlistsVideos = newWatchlists[index].videos;
      const vidToRemoveIndex = newWatchlistsVideos.indexOf(id);
      if (index > -1) {
        newWatchlistsVideos.splice(vidToRemoveIndex, 1);
      }

      setWatchlists(newWatchlists);
      storage.set(WL_STORAGE_KEY, newWatchlists);
    },
    [watchlists]
  );

  const renameList = useCallback(
    (index, newName) => {
      const newWatchlists = watchlists;
      newWatchlists[index].name = newName;

      setWatchlists(newWatchlists);
      storage.set(WL_STORAGE_KEY, newWatchlists);
    },
    [watchlists]
  );

  return (
    <WatchlistContext.Provider
      value={{ addList, addVideo, removeVideo, renameList, watchlists }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export { useWatchlist };
export default WatchlistProvider;
