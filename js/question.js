function Question(guestionText, answerOptions, correctAnswer){
     this.guestionText = guestionText;
     this.answerOptions = answerOptions;
     this.correctAnswer = correctAnswer;
}

Question.prototype.checkAnswer = function(answer){
     return answer === this.correctAnswer;
};




     