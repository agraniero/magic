const BASE_URL = "http://localhost:3000";

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('form').addEventListener('submit', createQuestion); 
  loadQuestions();
  loadAnswers();
})

function createQuestion(e) {
  e.preventDefault();
  let ul = document.getElementById('questions')
  let q = document.getElementById('question').value;
  let params = {
    question: {
     question: q
    }
  }

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
      ul.innerHTML += `<li>${question.question}</li>`
    createAnswer(question)
    })
}

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
      questions.forEach(function (question) {
        ul.innerHTML += `<li>${question.question}</li>`
        
      })
      
    })
    .catch(errors => console.log(errors))
}

function loadAnswers() {
  let ul = document.getElementById('answers');
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
        ul.innerHTML += `<li>${answer.answer}</li>`

      })

    })
    .catch(errors => console.log(errors))
}