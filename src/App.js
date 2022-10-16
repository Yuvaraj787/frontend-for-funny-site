import React from 'react';
import Navbar from "./Navbar";
import Note from "./Note";
function App() {
  return (
    <div className="App">
    <Navbar />
    <div className="main">
      <div className="left"><h1>mokka poda poRingala<br /> <a href="/create">Click here</a></h1></div>
      <div className="right"><a href="/show"><h1 className="rig">Mokka paka poRingala (click here to see Shashiyin marana mokkaigal)</h1></a></div>
    </div>
    <Note />
    </div>
  );
}

export default App;
