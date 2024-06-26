import {useEffect, useState} from "react";
import axios from "axios";
import CatCard from "./CatCard.jsx";
import {Row} from "react-bootstrap";

const CatList = () => {
    const [cats, setCats] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_HOST}/api/cats`)
            .then(res => setCats(res.data))
            .catch(error => console.log(error))
    }, [])

return (
    <div>
        <Row>
            {cats.map(cat => (
                <CatCard key={cat.id} cat={cat} />
            ))}
        </Row>
    </div>
)};
export default CatList;