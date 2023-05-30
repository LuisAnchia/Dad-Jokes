import { callJoker } from './random.js';
import { search } from './search.js';
import { showJoke } from './callRandom.js';
showJoke();

const jokeText = localStorage.getItem('jokeAbout');
if (jokeText) {
showJokeOverlay(jokeText);
localStorage.removeItem('jokeAbout');
}