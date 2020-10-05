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
  const [watchlist, setWatchlist] = useState([]);
  // [{
  //   id: 'some-id',
  //   title: 'Some Title!',
  //   data: { videodata },
  // }]

  useEffect(() => {
    const lastWatchlistState = storage.get(WL_STORAGE_KEY) || [];

    setWatchlist(lastWatchlistState);
  }, []);

  const addVideo = useCallback(
    (id, title, data ) => {
      const newWatchlists = watchlist;
      newWatchlists.push({ id, title, data });

      setWatchlist(newWatchlists);
      storage.set(WL_STORAGE_KEY, newWatchlists);
    },
    [watchlist]
  );

  const removeVideo = useCallback(
    (index) => {
      const newWatchlist = watchlist;
      if (index > -1) {
        newWatchlist.splice(index, 1);
      }

      setWatchlist(newWatchlist);
      storage.set(WL_STORAGE_KEY, newWatchlist);
    },
    [watchlist]
  );

  return (
    <WatchlistContext.Provider value={{ addVideo, removeVideo, watchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export { useWatchlist };
export default WatchlistProvider;
