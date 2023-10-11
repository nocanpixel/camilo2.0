import {useState} from "react";
import { useStore } from "./useStore";
export const useLike = () => {
    const [data, setData] = useState(null);
    const {fetchData} = useStore();

    const fetchPostLike = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/like', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({like:true})
            });
            fetchData();
            if(!response.ok){throw new Error('Network response was not ok');}
            const data = await response.json();
            setData(data)
        } catch(error) {
            console.error("Erro fetching data:", error);
        }
    }

    return {data, fetchPostLike}
}