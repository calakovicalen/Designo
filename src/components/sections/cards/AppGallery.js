import GalleryCard from "./GalleryCard";
import Wrapper from "../../UI/Wrapper";

import airfilter from "../../../assets/app-design/desktop/image-airfilter.jpg";
import eyecam from "../../../assets/app-design/desktop/image-eyecam.jpg";
import faceit from "../../../assets/app-design/desktop/image-faceit.jpg";
import loopstudios from "../../../assets/app-design/desktop/image-loopstudios.jpg";
import todo from "../../../assets/app-design/desktop/image-todo.jpg";

const DATA = [
  {
    image: airfilter,
    header: "Airfilter",
    text: "Solving the problem of poor indoor air quality by filtering the air",
  },
  {
    image: eyecam,
    header: "Eyecam",
    text: "Product that lets you edit your favorite photos and videos at any time",
  },
  {
    image: faceit,
    header: "Faceit",
    text: "Get to meet your favorite internet superstar with the faceit app",
  },
  {
    image: todo,
    header: "Todo",
    text: "A todo app that features cloud sync with light and dark mode",
  },
  {
    image: loopstudios,
    header: "Loopstudios",
    text: "A VR experience app made for Loopstudios",
  },
];

const AppGallery = () => {
  return (
    <Wrapper>
      {DATA.map((item, index) => {
        return (
          <GalleryCard key={index}>
            <img src={item.image} alt={`Pic of ${item.header} website`} />
            <span>
              <h3>{item.header}</h3>
              <p>{item.text}</p>
            </span>
          </GalleryCard>
        );
      })}
    </Wrapper>
  );
};

export default AppGallery;
