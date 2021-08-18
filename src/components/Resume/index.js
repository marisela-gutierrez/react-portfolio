import React from "react";

function Resume() {
  return (
    <div className="resume">
      <h1>Resume:</h1>
      <p>
        Downdload my resume{" "}
        <span>
          <a
            href={require("../../assets/Files/resume.docx").default}
            download
          >
            here.
          </a>
        </span>
      </p>
      <h2>Proficiencies:</h2>
      <ul>
        <li>*HTML</li>
        <li>*CSS</li>
        <li>*JavaScript</li>
        <li>*JQuery</li>
        <li>*Express</li>
        <li>*Node</li>
        <li>*MySQL</li>
        <li>*React</li>
        <li>*MangoDB, Mongoose</li>
      </ul>  
    </div>
  );
}

export default Resume;