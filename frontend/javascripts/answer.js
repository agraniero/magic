class Answer {
  static all = [];

  constructor(question_id) {

    this.answer = this.shakeMe()
    this.question_id = question_id

    Answer.all.push(this);

  }

  shakeMe() {

    let min = 1;
    let max = 20;
    let rnum = Math.floor(Math.random() * (max - min + 1)) + min;

    if (rnum == 1) {
      return 'It is certain.';
    } else if (rnum == 2) {
      return 'It is decidedly so.';
    } else if (rnum == 3) {
      return 'Without a doubt.';
    } else if (rnum == 4) {
      return 'Yes - definitely.';
    } else if (rnum == 5) {
      return 'You may rely on it.';
    } else if (rnum == 6) {
      return 'As I see it, yes.';
    } else if (rnum == 7) {
      return 'Most likely.';
    } else if (rnum == 8) {
      return 'Outlook good.';
    } else if (rnum == 9) {
      return 'Yes.';
    } else if (rnum == 10) {
      return 'Signs point to yes.';
    } else if (rnum == 11) {
      return 'Reply hazy, try again.';
    } else if (rnum == 12) {
      return 'Ask again later.';
    } else if (rnum == 13) {
      return 'Better not tell you now.';
    } else if (rnum == 14) {
      return 'Cannot predict now.';
    } else if (rnum == 15) {
      return 'Concentrate and ask again.';
    } else if (rnum == 16) {
      return "Don't count on it.";
    } else if (rnum == 17) {
      return 'My reply is no.';
    } else if (rnum == 18) {
      return 'My sources say no.';
    } else if (rnum == 19) {
      return 'Outlook not so good';
    } else {
      return 'Very doubtful.';
    };
  };
}
