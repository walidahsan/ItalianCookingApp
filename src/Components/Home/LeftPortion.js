import { Link } from "react-router-dom";
import "../../Css/leftportion.css";
import logo from "../../img/loog.png";

function LeftPortion() {
  return (
    <div className="left_all">
      <img src={logo} alt="logo" height={100} />
      <p className="font-face-gm">Italian Food</p>
      <h4>Find Best Italian Food Here</h4>
      <Link to="" className="read_more_btn">
        Read More
      </Link>
      <p className="desc">
        
        If you talk about food just as much as you eat it, you're in good
        company. We've got famous chefs and stars
      </p>
    </div>
  );
}

export default LeftPortion;
