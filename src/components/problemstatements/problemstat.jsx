// FAQSection.js
import React, { useState, useEffect } from "react";
import "./problemstat.css"; // Import your CSS file

const Problems = () => {
  const faqData = [
    {
      question: "WEB DEVELOPMENT",
      projects: [
        "Real-time Collaboration Platform",
        "Web Development Project 2",
        "Web Development Project 3",
        // Add more project titles as needed
      ],
      descriptions: {
        "Real-time Collaboration Platform":
          "Develop a web application that facilitates real-time collaboration on documents, code, or design projects with multiple users.",
        "Web Development Project 2":
          "Description for Web Development Project 2",
        "Web Development Project 3":
          "Description for Web Development Project 3",
        // Add descriptions for other projects
      },
    },
    {
      question: "WEB3 DEVELOPMENT",
      projects: [
        "It's a broad problem statement. Any product or feature that requires randomness. For example a spin wheel",
        // Add more project titles as needed
      ],
      descriptions: {
        "It's a broad problem statement. Any product or feature that requires randomness. For example a spin wheel":
          "Description for Web3 Development Project 1",
        // Add descriptions for other projects
      },
    },
    {
      question: "AIML DEVELOPMENT",
      projects: [
        "AIML Development Project 1",
        "AIML Development Project 2",
        "AIML Development Project 3",
        // Add more project titles as needed
      ],
      descriptions: {
        "AIML Development Project 1":
          "Description for AIML Development Project 1",
        "AIML Development Project 2":
          "Description for AIML Development Project 2",
        "AIML Development Project 3":
          "Description for AIML Development Project 3",
        // Add descriptions for other projects
      },
    },
    // Add more dummy questions, projects, and descriptions as needed
  ];

  const [openProjectTypeIndex, setOpenProjectTypeIndex] = useState(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const handleProjectTypeClick = (index) => {
    setOpenProjectTypeIndex((prevIndex) =>
      prevIndex === index ? null : index,
    );
    setSelectedProjectIndex(null); // Reset selected project when clicking a new project type
  };

  const handleProjectTitleClick = (projectTypeIndex, projectIndex) => {
    setSelectedProjectIndex(projectIndex);
    setOpenProjectTypeIndex(projectTypeIndex);
  };

  useEffect(() => {
    const closeOpenProjectType = () => {
      if (openProjectTypeIndex !== null) {
        setOpenProjectTypeIndex(null);
        setSelectedProjectIndex(null); // Reset selected project when closing the open project type
      }
    };

    document.body.addEventListener("click", closeOpenProjectType);

    return () => {
      document.body.removeEventListener("click", closeOpenProjectType);
    };
  }, [openProjectTypeIndex]);

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="faq-section">
      {/* <div className="domain-heading">Problem Statements</div> */}
      <div className="faq-list">
        {faqData.map((faq, projectTypeIndex) => (
          <div
            key={projectTypeIndex}
            className={`faq-item ${openProjectTypeIndex === projectTypeIndex ? "open" : ""}`}
            onClick={(e) => stopPropagation(e)}
          >
            <div
              className="question"
              onClick={() => handleProjectTypeClick(projectTypeIndex)}
            >
              {faq.question}
            </div>
            {openProjectTypeIndex === projectTypeIndex && (
              <div className="projects">
                {faq.projects.map((project, projectIndex) => (
                  <div
                    key={projectIndex}
                    className={`project ${
                      selectedProjectIndex === projectIndex ? "selected" : ""
                    }`}
                    onClick={() =>
                      handleProjectTitleClick(projectTypeIndex, projectIndex)
                    }
                  >
                    {project}
                    {selectedProjectIndex === projectIndex && (
                      <div className="description">
                        {faq.descriptions[project]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Problems;
