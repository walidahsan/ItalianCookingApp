import Productleft from "./Productleft";
import Productright from "./Productright";
import recipe1 from "../../img/recipe1.png";
import recipe2 from "../../img/recipe2.png";
import "../../Css/Product.css";

function Product() {
  const lorem =
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum....".substring(
      0,
      250
    );

  return (
    <div className="">
      <div className="">
        <Productleft
          image={recipe1}
          Heading="Discount Upto 50% All Excursions!"
          para={lorem}
        />
      </div>
      <div>
        <Productright
          image={recipe2}
          Heading="January's Promo: Buy 1 Get 1 free!"
          para={lorem}
        />
      </div>
    </div>
  );
}

export default Product;
