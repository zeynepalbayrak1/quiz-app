const questionList = [
     new Question("1-Which keyword declares a block-scoped variable in JavaScript?", {a: "var", b: "let", c: "const", d: "static",}, "b"),

     new Question("2-Which data type represents a sequence of characters in JavaScript?", {a: "Number", b: "String", c: "Boolean", d: "Object",}, "b"),

     new Question("3-Which symbol is used for strict equality comparison?", {a: "=", b: "==", c: "===", d: ":=",}, "c"),

     new Question("4-Which object is used to log messages to the console?", {a: "print", b: "console", c: "log", d: "window",}, "b"),
];



const quiz = new Quiz(questionList);
const ui = new UI();

ui.btnStart.addEventListener("click", function(){
     startTimer(10);
     startTimerLine();
     ui.quizBox.classList.add("active");
     ui.buttonBox.classList.remove("active");
     ui.showQuestion(quiz.getQuestion());
     ui.showNumberOfQuestion(quiz.questionIndex + 1, quiz.questions.length);
     ui.btnNext.classList.remove("show");
})

ui.btnNext.addEventListener("click", function(){
     if(quiz.questions.length != quiz.questionIndex){
          startTimer(10);
          startTimerLine();
          ui.showQuestion(quiz.getQuestion());
          ui.showNumberOfQuestion(quiz.questionIndex + 1, quiz.questions.length);
          ui.btnNext.classList.remove("show");
     }else {
          ui.scoreBox.classList.add("active");
          ui.quizBox.classList.remove("active");

          ui.showScore(quiz.numberOfCorrectAnswer, quiz.questions.length);
     }

});

function optionSelected(e){
     clearInterval(counter);
     clearInterval(counterLine);
     
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
     ui.btnNext.classList.add("show");
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

let counter;
function startTimer(time){
     counter = setInterval(timer, 1000);

     function timer(){
          ui.timeSecond.textContent = time;
          time--;

          if(time<0){
               clearInterval(counter);
               ui.timeText.textContent = "Time’s up!";

               ui.disableAllOption();
               quiz.questionIndex += 1;

               ui.btnNext.classList.add("show");
          }
     }
}

let counterLine;
function startTimerLine(){
     let line_width = 0;
     counterLine = setInterval(timer, 22);

     function timer(){
          line_width += 1;
          ui.timeLine.style.width = line_width + "px";

          if(line_width > 499){
               clearInterval(counterLine);
          }
     }
}