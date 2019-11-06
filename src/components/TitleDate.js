import React from "react";
import axios from 'axios';


function Date() {
    const [date, setDate] = useState([])
    const [title, setTitle] = useState([])

    useEffect(() => {

        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=UD9nf5xabto28IXBRZqs1msmfvfYLvAj84ENRiQa')
            .then(response => {
                console.log(response.data);
                setDate(response.data.date)
                setTitle(response.data.title)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <p>{date}</p>
    )
}

export default Date