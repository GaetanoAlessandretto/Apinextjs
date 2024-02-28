import { useEffect } from "react";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getData(request: NextApiRequest, response: NextApiResponse<any>) {
    try {
        const apiResponse = await fetch("api/fetch");
        const data = await apiResponse.json();
        response.status(200).json(data);
    } catch (error) {
        console.error("Errore durante il recupero dei dati:", error);
    }
}

