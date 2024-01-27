import "./domain.css";

const Domain = () => {
  return (
    <>
      <div className="wrap-domain" id="domain">
        <div>
          <div className="domainHeading">TRACKS</div>
        </div>
        <div className="trackBoxes">
          <div className="trackBox">
            <h5 className="trackHeading">WEB DEV</h5>
            <p className="trackDesc">
              For the Web Development enthusiasts, this hackathon is your canvas
              to paint the digital world with your coding prowess. Dive into
              front-end frameworks, back-end technologies, and create seamless,
              user-friendly interfaces. Build websites and applications that not
              only function flawlessly but also push the boundaries of what's
              possible in the digital space.
            </p>
          </div>
          <div className="trackBox">
            <h5 className="trackHeading">AIML</h5>
            <p className="trackDesc">
              In the AIML domain, sharpen your skills in crafting intelligent
              algorithms and systems that mimic human-like learning. From
              natural language processing to computer vision, the possibilities
              are limitless. Seize this opportunity to explore the cutting-edge
              advancements in AI and leave your mark on the landscape of
              intelligent technologies.
            </p>
          </div>
          <div className="trackBox">
            <h5 className="trackHeading">WEB 3.0</h5>
            <p className="trackDesc">
              Now, brace yourselves for the frontier of technology with Web 3.0.
              The next evolution of the internet is here, promising
              decentralized, user-centric experiences. Explore blockchain, smart
              contracts, and decentralized applications (DApps) to revolutionize
              the way we interact online. This is your chance to be at the
              forefront of the internet's transformation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Domain;
