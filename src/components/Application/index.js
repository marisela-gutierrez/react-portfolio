import React from "react";

function application({ application }) {
  const { title, link, gitHub, type } = application;
  return (
    <section className="applications" key={title}>
    
      <div>
      <h2>{title}:</h2>
        <a href={link} target="_blank" rel="noreferrer">
          <button type="button">View Project</button>
        </a>
        <br/>
        <a href={gitHub} target="_blank" rel="noreferrer">
          <button type="button">GitHub</button>
        </a> 
      </div>
      

      <a
        href={link}
        className={`application ${type}`}
        target="_blank"
        rel="noreferrer"
      ></a>
    </section>
  );
}
export default application;