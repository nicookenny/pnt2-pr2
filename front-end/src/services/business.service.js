import axios from 'axios';

export const getBusinessInformation = async (businessId) => {
  const { data } = await axios.get(
    `http://localhost:3000/comercio/${businessId}`
  );

  return {
    ...data,
    rewards: data.rewards.map((reward) => ({
      ...reward,
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small_2x/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg',
    })),
  };
};

export const addPointsToClient = async (businessId, email, amount) => {
  await axios.post(`http://localhost:3000/comercio/${businessId}/add-score`, {
    email,
    amount,
  });
};
