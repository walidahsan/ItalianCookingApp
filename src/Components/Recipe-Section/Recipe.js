import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../Css/Recipe.css";
import recipe1 from "../../img/recipe1.png";
import recipe2 from "../../img/recipe2.png";
import recipe3 from "../../img/recipe3.png";
import RecipeItems from "./RecipeItems";

function Recipe() {
  const [Recipes, setRecipes] = useState([
    {
      id: 1,
      image: `${recipe1}`,
      name: "Orecchiette con cime di rapa",
      desc: "Orecchiette con cime di rapa (orecchiette with broccoli rabe) is one of the most popular pasta dishes from the Italian region of Apulia, especially beloved in the region's capital, Bari. Orecchiette have a perfect shape for scooping up the chunky pieces of boiled broccoli rabe, or rapini - a leafy, green vegetable closely related to turnip.",
    },
    {
      id: 2,
      image: `${recipe2}`,
      name: "Pasta e alici",
      desc: "Also known as pasta con la mollica alla Calabrese, or in dialect, pasta ca muddicata, this traditional pasta dish called pasta e alici is made with anchovies and toasted breadcrumbs as one of the most traditional dishes of the region.",
    },
    {
      id: 3,
      image: `${recipe3}`,
      name: "Paglia e fieno",
      desc: "Paglia e fieno is a traditional Italian dish originating from Siena. The name of the dish means straw and hay, referring to the green (spinach) pasta noodles as hay and the yellow (egg) pasta noodles as straw. It's best if the spinach and egg pasta is of the tagliatelle or taglierini (tajarin) varieties, combined with onions, prosciutto, peas, olive oil, and heavy cream.",
    },
  ]);

  const AllRecipes = Recipes.map((recipe) => {
    return (
      <div key={recipe.id}>
        <RecipeItems
          image={recipe.image}
          paraHead={recipe.name}
          paraText={recipe.desc.substring(0, 250)}
        />
      </div>
    );
  });
  console.log(AllRecipes);
  return (
    <div className="RecipeItem">
      <div className="Recipe_header">
        <h2>Our Famous Servings</h2>
        <p>
          Italian food is seasonal. It is simple. It is nutritionally sound. It
          is flavorful. It is colorful. It's all the things that make for a good
          eating experience, and it's good for you.
        </p>
      </div>
      <div className="Recipe_items">{AllRecipes}</div>
      <Link to="" className="Show_more_btn">Show More</Link>
    </div>
  );
}

export default Recipe;
