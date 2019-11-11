import React from "react";
import "./App.css";
import PhotoOfTheDay from './components/PhotoOfTheDay'
import Date from './components/TitleDate'
import Explanation from './components/Explanation'
import styled from 'styled-components';
import Container from './components/Container'

const Heading = styled.h1`
  color: black;

`



function App() {
  return (
    <div className="App">
      <Heading>
        Nasa Photo of the Day 🚀!
      </Heading>
      <Container />
    </div>
  );
}

export default App;
