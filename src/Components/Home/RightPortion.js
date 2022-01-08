import image1 from "../../img/image1.png";
import image2 from "../../img/image2.png";
import image3 from "../../img/image3.png";
import "../../Css/rightportion.css";
function RightPortion() {
  return (
    <div>
      <div className="right_all">
        <img src={image2} className="img2" alt="image2" height={250} />
        <img src={image1} className="img1" alt="image1" height={500} />
      </div>
      <img className="img3" src={image3} alt="image3" height={500} />
    </div>
  );
}

export default RightPortion;
