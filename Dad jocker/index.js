import { Jokerin } from './random.js';
// import { randomJoker, Jokerin } from './jokes.js';
// const { form } = require("./search.js")

import { search } from './search.js';

// form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const searchTerm = input.value; 
//     const url = `https://icanhazdadjoke.com/search?term=${searchTerm}`;
//     try {
//       const response = await fetch(url, { headers: { Accept: 'application/json' } });
//       const data = await response.json();
//       if (data.total_jokes > 0) {
//         results.innerHTML = '';
//         data.results.forEach((joke) => {
//           const jokeDiv = document.createElement('div');
//           jokeDiv.classList.add('joke');
//           const img = document.createElement('img');
//          //img.src = `https://icanhazdadjoke.com/j/R7UfaahVfFd.png${joke.id}.png`;
//          const text = document.createElement('p');
//           text.textContent = joke.joke;
//           jokeDiv.appendChild(img);
//           jokeDiv.appendChild(text);
//           results.appendChild(jokeDiv);
//         });
//       } else {
//         results.innerHTML = '<p>No results were found with the indicated text.</p>';
//       }
//     } catch (error) {
//       results.innerHTML = '<p>There was a problem looking for jokes. Try again.</p>';
//     }
//   });