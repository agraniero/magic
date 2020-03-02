const BASE_URL = "http://localhost:3000";

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('form').addEventListener('submit', createQuestion); 
  loadQuestions();
  //loadAnswers();
});

function createQuestion(e) {
  e.preventDefault();
  let ul = document.getElementById('questions');
  let q = document.getElementById('question').value;
  let params = {
    question: {
     question: q
    }
  };

  fetch(BASE_URL + '/questions', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
    .then(resp => resp.json())
    .then(question => {
      helper(question);
      // ul.innerHTML += `<li>${question.question}</li>`
    createAnswer(question);
    });
};

function helper(question){
  let ul = document.getElementById('questions');
  let li = document.createElement('li');
  let a = document.createElement('a');
  a.setAttribute('href', '#');
  a.textContent = question.question;
  a.addEventListener('click', function (e) {
    e.preventDefault();
    clickHandler(question);
  })
  ul.appendChild(li);
  li.appendChild(a);
};

function createAnswer(question) {
  let ul = document.getElementById('answers')
  let ans = new Answer(question.id);
  let params = {
    answer: {
      answer: ans.answer,
      question_id: ans.question_id
    }
  }

  fetch(BASE_URL + '/answers', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
    .then(resp => resp.json())
    .then(answer => {
      ul.innerHTML += `<li>${answer.answer}</li>`
    })
  
}

function loadQuestions() {
  let ul = document.getElementById('questions');
  fetch(BASE_URL + "/questions")
    .then(response => {
      if (response.status != 200) {
        throw new Error(response.statusText);
      } else {
        return response.json()
      }
    })
    .then(questions => {
      var uniqQuestions = [...new Set(questions)]
      uniqQuestions.forEach(function (q) {
      // questions.forEach(function (q) {
        helper(q)
        // ul.innerHTML += `<li><a href='#' >${question.question}</a></li>`
        // let li = document.createElement('li');
        // let a = document.createElement('a');
        // a.setAttribute('href', '#');
        // a.textContent = question.question;
        // a.addEventListener('click', function(e) {
        //   e.preventDefault();
        //   clickHandler(question)
        // })
        // ul.appendChild(li)
        // li.appendChild(a);
      })
      
    })
    .catch(errors => console.log(errors))

    
}

function clickHandler(question){
  loadAnswers(question)
}

function loadAnswers(question) {
  let ul = document.getElementById('answers');
  while (ul.hasChildNodes()) {ul.removeChild(ul.firstChild)}
  fetch(BASE_URL + "/answers")
    .then(response => {
      if (response.status != 200) {
        throw new Error(response.statusText);
      } else {
        return response.json()
      }
    })
    .then(answers => {
      answers.forEach(function (answer) {
        if (answer.question_id == question.id){
          ul.innerHTML += `<li>${answer.answer}</li>`
        }
      })
    })
    .catch(errors => console.log(errors))
}