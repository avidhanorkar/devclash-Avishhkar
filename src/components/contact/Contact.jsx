import "./contact.css";

const Contact = () => {
  // const redirectToLink = "https://bit.ly/3vNNbkZ";

  return (
    <div className="contact" id="contact">
      <img
        className="contact-img"
        src="./assets/Eventtrans.png"
        alt="contact"
      />
      <div className="contact-container">
        <h1 className="contact-heading">Contact</h1>
        <div className="contact-info">
          <a
            href={"mailto:devkraftclub@gmail.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src="./assets/email2.png" alt="location" />
          </a>
          <a
            href={"https://maps.app.goo.gl/HUxbgwq2RbhivCJR6"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src="./assets/l2.png" alt="location" />
          </a>
          <a
            href={"tel:+919922026188"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src="./assets/call2.png" alt="location" />
          </a>
        </div>
        <h1 className="contact-heading">Social</h1>
        <div className="contact-info">
          <a
            href={"https://bit.ly/3vNNbkZ"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src="./assets/whtsp3.png" alt="location" />
          </a>
          <a
            href={"mailto:devkraftclub@gmail.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src="./assets/email2.png" alt="location" />
          </a>
          <a
            href={"https://www.linkedin.com/company/dev-kraft/mycompany/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src="./assets/linkedin2.png" alt="location" />
          </a>
        </div>
        <h3 className="copyright">Design and Developed by Devkraft &copy;</h3>
      </div>
    </div>
  );
};

export default Contact;
