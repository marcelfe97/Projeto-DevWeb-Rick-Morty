'use strict'

fetch('https://rickandmortyapi.com/api/episode')
    .then((Response) => Response.json())
.then((data) => Cards (data.results));

function Cards(Stuff) {
    const cardContainer = document.querySelector("#video")
    console.log(Stuff)
    Stuff.forEach(episode => {
        cardContainer.innerHTML =
        cardContainer.innerHTML +
        `<div class="card">
        <h2>${episone.name}<h2>
        <video src=${episode.video} class="card-video-top>
        </div>`
    })
}

const loginContainer = document.getElementById('login-container')

const moveOverlay = () => loginContainer.classList.toggle('move')

document.getElementById('open-register').addEventListener('click', moveOverlay)
document.getElementById('open-login').addEventListener('click', moveOverlay)

document.getElementById('open-register-mobile').addEventListener('click', moveOverlay)
document.getElementById('open-login-mobile').addEventListener('click', moveOverlay)