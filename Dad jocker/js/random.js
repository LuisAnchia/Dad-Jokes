const randomJoker = "https://icanhazdadjoke.com/";

document.getElementById("buttonForJoker").addEventListener("click", callJoker);

export async function callJoker(){
    await fetch(randomJoker, { 
        method: "GET",
        headers: {'Accept': 'application/json'} })
    .then((resp) => resp.json())
    .then(data => {
        document.getElementById("joker").innerHTML = data.joke;
        document.getElementById("jokerAbout").innerHTML = data.joke;
    });
    
}
