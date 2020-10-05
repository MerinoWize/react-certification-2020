import { useState, useEffect } from 'react';
import axios from 'axios';

const YOUTUBE_API_KEY = 'AIzaSyAUu9MIWbw2vZy5_p-mBsTF-mPOH1VPHSU';

export const usePopularVids = () => {
  const [popularVids, setPopularVids] = useState([]);
  const API_URL = `https://www.googleapis.com/youtube/v3/videos`;

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
  }, [API_URL]);

  return { popularVids };
};

export const useRelatedVids = (videoId) => {
  const [relatedVids, setRelatedVids] = useState([]);
  const API_URL = `https://www.googleapis.com/youtube/v3/search`;

  useEffect(() => {
    const findRelatedVids = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            part: 'snippet',
            relatedToVideoId: videoId,
            type: 'video',
            key: YOUTUBE_API_KEY,
          },
        });
        const responseJson = await response;
        const videos = responseJson.data.items;

        setRelatedVids(videos);
      } catch (error) {
        console.error('YT Error: ', error);
      }
    };

    findRelatedVids();
  }, [videoId, API_URL]);

  return { relatedVids };
};
