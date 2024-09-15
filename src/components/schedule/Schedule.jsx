import "./schedule.css";

const Schedule = () => {
  return (
    <div className="schedule" id="schedule">
      <div className="scheduleTitle">Schedule</div>
      <div className="scheduleContainer">
        <div className="scheduleContent">
          <div className="scheduleContentDate">
            <h1 className="scheduleContentDateCont">29</h1>
            <h1 className="scheduleContentDateCont">JAN</h1>
          </div>
          <div className="scheduleContentDetails">
            <h3 className="scheduleContentDetailsTitle">Registration opens</h3>
            <p className="scheduleContentDetailsText">
              On this day, the registration portal will open for team leaders to
              enroll themselves and their respective teams. Teams should ensure
              timely registration to secure their spot in the hackathon.
            </p>
          </div>
        </div>
        <div className="scheduleContent">
          <div className="scheduleContentDate">
            <h1 className="scheduleContentDateCont">8</h1>
            <h1 className="scheduleContentDateCont">FEB</h1>
          </div>
          <div className="scheduleContentDetails">
            <h3 className="scheduleContentDetailsTitle">
              Last date to register
            </h3>
            <p className="scheduleContentDetailsText">
              This marks the deadline for all teams and individual participants
              to complete their registration process. Late registrations will
              not be considered, so make sure to register before this date.
            </p>
          </div>
        </div>
{/*         <div className="scheduleContent">
          <div className="scheduleContentDate">
            <h1 className="scheduleContentDateCont">6</h1>
            <h1 className="scheduleContentDateCont">FEB</h1>
          </div>
          <div className="scheduleContentDetails">
            <h3 className="scheduleContentDetailsTitle">
              Shortlisting Announcement
            </h3>
            <p className="scheduleContentDetailsText">
              Candidates who successfully registered will be informed about the
              shortlisting of teams and individuals. This announcement sets the
              stage for the next steps in the hackathon journey.
            </p>
          </div>
        </div>
        <div className="scheduleContent">
          <div className="scheduleContentDate">
            <h1 className="scheduleContentDateCont">7</h1>
            <h1 className="scheduleContentDateCont">FEB</h1>
          </div>
          <div className="scheduleContentDetails">
            <h3 className="scheduleContentDetailsTitle">
              Hospitality Charges Payment Deadline
            </h3>
            <p className="scheduleContentDetailsDesc">
              Shortlisted teams are required to pay a hospitality fee of INR 200
              per team. Payment must be completed before January 8, 2024, to
              proceed to the next phase.
            </p>
          </div>
        </div>
        <div className="scheduleContent">
          <div className="scheduleContentDate">
            <h1 className="scheduleContentDateCont">8</h1>
            <h1 className="scheduleContentDateCont">FEB</h1>
          </div>
          <div className="scheduleContentDetails">
            <h3 className="scheduleContentDetailsTitle">
              Confirmation of Shortlisting
            </h3>
            <p className="scheduleContentDetailsDesc">
              Following the verification of payments, all shortlisted teams will
              receive a confirmation email. This confirmation is crucial for
              teams to officially participate in the hackathon.
            </p>
          </div>
        </div> */}
        <div className="scheduleContent">
          <div className="scheduleContentDate">
            <h1 className="scheduleContentDateCont">10</h1>
            <h1 className="scheduleContentDateCont">FEB</h1>
          </div>
          <div className="scheduleContentDetails">
            <h3 className="scheduleContentDetailsTitle">Hackathon Kickoff</h3>
            <p className="scheduleContentDetailsDesc">
              The official commencement of the hackathon! Participants can start
              working on their projects. Resources, guidelines, and support will
              be provided to ensure a smooth start to the coding journey.
            </p>
          </div>
        </div>
        <div className="scheduleContent">
          <div className="scheduleContentDate">
            <h1 className="scheduleContentDateCont">11</h1>
            <h1 className="scheduleContentDateCont">FEB</h1>
          </div>
          <div className="scheduleContentDetails">
            <h3 className="scheduleContentDetailsTitle">Hackathon Ends</h3>
            <p className="scheduleContentDetailsDesc">
              Participants need to wrap up their projects as the hackathon
              concludes. Submission guidelines will be provided, and teams must
              adhere to the deadlines for project submission.
            </p>
          </div>
        </div>
        <div className="scheduleContent">
          <div className="scheduleContentDate">
            <h1 className="scheduleContentDateCont">18</h1>
            <h1 className="scheduleContentDateCont">FEB</h1>
          </div>
          <div className="scheduleContentDetails">
            <h3 className="scheduleContentDetailsTitle">
              Winners Announcement and Prize Distribution
            </h3>
            <p className="scheduleContentDetailsDesc">
              The moment of truth! Winners will be announced, and prizes will be
              distributed. It's important to note that this date is subject to
              change based on project complexity. Stay tuned for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
