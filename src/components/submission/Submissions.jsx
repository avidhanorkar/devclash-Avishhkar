import React from "react";
import "./submission.css";
// import "./styles.css";

export default function Submissions() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbyAAkwZcO3zvGlNLFmZu4bDOpFjNGsbnBLEs7OhVWk1dnVQd5z4nA5CCj5AGYMSPQfCJw/exec",
      {
        method: "POST",
        body: formDatab,
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="FormCont">
      <h1 className="title">Project Submission Form</h1>
      <h3 className="warn">Enter the accurate team name and id</h3>
      <div>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input placeholder="Your Team Name" name="TeamName" type="text" />
          <input placeholder="Project Link" name="Links" type="text" />
          {/* <input placeholder="Your Message" name="Message" type="text" /> */}
          <input name="Name" type="submit" />
        </form>
      </div>
    </div>
  );
}
