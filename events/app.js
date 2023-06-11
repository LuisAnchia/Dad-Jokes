import { displayJoke } from '../codeJs/api/domRandom.js';
import { addEventListeners } from '../codeJs/cart/carts.js';
import { showJoke } from '../codeJs/callRandom.js';
import { search } from '../codeJs/search.js';


const buttonForJoker = document.getElementById("buttonForJoker");
buttonForJoker.addEventListener("click", displayJoke);
addEventListeners();
showJoke();
const jokeText = localStorage.getItem('jokeAbout');
if (jokeText) {
showJokeOverlay(jokeText);s
localStorage.removeItem('jokeAbout');
}