let questions = [
    {
        id: 1,
        question: "O que o Morty queria do Presidente?",
        answer: "Uma Selfie",
        options: [
            "Um prêmio"
            "Uma camiseta"
            "Um autografo"
            "Uma Selfie"
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

functions toggleActive(){
    let options = document.querySelectorAll("li.options");
    for(let i=0; i <options.length; i++>){
        
    }
}