import React from 'react';
import VideoCardList from '../VideoCardList';
import { useYoutubeSearch } from '../../utils/hooks/useYoutube';

const SearchList = (searchTerm) => {
  const { foudVids } = useYoutubeSearch(searchTerm);

  return <VideoCardList videos={foudVids} />;
};

export default SearchList;
