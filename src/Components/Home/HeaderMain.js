import { Link } from "react-router-dom";
import "../../Css/Header.css";
import Home from "./Home";
import LeftPortion from "./LeftPortion";
import Navbar from "./Navbar";
import RightPortion from "./RightPortion";
function HeaderMain() {
  return (
    <div>
      <div className="Header_img">
        <Navbar />
        <div className="header_main">
          <LeftPortion />
          <RightPortion />
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
