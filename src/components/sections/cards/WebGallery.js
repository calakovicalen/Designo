import GalleryCard from "./GalleryCard";
import Wrapper from "../../UI/Wrapper";

import blogr from "../../../assets/web-design/desktop/image-blogr.jpg";
import builder from "../../../assets/web-design/desktop/image-builder.jpg";
import camp from "../../../assets/web-design/desktop/image-camp.jpg";
import express from "../../../assets/web-design/desktop/image-express.jpg";
import photon from "../../../assets/web-design/desktop/image-photon.jpg";
import transfer from "../../../assets/web-design/desktop/image-transfer.jpg";

const DATA = [
  {
    image: express,
    header: "Express",
    text: "A multi-carrier shipping website for ecommerce businesses",
  },
  {
    image: transfer,
    header: "Transfer",
    text: "Site for low-cost money transfers and sending money within seconds",
  },
  {
    image: photon,
    header: "Photon",
    text: "A state-of-the-art music player with high-resolution audio and DSP effects",
  },
  {
    image: builder,
    header: "Builder",
    text: "Connects users with local contractors based on their location",
  },
  {
    image: blogr,
    header: "Blogr",
    text: "Blogr is a platform for creating an online blog or publication",
  },
  {
    image: camp,
    header: "Camp",
    text: "Get expert training in coding, data, design, and digital marketing",
  },
];

const WebGallery = () => {
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

export default WebGallery;
