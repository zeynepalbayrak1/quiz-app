function Quiz(questions){
     this.questionIndex = 0;
     this.questions = questions;
     this.numberOfCorrectAnswer = 0;
}

Quiz.prototype.getQuestion = function(){
     return this.questions[this.questionIndex];
}