import React from "react";
import Timer from "../../components/timer/Timer";
import Video from "../../components/background/Video";
import Domain from "../../components/domain/Domain";
import Sponsors from "../../components/sponsors/Sponsors";
import Faques from "../../components/faq/Faques";
import Aboutevent from "../../components/aboutevent/Aboutevent";
import Schedule from "../../components/schedule/Schedule";
import Prizes from "../../components/prizes/Prizes";
import Eventteam from "../../components/eventteam/Eventteam";
import Contact from "../../components/contact/Contact";
// import Problems from "../../components/problemstatements/problemstat";

const Home = () => {
  return (
    <>
      <Video />
      <Timer />
      {/* <Problems /> */}
      <Aboutevent />
      <Domain />
      <Schedule />
      <Prizes />
      <Sponsors />
      <Eventteam />
      <Faques />
      <Contact />
    </>
  );
};

export default Home;
