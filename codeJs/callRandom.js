    // Recuperar el chiste del almacenamiento local
    export const showJoke = () => {
      const jokeText = localStorage.getItem('jokeAbout');
      if (jokeText) {
        showJokeOverlay(jokeText);
        localStorage.removeItem('jokeAbout');
      }
    };
          function showJokeOverlay(jokeText) {
          const overlay = document.createElement('div');
          overlay.classList.add('overlay');
          const jokeContainer = document.createElement('div');
          jokeContainer.classList.add('joke-container');
          const jokeTextElement = document.createElement('p');
          jokeTextElement.textContent = jokeText;
          const closeButton = document.createElement('button');
          //closeButton.textContent = 'Close';
          closeButton.addEventListener('click', () => {
            overlay.remove();
          });
    
          jokeContainer.appendChild(jokeTextElement);
          jokeContainer.appendChild(closeButton);
          overlay.appendChild(jokeContainer);
          document.body.appendChild(overlay);
        }
    
        