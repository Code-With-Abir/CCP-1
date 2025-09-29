import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <div className="bg-neutral-100">
        <Home />
        <About />
        <Register/>
      </div>
    </>
  );
};

export default App;
