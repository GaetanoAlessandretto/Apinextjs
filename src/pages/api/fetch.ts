import { NextApiRequest, NextApiResponse } from "next";

export default async function fetchData(request: NextApiRequest, response: NextApiResponse<any>) {
    try {
        const apiResponse = await fetch("https://mockend.up.railway.app/api/products");
        const data = await apiResponse.json();
        response.status(200).json(data);
    } catch (error) {
        console.error("Errore durante il recupero dei dati:", error);
    }
}
