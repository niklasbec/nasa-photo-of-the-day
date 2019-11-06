import React, { useState, useEffect } from "react";
import axios from 'axios';


function PhotoOfTheDay() {
    const [image, setImage] = useState([])

    useEffect(() => {

        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=UD9nf5xabto28IXBRZqs1msmfvfYLvAj84ENRiQa')
             .then(response => {
                console.log(response.data);
                setImage(response.data.hdurl)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <img src={image} width='700px' height='700px'></img>
    )
}
 export default PhotoOfTheDay
