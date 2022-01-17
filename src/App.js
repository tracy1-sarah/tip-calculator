import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="flex-container">
      <div className="my-content">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
