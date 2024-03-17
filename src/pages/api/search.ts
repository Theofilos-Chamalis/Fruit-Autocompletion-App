import type { NextApiRequest, NextApiResponse } from 'next';

const fruits = [
  '🍍 Pineapple',
  '🍉 Watermelon',
  '🍊 Orange',
  '🍓 Strawberry',
  '🍑 Peach',
  '🍏 Green Apple',
  '🍈 Cantaloupe',
  '🍐 Pear',
  '🍋 Lemon',
  '🍌 Banana',
  '🍎 Apple',
  '🍒 Cherry',
  '🍇 Grape',
  '🥭 Mango',
  '🥝 Kiwi',
  '🥥 Coconut',
  '🥑 Avocado',
];

type ResponseData = {
  fruits: typeof fruits;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  // Only allow GET requests that have a query parameter called 'fruit'
  if (req.method !== 'GET' || !('fruit' in req.query)) {
    return res.status(403).end();
  }

  const queryFruit = (req.query.fruit as string)?.toLowerCase();

  // Add a delay to simulate a slow network
  await new Promise(resolve => setTimeout(resolve, 3000));

  // If the query parameter is empty, return all fruits
  if (!queryFruit) {
    return res.status(200).json({ fruits });
  }

  const matchingFruits = fruits.filter(fruit => fruit.toLowerCase().includes(queryFruit));

  return res.status(200).json({ fruits: matchingFruits });
}
