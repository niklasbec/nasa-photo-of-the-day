import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

const ExplanationText = styled.p`
    width: 35%;
    position: relative;
    left: 32%;
    font-size: 20px;

    span {
        color: black;
        font-size: 30px;
        font-weight: 500;
    }
`

function Explanation(props) {
    const [explanation, setExplanation] = useState([])

    return (
        <ExplanationText ><span>Explanation:</span><br />
        <br />
        {props.explanation}</ExplanationText>
    )
}

export default Explanation