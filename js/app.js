const questionList = [
     new Question("1-Which keyword declares a block-scoped variable in JavaScript?", {a: "var", b: "let", c: "const", d: "static",}, "b"),

     new Question("2-Which data type represents a sequence of characters in JavaScript?", {a: "Number", b: "String", c: "Boolean", d: "Object",}, "b"),

     new Question("3-Which symbol is used for strict equality comparison?", {a: "=", b: "==", c: "===", d: ":=",}, "c"),

     new Question("4-Which object is used to log messages to the console?", {a: "print", b: "console", c: "log", d: "window",}, "b")
];



const quiz = new Quiz(questionList);


document.getElementById("btnGetQuestion").addEventListener("click", function(){
     if(quiz.questions.length != quiz.questionIndex){
          console.log(quiz.getQuestion());
          quiz.questionIndex += 1;

          console.log(quiz);
     }else {
          console.log("Quiz Finished!");
     }

});






