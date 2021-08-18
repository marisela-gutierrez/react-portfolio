import React, { useState } from "react";
import Application from "../Application";

const Portfolio = () => {
  const [applications] = useState([
    {
      title: "Run Buddy",
      link: "https://marisela-gutierrez.github.io/run-buddy/",
      gitHub: "https://github.com/marisela-gutierrez/run-buddy",
      type: "run-buddy",
    },
    {
      title: "Horiseon",
      link: "https://marisela-gutierrez.github.io/Horiseon/",
      gitHub: "https://github.com/marisela-gutierrez/Horiseon",
      type: "horiseon",
    },
    {
      title: "Movie Fusion",
      link: "https://marisela-gutierrez.github.io/Movie-Fusion/",
      gitHub: "https://github.com/marisela-gutierrez/Movie-Fusion",
      type: "movie-fusion",
    },
    {
      title: "Petcation Station",
      link: "https://petcation-station.herokuapp.com/",
      gitHub: "https://github.com/marisela-gutierrez/petcation-station",
      type: "petcation",
    },
    {
      title: "Budget Tracker",
      link: "https://mg-budget-tracker.herokuapp.com/",
      gitHub: "https://github.com/marisela-gutierrez/budget-tracker",
      type: "budget-tracker",
    },
    {
      title: "Note Taker",
      link: "https://notetaker-mg.herokuapp.com/",
      gitHub: "https://github.com/marisela-gutierrez/note-taker",
      type: "note-taker",
    },
  ]);

  return (
    <section id="applications">
      <h2> Projects:</h2>
      {applications.map((application) => (
        <Application key={application.title} application={application} />
      ))}
    </section>
  );
};

export default Portfolio;