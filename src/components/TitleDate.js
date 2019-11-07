import React, { useState, useEffect } from "react";
import styled from 'styled-components';


const DateP = styled.p`
    color: red;
    font-size: 14px;
    margin-top: -20px;
    margin-bottom: 60px;
`

function Date(props) {
    
    return (
        <div className='titleDateClass'>
        <DateP>Date: {props.date}</DateP>
        </div>
    )
}

export default Date