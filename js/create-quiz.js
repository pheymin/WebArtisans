$(document).ready(function () {
  // Check if question exists in session storage and display it in the card
  var storedQuestion = sessionStorage.getItem('question');
  if (storedQuestion) {
    var card = createCard(storedQuestion);
    $('.card-container').append(card);
  }

  $('.autoresize-textarea').each(function () {
    autoResizeTextarea($(this));
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

  $('#add-card').on('click', function (e) {
    e.preventDefault();
    var newCard = createCard('');
    var prevCard = $('.card').last().prev();
    prevCard.after(newCard);
    var newCardElement = prevCard.next('.card');
    newCardElement.fadeIn(400, function () {
      autoResizeTextarea(newCardElement.find('.autoresize-textarea'));
      addOptionsToCard(newCardElement.find('.options-container'));
      updateQuestionNumbers();
    });
  });

  addOptionsToCard($('.options-container'));

  $(document).on('click', '.answer-icon', function () {
    var optionIcons = $(this).closest('.options-container').find('.answer-icon');
    optionIcons.attr('src', '../images/tick.svg');
    $(this).attr('src', '../images/green-tick.svg');
  });

  $('#create-button').on('click', function (e) {
    e.preventDefault();

    // Collect form data
    var formData = collectFormData();

    // Send AJAX request to PHP script
    $.ajax({
      url: '../php/create-quiz.php',
      method: 'POST',
      data: formData,
      success: function (response) {
        // Handle the response from the PHP script
        alert(response.split('<br>')[0]);

        console.log(response.split('<br>')[0]);
        // Clear select and textarea fields
        $('.autoresize-textarea').val('');

        // Clear options fields
        $('.answer-icon').attr('src', '../images/tick.svg');

        // Clear the session storage
        sessionStorage.removeItem('coverPicUrl');
        sessionStorage.removeItem('lesson');
      },
      error: function (xhr, status, error) {
        // Handle the error
        alert(error);
      }
    });
  });

  $('#btn-return').on('click', function () {
    window.location.href = 'add-lesson.html';
  });

  function autoResizeTextarea(textarea) {
    textarea.height(textarea[0].scrollHeight);
    textarea.on('input', function () {
      $(this).height('auto').height(this.scrollHeight);
    });
  }

  function createCard(questionText) {
    var cardIndex = $('.card').length + 1;
    var newCard = `
      <div class="card w-full glass mb-10" style="display: none;">
        <div class="card-body">
          <div class="card-title flex justify-between text-sm font-thin opacity-80">
            <h6>Question ${cardIndex}</h6>
            <img class="w-6 cursor-pointer delete-icon icon-hover" src="../images/trash.svg" alt="delete icon">
          </div>
          <div class="form-control w-full mt-2">
            <textarea class="input input-ghost w-full autoresize-textarea resize-none" placeholder="Enter a question" maxlength="1000" name="questions[${cardIndex - 1}][question]">${questionText}</textarea>
            <label class="label my-2">
              <span class="label-text-alt text-primary">QUESTION</span>
            </label>
          </div>
          <div class="options-container"></div>
        </div>
      </div>`;

    var newCardElement = $(newCard);
    autoResizeTextarea(newCardElement.find('.autoresize-textarea'));
    addOptionsToCard(newCardElement.find('.options-container'));
    return newCardElement;
  }

  function addOptionsToCard(container, cardIndex) {
    container.empty();
    var cardIndex = $('.card').index(container.closest('.card')) + 1;
    for (let i = 1; i <= 4; i++) {
      var optionIndex = i;
      const optionContent = `
        <div class="form-control w-full pl-5">
          <div class="flex items-start w-full">
            <img class="w-6 mt-4 mr-3 cursor-pointer answer-icon icon-hover" src="../images/tick.svg" alt="tick icon">
            <div class="w-full">
              <textarea class="input input-ghost w-full autoresize-textarea resize-none" placeholder="Enter option ${optionIndex}" maxlength="500" name="questions[${cardIndex - 1}][options][${optionIndex}][text]"></textarea>
              <label class="label my-2">
                <span class="label-text-alt text-primary">OPTION ${optionIndex}</span>
              </label>
            </div>
          </div>
        </div>
      `;

      container.append(optionContent);
      autoResizeTextarea(container.find('.autoresize-textarea').last());
    }

    container.find('.answer-icon').on('click', function () {
      // Remove the green color from all tick icons
      container.find('.answer-icon').attr('src', '../images/tick.svg');
      // Change the color of the clicked tick icon to green
      $(this).attr('src', '../images/green-tick.svg');
    });
  }

  function updateQuestionNumbers() {
    var cards = $('.card');
    cards.each(function (index) {
      var questionNumber = index + 1;
      $(this).find('.card-title h6').text('Question ' + questionNumber);
    });
  }

  function collectFormData() {
    var lessonData = JSON.parse(sessionStorage.getItem('lesson'));

    var formData = {
      ...lessonData,
      questions: []
    };

    $('.card').each(function (index) {
      var question = {
        question: $(this).find('textarea').val(),
        options: []
      };

      $(this).find('.options-container .form-control').each(function (index) {
        var optionText = $(this).find('textarea').val();
        var isAnswer = $(this).find('.answer-icon').attr('src') === '../images/green-tick.svg';

        var option = {
          text: optionText,
          is_answer: isAnswer
        };

        question.options.push(option);
      });

      formData.questions.push(question);
    });

    return formData;
  }
});
