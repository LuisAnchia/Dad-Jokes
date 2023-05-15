 const randomJoker = "https://icanhazdadjoke.com/";

document.getElementById("buttonForJoker").addEventListener("click", Jokerin);

async function Jokerin(){
    await fetch(randomJoker, { 
        method: "GET",
        headers: {'Accept': 'application/json'} })
    .then((resp) => resp.json())
    .then(data => document.getElementById("joker").innerHTML = data.joke);  
}

//export default randomJoker;