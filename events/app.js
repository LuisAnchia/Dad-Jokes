/**import { callJoker } from '../codeJs/random.js';**/
import { displayJoke } from '../codeJs/api/domRandom.js';
// Llamar a la función displayJoke cuando se hace clic en un botón
const buttonForJoker = document.getElementById("buttonForJoker");
buttonForJoker.addEventListener("click", displayJoke);
import { addEventListeners } from '../codeJs/cart/carts.js';
addEventListeners();
import { showJoke } from '../codeJs/callRandom.js';
showJoke();
const jokeText = localStorage.getItem('jokeAbout');
if (jokeText) {
showJokeOverlay(jokeText);s
localStorage.removeItem('jokeAbout');
}

import { search } from '../codeJs/search.js';