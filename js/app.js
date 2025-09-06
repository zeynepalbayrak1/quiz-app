const questionList = [
     new Question("1-Which keyword declares a block-scoped variable in JavaScript?", {a: "var", b: "let", c: "const", d: "static",}, "b"),

     new Question("2-Which data type represents a sequence of characters in JavaScript?", {a: "Number", b: "String", c: "Boolean", d: "Object",}, "b"),

     new Question("3-Which symbol is used for strict equality comparison?", {a: "=", b: "==", c: "===", d: ":=",}, "c"),

     new Question("4-Which object is used to log messages to the console?", {a: "print", b: "console", c: "log", d: "window",}, "b"),
];



const quiz = new Quiz(questionList);
const ui = new UI();

ui.btnStart.addEventListener("click", function(){
     ui.quizBox.classList.add("active");
     ui.buttonBox.classList.remove("active");
     ui.showQuestion(quiz.getQuestion());
     ui.showNumberOfQuestion(quiz.questionIndex + 1, quiz.questions.length);
})

ui.btnNext.addEventListener("click", function(){
     if(quiz.questions.length != quiz.questionIndex){
          ui.showQuestion(quiz.getQuestion());
          ui.showNumberOfQuestion(quiz.questionIndex + 1, quiz.questions.length);
     }else {
          ui.scoreBox.classList.add("active");
          ui.quizBox.classList.remove("active");

          ui.showScore(quiz.numberOfCorrectAnswer, quiz.questions.length);
     }

});

function optionSelected(e){
     let selectedElement = e.target;

     if(selectedElement.nodeName == "SPAN") {
          selectedElement = selectedElement.parentElement;
     }

     const answer = e.target.textContent[0];
     const question  = quiz.getQuestion();

     if(question.checkAnswer(answer)){
          quiz.numberOfCorrectAnswer += 1;
          selectedElement.classList.add("correct");
          selectedElement.insertAdjacentHTML("beforeend", ui.correctIcon);
     } else {
          selectedElement.classList.add("incorrect");
          selectedElement.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
     }
     quiz.questionIndex += 1;


     ui.disableAllOption();
}

ui.btnQuit.addEventListener("click", function(){
     window.location.reload();
})

ui.btnReplay.addEventListener("click", function(){
     quiz.questionIndex = 0;
     quiz.numberOfCorrectAnswer = 0;
     
     ui.btnStart.click();
     ui.scoreBox.classList.remove("active");
})
