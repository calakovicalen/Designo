import classes from "./Advantages.module.css";

import Friendly from "../svgs/Friendly";
import Passionate from "../svgs/Passionate";
import Resourceful from "../svgs/Resourceful";

const DATA = [
  {
    id: "1",
    header: "Passionate",
    text: `Each project starts with an in-depth brand research to ensure we only
        create products that serve a purpose. We merge art, design, and
        technology into exciting new solutions.`,
  },
  {
    id: "2",
    header: "Resourceful",
    text: `Everything that we do has a strategic purpose. We use an agile
    approach in all of our projects and value customer collaboration. It
    guarantees superior results that fulfill our clients’ needs.`,
  },
  {
    id: "3",
    header: "Friendly",
    text: `We are a group of enthusiastic folks who know how to put people first.
    Our success depends on our customers, and we strive to give them the
    best experience a company can provide.`,
  },
];

const compare = (variable, ar1, ar2, ar3) => {
  if (variable === "Passionate") {
    return ar1;
  } else if (variable === "Resourceful") {
    return ar2;
  } else return ar3;
};

const Advantages = () => {
  return (
    <section className={classes.advantages}>
      {DATA.map((item) => {
        return (
          <div key={item.id} className={classes["advantages-card"]}>
            <div className={classes["svg-container"]}>
              <div
                className={`${classes["svg-background"]} ${`${compare(
                  item.header,
                  classes.passionate,
                  classes.resourceful,
                  classes.friendly
                )}`}`}
              ></div>
              {compare(
                item.header,
                <Passionate />,
                <Resourceful />,
                <Friendly />
              )}
            </div>
            <div className={classes["text-container"]}>
              <h3>{item.header}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Advantages;
