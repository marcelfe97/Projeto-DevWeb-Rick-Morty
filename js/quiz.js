let questions = [
    {
        id: 1,
        question: "O que o Morty queria do Presidente?",
        answer: "Uma Selfie",
        options: [
            "Um prêmio",
            "Uma camiseta",
            "Um autografo",
            "Uma Selfie"
        ]
    },
    {
        id: 2,
        question: "Porque o morty matou essa forma de vida?",
        answer: "Ela queria destruir todas as frmas de vida",
        options: [
            "Ela queria destruir todas as frmas de vida",
            "O Ricky não gostava dele",
            "Pois ele era fio apesar de ser útil",
            "Pois ele cantava mal"
        ]
    },
    {
        id: 3,
        question: "Como o Ricky se vingou do senhor indispensavél?",
        answer: "Removeu todas as maldições dos itens",
        options: [
            "Fez a Summer trabalhar para ele",
            "Removeu a todas as maldições dos itens",
            "Abriu uma loja concorrente",
            "Destruiu a loja dele"
        ]
    },
    {
        id: 4,
        question: "Onde o Picles Rick foi parar depois de sair do esgoto?",
        answer: "Um prédio de uma agência russa",
        options: [
            "No banheiro da sala de terapia da Dr Wong",
            "No banheiro da casa dos Smith",
            "Em um prédio da CIA",
            "Um prédio de uma agência russa"
        ]
    },
    {
        id: 5,
        question: "Qual cantor ajuda o Ricke e Morty a salvar a terra dos cromulons?",
        answer: "Ice T",
        options: [
            "Ice T",
            "50 Cent",
            "O presidente que secretamente é um rapper",
            "Snopp Dogg"
        ]
    }
]

let question_count = 0

window.onload = function(){
    SharedWorker(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    questions.innertHTML = `<h2>${count + 1}. ${questions[count].questions}</h2>
    <ul class="options_group">
        <li class="options">${first}</li>
        <li class="options">${second}</li>
        <li class="options">${third}</li>
        <li class="options">${fourth}</li>
    </ul>`;
    toggleActive();
}

function toggleActive(){
    let options = document.querySelectorAll("li.options");
    for(let i=0; i <option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i< option.lenght; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option(i).classList.add("active");
        }
    }
}