import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const TitleP = styled.p`
font-size: 22px;

`


function Title(props) {
    
    return (
        <div className='titleDateClass'>
        <TitleP>This image holds the title: <br />
        <span>"{props.title}"</span></TitleP>
        </div>
    )
}

export default Title