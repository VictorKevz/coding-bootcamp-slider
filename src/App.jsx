import React from "react";
import "./App.css"
import Card from "./components/Card";


function App() {
 
  return (
    <main>
      <div className={`outer-container`}>
        <div className="inner-container">
       <Card/>
        </div>
      </div>
    </main>
  );
}

export default App;