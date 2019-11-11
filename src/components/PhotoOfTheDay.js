import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

const Images = styled.img`
    border: 3px solid black;
    width: 700px;
    height: 700px;
`

function PhotoOfTheDay(props) {

    return (
        <Images src={props.imageOTD} />
    )
}
 export default PhotoOfTheDay
