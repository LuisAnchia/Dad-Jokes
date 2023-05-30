const randomJoker = "https://icanhazdadjoke.com/";

document.getElementById("buttonForJoker").addEventListener("click", callJoker);

export async function callJoker(){
    try {
        const response = await fetch(randomJoker, { 
            method: "GET",
            headers: {'Accept': 'application/json'} 
        });
        const data = await response.json();
        document.getElementById("joker").innerHTML = data.joke;
        localStorage.setItem("jokeAbout", data.joke);
    } catch (error) {
        console.error("There was an error fetching the random joke:", error);
    }
}

//document.getElementById("jokerAbout").innerHTML = data.joke;

const jokeElement = document.getElementById("joker");

jokeElement.addEventListener("click", () => {
    const jokeText = jokeElement.textContent;
    localStorage.setItem("jokerAbout", jokeText);
    window.location.href = "product.html";
});