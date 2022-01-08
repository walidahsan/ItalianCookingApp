import ReviewItems from "./ReviewItems";
import "../../Css/Reviews.css";
import { useState } from "react";

function Reviews() {
  const [Reviews, setReviews] = useState([
    {
      heading: "Lorem ipsum",
      desc: "When you talk about the Italian food you should remember the Italian pizza restaurant in Al Ain city. The original taste is here in this place come and judge.",
    },
    {
      heading: "Lorem ipsum",
      desc: "great pizza and pasta.. you can also taste rezato .. every week I take my pizza in this restaurant",
    },
    {
      heading: "Lorem ipsum",
      desc: "When we stopped for a pizza in Al Ain we hoped for a cant-go-very-wrong kind of pizza, but instead got a proper Italian style pizza with home made dough and tasty toppings combination.The restaurant is air conditioned and offers a free wi-fi connection. The waiter and the cook were both very friendly and made us feel welcome.If we return to Al Ain in the future, we'll surely visit again.",
    },
  ]);

  const AllReviews = Reviews.map((getReviews) => {
    return (
      <ReviewItems
        heading={getReviews.heading}
        para={getReviews.desc.substring(0, 150)}
      />
    );
  });

  return <div className="Reviews_header">{AllReviews}</div>;
}

export default Reviews;
