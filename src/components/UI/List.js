import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { navigationActions } from "../../store/navigation-slice";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
};

const List = (props) => {
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(navigationActions.menu());
  };

  let width = useSelector((state) => state.width.width);

  return (
    <ul className={props.className}>
      <Link
        to="/about"
        style={linkStyle}
        onClick={width >= 768 ? "" : toggleHandler}
      >
        <li>OUR COMPANY</li>
      </Link>
      <Link
        to="/locations"
        style={linkStyle}
        onClick={width >= 768 ? "" : toggleHandler}
      >
        <li>LOCATIONS</li>
      </Link>
      <Link
        to="/contact"
        style={linkStyle}
        onClick={width >= 768 ? "" : toggleHandler}
      >
        <li>CONTACT</li>
      </Link>
    </ul>
  );
};

export default List;
