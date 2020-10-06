import { useState, useEffect } from 'react';
import axios from 'axios';

// const YOUTUBE_API_KEY_V1 = 'AIzaSyAUu9MIWbw2vZy5_p-mBsTF-mPOH1VPHSU';
const YOUTUBE_API_KEY_V2 = 'AIzaSyDi9ZuwzXhuRAChIGImPHmj_ac79EDBnEA';

const timeout = 300;

export const usePopularVids = () => {
  const [popularVids, setPopularVids] = useState([]);
  const API_URL = `https://www.googleapis.com/youtube/v3/videos`;

  useEffect(() => {
    const findPopularVids = async () => {
      try {
        await setTimeout(async () => {
          const response = await axios.get(API_URL, {
            params: {
              part: 'snippet',
              chart: 'mostPopular',
              regionCode: 'mx',
              videoCategoryId: '10',
              key: YOUTUBE_API_KEY_V2,
            },
          });
          const responseJson = await response;
          const videos = responseJson.data.items;

          setPopularVids(videos);
        }, timeout);
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
      await setTimeout(async () => {
        try {
          const response = await axios.get(API_URL, {
            params: {
              part: 'snippet',
              relatedToVideoId: videoId,
              type: 'video',
              key: YOUTUBE_API_KEY_V2,
            },
          });
          const responseJson = await response;
          const videos = responseJson.data.items;

          setRelatedVids(videos);
        } catch (error) {
          console.error('YT Error: ', error);
        }
      }, timeout);
    };

    findRelatedVids();
  }, [videoId, API_URL]);

  return { relatedVids };
};

export const useYoutubeSearch = (searchTerm) => {
  const [foudVids, setFoundVids] = useState([]);
  const API_URL = `https://www.googleapis.com/youtube/v3/search`;

  useEffect(() => {
    const findRelatedVids = async () => {
      await setTimeout(async () => {
        try {
          const response = await axios.get(API_URL, {
            params: {
              part: 'snippet',
              maxResults: 15,
              q: searchTerm,
              type: 'video',
              key: YOUTUBE_API_KEY_V2,
            },
          });
          const responseJson = await response;
          const videos = responseJson.data.items;

          setFoundVids(videos);
        } catch (error) {
          console.error('YT Error: ', error);
        }
      }, timeout);
    };

    findRelatedVids();
  }, [searchTerm, API_URL]);

  return { foudVids, setFoundVids };
};
