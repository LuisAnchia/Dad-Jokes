// dom.js
import { fetchJoke } from './apiJoke.js';

const jokeElement = document.getElementById("joker");

export async function displayJoke() {
  try {
    const joke = await fetchJoke();
    jokeElement.innerHTML = joke;
  } catch (error) {
    console.error("There was an error fetching the random joke:", error);
  }
}

jokeElement.addEventListener("click", () => {
  const jokeText = jokeElement.textContent;
  localStorage.setItem("jokerAbout", jokeText);
  window.location.href = "product.html";
});