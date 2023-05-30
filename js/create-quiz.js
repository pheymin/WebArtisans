$(document).ready(function () {
  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get('id');

  // Check if question exists in session storage and display it in the card
  var storedQuestion = JSON.parse(sessionStorage.getItem('questions'));
  if (storedQuestion) {
    var count = 0;
    storedQuestion.forEach(function (question) {
      if (question.question && question.options) {
        var card = createCard(question);
        $('#add-question-card').before(card);

        var newCardElement = $('#add-question-card').prev('.card');
        newCardElement.fadeIn(400, function () {
          autoResizeTextarea(newCardElement.find('.autoresize-textarea'));
        });

        count++;
      } else if (count === 0) {
        addQuestionCard();
        count++;
      }
    });
  } else {
    $.ajax({
      url: '../php/create-quiz.php',
      method: 'GET',
      data: { id },
      success: function (response) {
        console.log(response);
        if (response === "1") {
          addQuestionCard();
        } else {
          response.forEach(function (question) {
            var card = createCard(question);
            $('#add-question-card').before(card);

            var newCardElement = $('#add-question-card').prev('.card');
            newCardElement.fadeIn(400, function () {
              autoResizeTextarea(newCardElement.find('.autoresize-textarea'));
            });
          });
        }
      },
      error: function (xhr, status, error) {
        console.log(error);
      }
    });
  }
});

$('#btn-return').on('click', function () {
  pageRedirect("add-lesson.html");
});

$('#add-card').on('click', function (e) {
  e.preventDefault();
  addQuestionCard();
});

$(document).on('click', '.delete-icon', function () {
  var card = $(this).closest('.card');
  var question = card.find('.card-title h6').text();

  if (question === 'Question 1' && $('.card').length === 2) {
    alert("Cannot delete Question 1.");
  } else {
    card.fadeOut(400, function () {
      card.remove();
      updateQuestionNumbers();
    });
  }
});

$(document).on('click', '.answer-icon', function () {
  var optionIcons = $(this).closest('.options-container').find('.answer-icon');
  optionIcons.attr('src', '../images/tick.svg');
  $(this).attr('src', '../images/green-tick.svg');
});

$('#create-button').on('click', function (e) {
  e.preventDefault();

  var formData = {
    id: (new URLSearchParams(window.location.search)).get('id'),
    lesson: JSON.parse(sessionStorage.getItem('lesson')),
    questions: collectQuestion()
  }
  console.log(formData);

  $.ajax({
    url: '../php/create-quiz.php',
    method: 'POST',
    data: formData,
    success: function (response) {
      alert(response);
      window.location.href = "edit-lesson.html";
      
      // Clear the session storage
      sessionStorage.removeItem('coverPicUrl');
      sessionStorage.removeItem('lesson');
      sessionStorage.removeItem('questions');
    },
    error: function (xhr, status, error) {
      // Handle the error
      alert(error);
    }
  });
});

$(window).on('beforeunload', function () {
  var question = collectQuestion();
  sessionStorage.setItem('questions', JSON.stringify(question));
});

