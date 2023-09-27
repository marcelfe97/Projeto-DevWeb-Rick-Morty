'use strict'

fetch('https://rickandmortyapi.com/api/episode')
.then((Response) => Response.json())
.then(episodes => {
    console.log(episodes)
});

function renderEpisode(episode) {
    episode.forEach(episode => {
        const div = document.createElement('div');
        const image = documment.createElement('img');
        const name = document.createElement('h3')
        const episode = document.createElement('h3')
        div.classList = 'card'
        image.classList = 'card-img'

        image.src = episode.image
        name.innerText = `Name: ${episode.name}`

        div.appendChild(image)
        div.appendChild(name)
        cardsContainer.appendChild(div)
    })
}

function (){
    var questions = [{
        questions: "O que o Morty queria do Presidente?",
        choices: ["Uma Selfie", "Um prêmio", "Uma camiseta", "Um autografo"]
        correctAnswer: "Uma Selfie",
    }]
}

const loginContainer = document.getElementById('login-container')

const moveOverlay = () => loginContainer.classList.toggle('move')

document.getElementById('open-register').addEventListener('click', moveOverlay)
document.getElementById('open-login').addEventListener('click', moveOverlay)

document.getElementById('open-register-mobile').addEventListener('click', moveOverlay)
document.getElementById('open-login-mobile').addEventListener('click', moveOverlay)