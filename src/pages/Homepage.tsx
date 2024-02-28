import { useEffect, useState } from "react";
import axios from 'axios';

export default function Homepage() {
    const [products, setData] = useState<any>([]);

    const fetchProducts = async () => {
        try {
            const res = await fetch('api/fetch');
            const data: any = await res.json();
            setData(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <ul>
            {Array.isArray(products) ? (
                products.map((item: any) => (
                    <li key={item.objectID}>
                        <h1>{item.title}</h1>
                    </li>
                ))
            ) : (
                <li>
                    <p>Dati non validi o vuoti.</p>
                </li>
            )}
        </ul>
    );
}
