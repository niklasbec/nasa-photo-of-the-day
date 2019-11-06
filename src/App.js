import React from "react";
import "./App.css";
import PhotoOfTheDay from './components/PhotoOfTheDay'
import Date from './components/TitleDate'
import Explanation from './components/Explanation'

function App() {
  return (
    <div className="App">
      <h1>
        Nasa Photo of the Day 🚀!
      </h1>
      <Date />
      <PhotoOfTheDay />
      <Explanation />
    </div>
  );
}

export default App;
