import Pizzaa from "../../img/pizza.png";
import pizzaSlice from "../../img/pizzaSlice.png";
import leaves1 from "../../img/leaves1.png";
import "../../Css/Pizzaa.css";

function Pizza() {
  return (
    <div className="PizzaHeader">
      <div className="Pizza_leaves">
        {/* <img src={leaves1} height={200} /> */}
        <div className="pizza_intro">
          <div className="pizza_heading">
            <h2>Our Pizza is the best</h2>
            <p>
              Pizza is the one dish that is loved and celebrated by all,
              globally. These lovely pizza quotes will make you crave pizza even
              more.
            </p>
            <hr className="pizza_hr" />
          </div>
        </div>

        <div className="Full_pizza">
          <img className="slice_pizza" src={pizzaSlice} height={200} />
          <img src={Pizzaa} height={400} />
        </div>
      </div>
    </div>
  );
}

export default Pizza;
