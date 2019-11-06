import React, { useState, useEffect } from "react";
import axios from 'axios';


function Explanation() {
    const [explanation, setExplanation] = useState([])

    useEffect(() => {

        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=UD9nf5xabto28IXBRZqs1msmfvfYLvAj84ENRiQa')
            .then(response => {
                console.log(response.data);
                setExplanation(response.data.explanation)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <p className='explanation'><span>Explanation:</span><br />
        <br />
        {explanation}</p>
    )
}

export default Explanation