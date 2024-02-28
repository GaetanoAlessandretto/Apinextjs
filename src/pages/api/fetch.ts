import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const response = await fetch('https://mockend.up.railway.app/api/products');
    const products = await response.json();

    res.status(200).json(products);
}