import "../../Css/Reviews.css";

function ReviewItems({ heading, para }) {
  return (
    <div className="Review_items">
      <h2>{heading}</h2>
      <p>{para}...</p>
    </div>
  );
}

export default ReviewItems;
