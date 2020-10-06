import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from './index';
import { usePopularVids } from '../../utils/hooks/useYoutube';
import CurrentVideoContext from '../../providers/CurrentVideo';

jest.mock('../../utils/hooks/useYoutube');

beforeEach(() => {
  usePopularVids.mockReturnValue({
    popularVids: [
      {
        id: {
          etag: 'jytiqwueyrtj',
          videoId: '3mnSDifDSxQ',
        },
        snippet: {
          thumbnails: {
            high: {
              url: 'https://picsum.photos/id/230/300/300',
            },
          },
          title: 'wizeline',
          description: 'This is a video1',
        },
      },
    ],
  });
});

describe('Home', () => {
  configure({ adapter: new Adapter() });

  it('should display 1 popular videos', () => {
    const wrapper = mount(
      <CurrentVideoContext>
        <HomePage />
      </CurrentVideoContext>
    );

    console.log(wrapper);

    expect(wrapper.find('div').contains('wizeline')).toEqual(true);
  });
});
