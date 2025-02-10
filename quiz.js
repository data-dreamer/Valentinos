const quizData = [
    {
        question: "1. Quando ci siamo conosciuti per la prima volta",
        options: ["31 dicembre 2023", "31 dicembre 2024", "1 gennaio 2023"],
        answer: "31 dicembre 2023"
    },
    {
        question: "2. Dove siamo andati al nostro primo appuntamento?",
        options: ["Bar", "Parco", "Gelato "],
        answer: "Parco"
    },
    {
        question: "3. Qual e' la data del nostro primo bacio?",
        options: ["5 giugno", "29 maggio", "7 giugno"],
        answer: "5 giugno"
    },
    {
        question: "4. Cosa mi ha fatto innamorare di te appena ti ho vista?",
        options: ["il sorriso", "il carattere", "il tuo fisico", "tutto"],
        answer: "tutto"
    },
    {
        question: "5. Quando ci siamo fidanzati ufficialmente?",
        options: ["17 maggio", "17 luglio", "17 giugno"],
        answer: "17 giugno"
    },
    {
        question: "6. Qual e' il primo messaggio che mi hai scritto su Whatsapp? ",
        options: ["buongiorno giuse", "yess", "quindi ci scriviamo su whats?"],
        answer: "yess"
    },
    {
        question: "7. Cosa si regalano i pinguini per San Valentino  ",
        options: ["un sassolino", "un fiorellino", "del ghiaccio"],
        answer: "31 dicembre 2023"
    },
    {
        question: "8. Quanto ti amo? ",
        options: [" tantissimo", "tantissimissimissimo", "si tantissimissimissimissimissimissimissimissimo"],
        answer: "si tantissimissimissimissimissimissimissimissimo"
    }, {
        question: "9. Ti e' piaciuto il quiz? ",
        options: ["si","si","si",],
        answer: "si"
    }, {
        question: "10. Sono il miglior fidanzato del mondo?",
        options: ["ovvio", "certamente", "esattamente esatto"],
        answer: "esattamente esatto"
    },
];

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

function buildQuiz() {
    quizData.forEach((q, index) => {
        const questionElem = document.createElement("div");
        questionElem.innerHTML = `<h3>${q.question}</h3>`;
        
        q.options.forEach(option => {
            questionElem.innerHTML += `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label><br>
            `;
        });
        
        quizContainer.appendChild(questionElem);
    });
}

function showResults() {
    let score = 0;
    resultsContainer.innerHTML = "";
    
    quizData.forEach((q, index) => {
        const answerContainer = document.querySelector(`input[name=question${index}]:checked`);
        if (answerContainer) {
            const userAnswer = answerContainer.value;
            if (userAnswer === q.answer) {
                score++;
                resultsContainer.innerHTML += `<p class='correct'> ${q.question}</p>`;
                resultsContainer.innerHTML += `<img src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXAwMTVsYjZzaTEyOTVtc291M2hpOTdhNnhtNWs4ampxM2huNjJuMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1mikWsbdZMtfAS2sHR/giphy.gif' alt='Pinguino felice'>`;
            } else {
                resultsContainer.innerHTML += `<p class='incorrect'> ${q.question} (Risposta corretta: ${q.answer})</p>`;
                resultsContainer.innerHTML += `<img src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3pwM3BicjVrY3gwMWd0NHJ6M29jMWFkcnlvcmJ0NHRnMnVpZ2k5cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4ZRigpUcEOvMS04bTg/giphy.gif' alt='Pinguino triste'>`;
            }
        } else {
            resultsContainer.innerHTML += `<p class='incorrect'> ${q.question} (Nessuna risposta data)</p>`;
        }
    });
    resultsContainer.innerHTML += `<h2>Punteggio: ${score} / ${quizData.length}</h2>`;
}

buildQuiz();
submitButton.addEventListener("click", showResults);