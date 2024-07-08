import { useEffect, useState } from 'react';

const REWARDS_FROM_API = [
  {
    id: 1,
    title: 'Café gratis',
    points: 1000,
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small_2x/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg',
  },
  {
    id: 2,
    title: 'Café gratis',
    points: 1000,
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small_2x/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg',
  },
  {
    id: 3,
    title: 'Café gratis',
    points: 1000,
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small_2x/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg',
  },
  {
    id: 4,
    title: 'Café gratis',
    points: 1000,
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small_2x/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg',
  },
  {
    id: 5,
    title: 'Café gratis',
    points: 1000,
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small_2x/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg',
  },
  {
    id: 6,
    title: 'Café gratis',
    points: 1000,
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small_2x/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg',
  },
  {
    id: 7,
    title: 'Café gratis',
    points: 1000,
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small_2x/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg',
  },
  {
    id: 8,
    title: 'Café gratis',
    points: 1000,
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small_2x/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg',
  },
  {
    id: 9,
    title: 'Café gratis',
    points: 1000,
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small_2x/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg',
  },
  {
    id: 10,
    title: 'Café gratis',
    points: 1000,
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small_2x/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg',
  },
];

export const useRewards = () => {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    setRewards(REWARDS_FROM_API);
  }, []);

  return { rewards };
};
