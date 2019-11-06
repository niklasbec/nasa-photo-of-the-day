import React from "react";
import "./App.css";
import PhotoOfTheDay from './components/PhotoOfTheDay'


function App() {
  return (
    <div className="App">
      <h1>
        Nasa Photo of the Day 🚀!
      </h1>
      {/* <TitleDate */}
      <PhotoOfTheDay />
      {/* <Explanation */}
    </div>
  );
}

export default App;
