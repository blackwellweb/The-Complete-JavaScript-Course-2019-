// Global app controller
// You can only search for "pizza", "bacon" and "broccoli";


import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
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
    //console.log(query);

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


/* Recipe Controller------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

const controlRecipe = async () => {

    // Get ID from url
    const id = window.location.hash.replace('#', '');
    console.log(id);

    if (id) {
        // Prepare UI for changes

        // Create new recipe object
        state.recipe = new Recipe(id);

        try {
            // Get recipe data
            state.recipe.getRecipe();

            // Calculate servings
            await state.recipe.getRecipe();

            // Render recipe
            state.recipe.calcTime();
            state.recipe.calcServings();

            // Render recipe
            console.log(state.recipe);

        } catch (err) {
            alert('Error processing recipe!');
        }
    }
}

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

