// Global app controller
// You can only search for "pizza", "bacon" and "broccoli";


import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import { elements, renderLoader, clearLoader } from './views/base';


/* Global state of the app -----------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/
// - Search object
// - Current recipe object
// - Shopping list object
// - Like recipes


const state = {};


/* Search Controller------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

const controlSearch = async () => {

    // 1) Get query from view
    const query = searchView.getInput();



    if (query) {
        // 2) New search object and add state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            // 4) Search for recipes 
            await state.search.getResults();

            // 5) render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);

        } catch (err) {
            alert('Something is wrong with the search....');
            console.log(err);
            clearLoader();
        }
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});



elements.serachResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');

    if (btn) {
        // NOTE: goto is the name we gave to the html data set we gave the button element,
        // will give use a string so we use parseInt to give us an int
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
        //console.log(goToPage);
    }
});


/* Recipe Controller -----------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

const controlRecipe = async () => {

    // Get ID from url
    const id = window.location.hash.replace('#', '');
    console.log(id);

    if (id) {
        // Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // Highlight selected search item
        if (state.search) searchView.highlightSelected(id);

        // Create new recipe object
        state.recipe = new Recipe(id);

        try {
            // Get recipe data and parse ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            // Calculate servings
            state.recipe.calcTime();
            state.recipe.calcServings();

            // Render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe);

        } catch (err) {
            alert('Error processing recipe!');
            console.log(err);
        }
    }
}

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));


/* Handling recipe button clicks  ----------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/
elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease , .btn-decrease *')) { // NOTE .btn-decrease * =  any child of btn-decrease
        // Decrease buttion is clicked
        state.recipe.updateServings('dec');
    } else if (e.target.matches('.btn-increase , .btn-increase *')) {
        // Increase button is clicked
        state.recipe.updateServings('inc');
    }

    console.log(state.recipe);
});