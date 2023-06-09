const form = document.querySelector('form');
const input = document.querySelector('#inputBySearch');
const results = document.querySelector('#results');

export async function search(e) {
  e.preventDefault();
  const searchTerm = input.value;
  const url = `https://icanhazdadjoke.com/search?term=${searchTerm}`;
  try {
    const response = await fetch(url, { headers: { Accept: 'application/json' } });
    const data = await response.json();
    if (data.total_jokes > 0) {
      results.innerHTML = '';
      data.results.forEach((joke) => {
        const jokeDiv = document.createElement('Ul');
        jokeDiv.classList.add('joke');
        const img = document.createElement('img');
        //img.src = `https://icanhazdadjoke.com/j/R7UfaahVfFd.png${joke.id}.png`;
        const text = document.createElement('li');
        text.textContent = joke.joke;
        jokeDiv.appendChild(img);
        jokeDiv.appendChild(text);
        results.appendChild(jokeDiv);

        // Redireccionar al hacer clic en el chiste y guardar en el almacenamiento local
        jokeDiv.addEventListener('click', () => {
          localStorage.setItem('jokeAbout', joke.joke);
          window.location.href = 'product.html';
        });
      });
    } else {
      results.innerHTML = '<p>No results were found with the indicated text.</p>';
    }
  } catch (error) {
    results.innerHTML = '<p>There was a problem looking for jokes. Try again.</p>';
  }
}

form.addEventListener('submit', search);
