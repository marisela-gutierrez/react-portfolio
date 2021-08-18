import React from "react";

function Nav(props) {
  const { 
    sections = [], 
    setCurrentSection, 
    currentSection 
  } = props;

  return (
    <nav>
      <ul className="flex-row">
        {sections.map((section) => (
          <li key={section.name}>
            <span
              className={`mx-1 ${
                currentSection.name === section.name && "navActive"
              }`}
              onClick={() => {
                setCurrentSection(section);
              }}
            >
              {section.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;