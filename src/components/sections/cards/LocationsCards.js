import { useSelector } from "react-redux";
import useCompare from "../../../hooks/use-compare";
import classes from "./LocationsCards.module.css";

import canada from "../../../assets/locations/desktop/image-map-canada.png";
import australia from "../../../assets/locations/desktop/image-map-australia.png";
import uk from "../../../assets/locations/desktop/image-map-united-kingdom.png";
import canadaTablet from "../../../assets/locations/tablet/image-map-canada.png";
import australiaTablet from "../../../assets/locations/tablet/image-map-australia.png";
import ukTablet from "../../../assets/locations/tablet/image-map-uk.png";

const LocationsCards = () => {
  let width = useSelector((state) => state.width.width);
  const compareCanada = useCompare(width, canada, canadaTablet, canada);
  const compareAustralia = useCompare(
    width,
    australia,
    australiaTablet,
    australia
  );
  const compareUK = useCompare(width, uk, ukTablet, uk);

  const DATA = [
    {
      image: compareCanada,
      title: "Canada",
      address: {
        header: "Designo Central Office",
        text1: "3886 Wellington Street",
        text2: "Toronto, Ontario M9C 3J5",
      },
      contact: {
        header: "Contact",
        text1: "P : +1 253-863-8967",
        text2: "M : contact@designo.co",
      },
    },
    {
      image: compareAustralia,
      title: "Australia",
      address: {
        header: "Designo AU Office",
        text1: "19 Balonne Street",
        text2: "New South Wales 2443",
      },
      contact: {
        header: "Contact",
        text1: "P : (02) 6720 9092",
        text2: "M : contact@designo.au",
      },
    },
    {
      image: compareUK,
      title: "United Kingdom",
      address: {
        header: "Designo UK Office",
        text1: "13  Colorado Way",
        text2: "Rhyd-y-fro SA8 9GA",
      },
      contact: {
        header: "Contact",
        text1: "P : 078 3115 1400",
        text2: "M : contact@designo.uk",
      },
    },
  ];

  return (
    <div className={classes.container}>
      {DATA.map((item, index) => {
        return (
          <div key={index} className={classes.card}>
            <img src={item.image} alt={item.title} />
            <div className={classes["card-text"]}>
              <h3>{item.title}</h3>
              <div className={classes["text-container"]}>
                <h5>{item.address.header}</h5>
                <span>{item.address.text1}</span>
                <span>{item.address.text2}</span>
              </div>
              <div className={classes["text-container"]}>
                <h5>{item.contact.header}</h5>
                <span>{item.contact.text1}</span>
                <span>{item.contact.text2}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LocationsCards;
