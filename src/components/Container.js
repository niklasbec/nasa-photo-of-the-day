import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import PhotoOfTheDay from "./PhotoOfTheDay";
import Explanation from "./Explanation";
import Date from './TitleDate'
import Title from './Title'



function Container () {

    const [explanation, setExplanation] = useState([])
    const [image, setImage] = useState([])
    const [date, setDate] = useState([])
    const [title, setTitle] = useState([])

    useEffect(() => {

        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=UD9nf5xabto28IXBRZqs1msmfvfYLvAj84ENRiQa')
             .then(response => {
                setImage(response.data.hdurl)
                setExplanation(response.data.explanation)
                setDate(response.data.date)
                setTitle(response.data.title)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
            <>
            <Date date={date}/>
            <Title title={title}/>
            <PhotoOfTheDay imageOTD={image}/>
            <Explanation explanation={explanation}/>
            </>
    )
}

export default Container