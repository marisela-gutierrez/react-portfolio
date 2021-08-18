import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  const [sections] = useState([
    { name: "About Me" },
    { name: "Portfolio" },
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div>
      <Header
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      ></Header>
      <main>
        {currentSection.name === "About Me" && <About />}
        {currentSection.name === "Portfolio" && <Portfolio />}
      </main>
    </div>
  );
}

export default App;
