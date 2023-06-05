// api.js
const apiUrl = 'https://icanhazdadjoke.com/';
const headers = { Accept: 'application/json', };

export async function fetchJoke() {
  try {
    const response = await fetch(apiUrl, { headers: headers });
    const data = await response.json();
    return data.joke;
  } catch (error) {
    console.error("There was an error fetching the random joke:", error);
  }
}