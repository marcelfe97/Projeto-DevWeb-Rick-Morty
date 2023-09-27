'use strict'

fetch('https://rickandmortyapi.com/api/episode')
    .then((Response) => Response.json())
.then((data) => Cards (data.results));

function (){
    var questions = [{
        questions: "O que o Morty queria do Presidente?",
        choices: ["Uma Selfie", "Um prêmio", "Uma camiseta", "Um autografo"]
        correctAnswer: "Uma Selfie"
    }]
}

const loginContainer = document.getElementById('login-container')

const moveOverlay = () => loginContainer.classList.toggle('move')

document.getElementById('open-register').addEventListener('click', moveOverlay)
document.getElementById('open-login').addEventListener('click', moveOverlay)

document.getElementById('open-register-mobile').addEventListener('click', moveOverlay)
document.getElementById('open-login-mobile').addEventListener('click', moveOverlay)