// FAQSection.js
import React, { useState, useEffect } from "react";
import "./faques.css"; // Import your CSS file

const FAQSection = () => {
  const faqData = [
    {
      question: "What if I don't know how to code?",
      answer:
        "No worries, interest in learning and working with technology is much more important than your current experience level.",
    },
    {
      question: "How much will it cost?",
      answer:
        "Registration for DEVCLASH is completely free, but we are charging only 200Rs for hospitality and meals.",
    },
    {
      question: "How many members are allowed in a team?",
      answer: "Minimum 1 and maximum of 4 members per team are allowed.",
    },
    {
      question: "How long does the review process take?",
      answer:
        "The review process can take several days to weeks, depending on the complexity of the project and the number of applications received. We will do our best to keep you informed throughout the process and provide feedback on your application.",
    },
    {
      question: "What resources will be available during the hackathon?",
      answer:
        "College Computer Labs: Our college computer labs are equipped with the latest hardware and software necessary for project building. Teams are welcome to utilize these facilities for coding and development. Personal Hardware: Teams have the flexibility to use their personal hardware devices (laptops, computers, etc.) during the hackathon. Our local area network (LAN) will be configured to allow seamless connectivity to the college Wi-Fi. Damage Recovery Policy: In the rare event of damage to college-provided hardware, we have implemented a damage recovery policy. If any hardware is accidentally damaged during the hackathon, the entire team will be responsible for covering the costs of the damage. This policy encourages teams to handle equipment with care and fosters a sense of responsibility among participants.",
    },
    {
      question: "How can I contact the organizers if I have further questions?",
      answer:
        "Have queries? Connect with us! Reach out to our team members, drop an email at devkraftclub@gmail.com, or slide into our DMs on LinkedIn (Devkraft). Check our website's Contact section for more ways to reach us. We're here to assist you!",
    },
    {
      question:
        "Is there a code of conduct that participants need to adhere to?",
      answer:
        "Yes, participants are expected to adhere to our Code of Conduct throughout the event. Please familiarize yourself with the guidelines outlined https://devfolio.co/code-of-conduct. We believe in fostering a respectful and inclusive environment for everyone involved.",
    },
    // Add more dummy questions and answers as needed
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const closeOpenQuestion = () => {
      if (openIndex !== null) {
        setOpenIndex(null);
      }
    };

    document.body.addEventListener("click", closeOpenQuestion);

    return () => {
      document.body.removeEventListener("click", closeOpenQuestion);
    };
  }, [openIndex]);

  const stopPropagation = (e) => {
    // Stop propagation to prevent the click event from closing the open question
    e.stopPropagation();
  };

  return (
    <div className="faq-section" id="faq">
      <div className="domain-heading">FAQ's</div>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={(e) => stopPropagation(e)}
          >
            <div
              className="question"
              onClick={() => handleQuestionClick(index)}
            >
              {faq.question}
            </div>
            {openIndex === index && <div className="answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
