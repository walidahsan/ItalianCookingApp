import Pizza from "../PizzaSection/Pizza";
import Product from "../ProductSection/Product";
import Recipe from "../Recipe-Section/Recipe";
import RecipeJumbotron from "../RecipeJumbotron/RecipeJumbotron";
import HeaderMain from "./HeaderMain";

function Home() {
  return (
    <div>
      <HeaderMain />
      <Recipe />
      <RecipeJumbotron />
      <Product />
      <Pizza />
    </div>
  );
}

export default Home;
