import { Fragment } from "react";
import { useSelector } from "react-redux";
import useCompare from "../../../hooks/use-compare";

import LocationsGallery from "./LocationsGallery";

import classes from "./AboutCards.module.css";

import worldclass from "../../../assets/about/mobile/image-world-class-talent.jpg";
import realdeal from "../../../assets/about/mobile/image-real-deal.jpg";
import worldclassTablet from "../../../assets/about/tablet/image-world-class-talent.jpg";
import realdealTablet from "../../../assets/about/tablet/image-real-deal.jpg";
import worldclassDesktop from "../../../assets/about/desktop/image-world-class-talent.jpg";
import realdealDesktop from "../../../assets/about/desktop/image-real-deal.jpg";

const DATA = [
  {
    header: "World-class talent",
    text1: `We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.`,
    text2: `Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.`,
  },
  {
    header: "The real deal",
    text1: `As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
    Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.`,
    text2: `We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.`,
  },
];

const AboutCards = () => {
  let width = useSelector((state) => state.width.width);

  const compareWorldclass = useCompare(
    width,
    worldclass,
    worldclassTablet,
    worldclassDesktop
  );

  const compareRealDeal = useCompare(
    width,
    realdeal,
    realdealTablet,
    realdealDesktop
  );

  return (
    <Fragment>
      <div className={classes["about-cards"]}>
        <img src={compareWorldclass} alt="header" />
        <div className={classes.wrapper}>
          <h3>{DATA[0].header}</h3>
          <p>{DATA[0].text1}</p>
          <p>{DATA[0].text2}</p>
        </div>
      </div>
      <LocationsGallery />
      <div className={classes["about-cards"]}>
        <img src={compareRealDeal} alt="header" />
        <div className={classes.wrapper}>
          <h3>{DATA[1].header}</h3>
          <p>{DATA[1].text1}</p>
          <p>{DATA[1].text2}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutCards;
