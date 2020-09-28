import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = `https://www.googleapis.com/youtube/v3/videos`;

const YOUTUBE_API_KEY = 'AIzaSyAUu9MIWbw2vZy5_p-mBsTF-mPOH1VPHSU';

export const usePopularVids = () => {
  const [popularVids, setPopularVids] = useState(null);

  useEffect(() => {
    const findPopularVids = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            part: 'snippet',
            chart: 'mostPopular',
            regionCode: 'mx',
            videoCategoryId: '10',
            key: YOUTUBE_API_KEY,
          },
        });
        const responseJson = await response;
        const videos = responseJson.data.items;

        setPopularVids(videos);
      } catch (error) {
        console.error('YT Error: ', error);
      }
    };

    findPopularVids();
  }, []);

  return { popularVids };
};
