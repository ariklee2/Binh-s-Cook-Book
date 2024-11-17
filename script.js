const API_KEY = "140a7e2a8df34e6398eb2c1c43ce8573";
const recipeListE1 = document.getElementById("recipe-list");

function displayRecipes(recipes) {
    recipeListE1.innerHTML = "";
    recipes.array.forEach(recipe => {
        const recipeItemE1 = document.createElement("li");
        recipeItemE1.classList.add("recipe-item");
        recipeImageE1 = document.createElement("img");
        recipeImageE1.src = recipe.image;
        recipeImageE1.alt = "recipe-image";
        recipeImageE1.appendChild(recipeImageE1);
        recipeListE1.appendChild(recipeItemE1);
    });
}

async function getRecipes() {
    const repsonse = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
    const data = await response.json();
    return data.recipes;
}


async function init() {
    const recipes = await getRecipes();
    display(recipes);
}

init()