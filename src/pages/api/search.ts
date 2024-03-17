import type { NextApiRequest, NextApiResponse } from 'next';

const fruits = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Ice Cream Bean',
  'Jackfruit',
  'Kiwi',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Papaya',
  'Quince',
  'Raspberry',
  'Strawberry',
  'Tangerine',
];

type ResponseData = {
  fruits: typeof fruits;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  // Only allow GET requests that have a query parameter called 'fruit'
  if (req.method !== 'GET' || !('fruit' in req.query)) {
    return res.status(403).end();
  }

  const queryFruit = (req.query.fruit as string)?.toLowerCase();

  // If the query parameter is empty, return all fruits
  if (!queryFruit) {
    return res.status(200).json({ fruits });
  }

  const matchingFruits = fruits.filter(fruit => fruit.toLowerCase().includes(queryFruit));

  return res.status(200).json({ fruits: matchingFruits });
}
