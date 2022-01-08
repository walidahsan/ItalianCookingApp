import "../../Css/Product.css";
import { Link } from "react-router-dom";

function Productleft({ image, Heading, para }) {
  return (
    <div className="l_product">
      <img src={image} height={400} />
      <div className="left_product">
        <h2>{Heading}</h2>
        <p>{para}...</p>
        <Link className="more_pro_btn" to="">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Productleft;
