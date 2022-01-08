import "../../Css/RecipeItems.css";
function RecipeItems({ image, paraHead, paraText }) {
  return (
    <div>
      <img className="recipe_image" src={image} height={300} />
      <h3 className="recipe_text">{paraHead}</h3>
      <p className="recipe_para">{paraText}...</p>
    </div>
  );
}

export default RecipeItems;
