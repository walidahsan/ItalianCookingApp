import { Link } from "react-router-dom";

function Productright({ image, Heading, para }) {
  return (
    <div className="l_product">
      <div className="left_product">
        <h2>{Heading}</h2>
        <p>{para}...</p>
        <Link className="more_pro_btn" to="">
          Read More
        </Link>
      </div>
      <img src={image} height={400} />
    </div>
  );
}

export default Productright;
