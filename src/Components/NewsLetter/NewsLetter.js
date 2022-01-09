import { Link } from "react-router-dom";
import "../../Css/NewsLetter.css";
function NewsLetter() {
  return (
    <div className="leaves_news">
      <div className="News_l">
        <h2>Wana enjoy Free Meals?</h2>
        <p>
          Subscribe t our News Letter to keep up to date with our latest taste's
        </p>
        <div>
          <input placeholder="Subscribe to our News Letter" />
          <Link className="subscribe" to="">Subscribe</Link>
        </div> 
      </div>
    </div>
  );
}

export default NewsLetter;
