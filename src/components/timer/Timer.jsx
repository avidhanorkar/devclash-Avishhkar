import React, { useState, useEffect } from "react";
import "./timer.css";
import Problems from "../problemstatements/problemstat";
import Submission from "../submission/Submissions";

const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [hackathonStarted, setHackathonStarted] = useState(false);
  const [showProblems, setShowProblems] = useState(false);
  const [showSubmission, setShowSubmission] = useState(false);

  useEffect(() => {
    const registrationDeadline = new Date("2024-02-10T10:00:00");

    const calculateTimeRemaining = () => {
      const currentTime = new Date();
      const timeDifference = registrationDeadline - currentTime;

      if (timeDifference > 0) {
        const remainingDays = Math.floor(
          timeDifference / (1000 * 60 * 60 * 24),
        );
        const remainingHours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const remainingMinutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const remainingSeconds = Math.floor(
          (timeDifference % (1000 * 60)) / 1000,
        );

        setTimeRemaining({
          days: remainingDays,
          hours: remainingHours,
          minutes: remainingMinutes,
          seconds: remainingSeconds,
        });
      } else {
        setHackathonStarted(true);
      }
    };

    const intervalId = setInterval(calculateTimeRemaining, 500);

    return () => clearInterval(intervalId);
  }, []);

  // const handleProblemButtonClick = () => {
  //   setShowProblems(true);
  //   setShowSubmission(false); // Hide Submission component when showing Problems
  //   document.querySelector(".startingSlogan").style.display = "none";
  //   document.querySelector(".o1").style.top = "100px";
  //   document.querySelector(".o2").style.top = "100px";
  //   document.querySelector(".o3").style.top = "100px";
  // };

  // const handleSubmissionButtonClick = () => {
  //   setShowSubmission(true);
  //   setShowProblems(false); // Hide Problems component when showing Submission
  //   document.querySelector(".startingSlogan").style.display = "none";
  // };

  return (
    <div className="wrap-timer" id="home">
      <div className="headingCont">
        <img className="eventlogo o1" src="assets/Eventtrans.png" alt="" />
        <img className="eventlogo o2" src="assets/Eventtrans.png" alt="" />
        <img className="eventlogo o3" src="assets/Eventtrans.png" alt="" />
      </div>
      {/* <h1 className="slogan">PUNE'S BIGGEST TECH CLASH</h1> */}

      {hackathonStarted ? (
        <>
          <span className="startingSlogan">
            Hey fellow hackers! The hackathon is live and buzzing with
            creativity. Check out the awesome projects in action – your next
            coding adventure awaits!{" "}
          </span>
          <div className="buttonCont">
            <a
              target="_blank"
              href="https://shorturl.at/juvLP"
              rel="noreferrer"
            >
              <button className="b1">Problem Statement</button>
            </a>
            {/* <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLScfqv5DpXq_rTAA-M__uAq4S8lUlgAN-_gZRdQk01Pdm-MkAg/viewform?usp=sf_link"
              rel="noreferrer"
            >
              <button className="b1" disabled="true">
                Project Submission
              </button>
            </a> */}
            <button className="b2" disabled="true">
              Project Submission
            </button>
            {/* <button className="b2" onClick={handleSubmissionButtonClick}>
              Project Submission
            </button> */}
          </div>
          {showProblems && <Problems />}
          {showSubmission && <Submission />}
        </>
      ) : (
        <>
          <h1 className="slogan">PUNE'S BIGGEST TECH CLASH</h1>

          <div className="timerContainer">
            <div className="timerCont">
              <h2 className="timerTime">{timeRemaining.days}</h2>
              <h6 className="timerHead">DAYS</h6>
            </div>
            <div className="timerCont">
              <h2 className="timerTime">{timeRemaining.hours}</h2>
              <h6 className="timerHead">HOURS</h6>
            </div>
            <div className="timerCont">
              <h2 className="timerTime">{timeRemaining.minutes}</h2>
              <h6 className="timerHead">MINUTES</h6>
            </div>
            <div className="timerCont">
              <h2 className="timerTime">{timeRemaining.seconds}</h2>
              <h6 className="timerHead">SECONDS</h6>
            </div>
          </div>
          <div className="registerContainer1">
            <a
              className="partii"
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdetrl2h7xCSDs7yo3NeaPh0e1Y2dFvY2o3PwrgIHZ_ILG0wQ/viewform?usp=sf_link"
              rel="noreferrer"
            >
              <button className="registerButton1">Participate Now</button>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Timer;
