import { useEffect, useState } from "react";
import axios from 'axios';
export default function Homepage() {
    const [data, setData] = useState<any>({ hits: [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'api/fetch',
            );
            console.log(result.data)
            setData(result.data);
        };

        fetchData();
    }, []);
    return (
        <ul>
            {data.map((item: any) => (
                <li key={item.objectID}>
                    <h1>{item.title}</h1>
                </li>
            ))}
        </ul>
    );
}

