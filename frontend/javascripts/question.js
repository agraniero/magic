class Question {
  static all = [];

  constructor(question) {
    this.question = question;
    Question.all.push(this);
  };  
};