function createCard(questions) {
  var question = '';
  var option1 = '';
  var option2 = '';
  var option3 = '';
  var option4 = '';
  var answer1 = '';
  var answer2 = '';
  var answer3 = '';
  var answer4 = '';

  if (questions) {
    var question = questions.question;
    option1 = questions.options[0].text;
    option2 = questions.options[1].text;
    option3 = questions.options[2].text;
    option4 = questions.options[3].text;
    answer1 = questions.options[0].is_answer;
    answer2 = questions.options[1].is_answer;
    answer3 = questions.options[2].is_answer;
    answer4 = questions.options[3].is_answer;
  }

  var cardIndex = $('.card').length;
  var newCard = `
    <div class="card w-full glass mb-10" style="display: none;">
      <div class="card-body">
        <div class="card-title flex justify-between text-sm font-thin opacity-80">
          <h6>Question ${cardIndex}</h6>
          <img class="w-6 cursor-pointer delete-icon icon-hover" src="../images/trash.svg" alt="delete icon">
        </div>
        <div class="form-control w-full mt-2">
          <textarea class="input input-ghost w-full autoresize-textarea resize-none" placeholder="Enter a question" maxlength="1000" name="questions[${cardIndex - 1}][question]">${question}</textarea>
          <label class="label my-2">
            <span class="label-text-alt text-primary">QUESTION</span>
          </label>
        </div>
        <div class="options-container">
          <div class="form-control w-full pl-5">
            <div class="flex items-start w-full">
              <img class="w-6 mt-4 mr-3 cursor-pointer answer-icon icon-hover" src=${answer1 === "true" ? "../images/green-tick.svg" : "../images/tick.svg"} alt="tick icon">
              <div class="w-full">
                <textarea class="input input-ghost w-full autoresize-textarea resize-none" placeholder="Enter option 1" maxlength="500" name="questions[${cardIndex - 1}][options][1][text]">${option1}</textarea>
                <label class="label my-2">
                  <span class="label-text-alt text-primary">OPTION 1</span>
                </label>
              </div>
            </div>
          </div>
          <div class="form-control w-full pl-5">
            <div class="flex items-start w-full">
              <img class="w-6 mt-4 mr-3 cursor-pointer answer-icon icon-hover" src=${answer2 === "true" ? "../images/green-tick.svg" : "../images/tick.svg"} alt="tick icon">
              <div class="w-full">
                <textarea class="input input-ghost w-full autoresize-textarea resize-none" placeholder="Enter option 2" maxlength="500" name="questions[${cardIndex - 1}][options][2][text]">${option2}</textarea>
                <label class="label my-2">
                  <span class="label-text-alt text-primary">OPTION 2</span>
                </label>
              </div>
            </div>
          </div>
          <div class="form-control w-full pl-5">
            <div class="flex items-start w-full">
              <img class="w-6 mt-4 mr-3 cursor-pointer answer-icon icon-hover" src=${answer3 === "true" ? "../images/green-tick.svg" : "../images/tick.svg"} alt="tick icon">
              <div class="w-full">
                <textarea class="input input-ghost w-full autoresize-textarea resize-none" placeholder="Enter option 3" maxlength="500" name="questions[${cardIndex - 1}][options][3][text]">${option3}</textarea>
                <label class="label my-2">
                  <span class="label-text-alt text-primary">OPTION 3</span>
                </label>
              </div>
            </div>
          </div>
          <div class="form-control w-full pl-5">
            <div class="flex items-start w-full">
              <img class="w-6 mt-4 mr-3 cursor-pointer answer-icon icon-hover" src=${answer4 === "true" ? "../images/green-tick.svg" : "../images/tick.svg"} alt="tick icon">
              <div class="w-full">
                <textarea class="input input-ghost w-full autoresize-textarea resize-none" placeholder="Enter option 4" maxlength="500" name="questions[${cardIndex - 1}][options][4][text]">${option4}</textarea>
                <label class="label my-2">
                  <span class="label-text-alt text-primary">OPTION 4</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  return newCard;
}

function autoResizeTextarea(textarea) {
  textarea.height(textarea[0].scrollHeight);
  textarea.on('input', function () {
    $(this).height('auto').height(this.scrollHeight);
  });
}

function addQuestionCard() {
  var newCard = createCard('');
  $('#add-question-card').before(newCard);

  var newCardElement = $('#add-question-card').prev('.card');
  newCardElement.fadeIn(400, function () {
    autoResizeTextarea(newCardElement.find('.autoresize-textarea'));
  });
}

function updateQuestionNumbers() {
  $('.card').each(function (index) {
    $(this).find('.card-title h6').text('Question ' + (index + 1));
  });
}

function collectQuestion() {
  // Create an empty array to store the questions
  var questions = [];

  // Iterate over each element with the class 'card'
  $('.card').each(function (index) {
    // Create a question object
    var question = {};

    // Get the question text from the corresponding textarea input
    question.question = $(this).find('textarea[name="questions[' + index + '][question]"]').val();

    // Create an empty array to store the options for this question
    question.options = [];

    // Iterate over each textarea input starting with the name 'questions[index][options]'
    $(this).find('textarea[name^="questions[' + index + '][options]"]').each(function (optionIndex) {
      // Create an option object
      var option = {};

      // Get the option text from the current textarea input
      option.text = $(this).val();

      // Determine if the option is the answer based on the presence of a 'green-tick' class
      option.is_answer = $(this).closest('.options-container').find('.answer-icon').eq(optionIndex).attr('src').includes('green-tick')
        ? "true"
        : "false";

      // Add the option object to the options array of the current question
      question.options.push(option);
    });

    // Add the question object to the main array of questions
    questions.push(question);
  });

  // Return the array of questions
  return questions;
}

function pageRedirect(url) {
  let urlParams = new URLSearchParams(window.location.search);
  let id = urlParams.get('id');

  if (id) {
    window.location.href = `${url}?id=${id}`;
  } else {
    window.location.href = `${url}`;
  }
}