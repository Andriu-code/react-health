import React from 'react';
import './RecipeCard.css';
import pancake from "../../../img/prods/pancake.jpg";

const RecipeCard = () => {
    return (
        <div className='card'>
            <div className='image'>
                <img className="img-recipe" src={pancake} alt='pancake' />
            </div>
            <div className="ingredients">
                <h3>Pancake</h3>
                <h5>Ingredients</h5>
                <p> 2 large eggs <br></br>
                    2 cups milk skim, low fat or full fat <br></br>
                    2 ¼ cups white self raising flour</p>
            </div>
            <div className="instructions">
                <h5>INSTRUCTIONS</h5>
                <p> 1. Whisk the eggs and milk together to combine. Add in the flour, and beat until the batter is smooth and lump free. Add in any option add-ins you like here. <br></br>
                    2. Heat a nonstick pan over low-medium heat with cooking oil spray. Wipe over excess; pour about ⅓ cup of batter per pancake. Cook pancakes for 1 to 2 minutes, or until bubbles appear on the surface and the bases are golden brown. Flip and cook until golden; transfer to a warmed plate; repeat with remaining batter (spraying/greasing pan between ever second or third pancake if needed). <br></br>
                    3. Serve immediately with yoghurt, ice cream, whipped cream, maple syrup, berries, or any other toppings you like.
                </p>
            </div>
        </div>
    );
};

export default RecipeCard;