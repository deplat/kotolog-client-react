import {useEffect, useState} from "react";
import axios from "axios";

const CatList = () => {
    const [cats, setCats] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/cats')
            .then(res => setCats(res.data))
            .catch(error => console.log(error))
    }, []);

return (
    <div>
        <h1>Users</h1>
        <ul>
            {cats.map(cat => (
                <li key={cat.id}>{cat.name} - {cat.age}</li>
            ))}
        </ul>
    </div>
)};
export default CatList;