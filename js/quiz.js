const cardHtml = `
  <div class="card w-full glass mb-10">
    <div class="card-body">
      <div class="card-title flex justify-between text-sm font-thin opacity-60">
        <h6 class="card-title text-sm font-thin opacity-60 question-number"></h6>
      </div>
      <h3 class="text-xl my-3 question-text"></h3>
      <h5>Choose matching option</h5>
      <div class="md:grid md:grid-cols-2 md:gap-3 my-3">
        <button class="btn w-full h-auto my-2 py-5 normal-case option" data-option-id=""></button>
        <button class="btn w-full h-auto my-2 py-5 normal-case option" data-option-id=""></button>
        <button class="btn w-full h-auto my-2 py-5 normal-case option" data-option-id=""></button>
        <button class="btn w-full h-auto my-2 py-5 normal-case option" data-option-id=""></button>
      </div>
    </div>
  </div>`;

$(document).ready(function () {
    var lessonId = getLessonIdFromURL(); // Get the lesson ID from the URL
    var lessonName;
    // AJAX request to retrieve the quiz data
    $.ajax({
        url: '../php/quiz.php?id=' + lessonId, // Pass the lesson ID as a query parameter
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            console.log(response);
            // Update the lesson name
            lessonName = response.lessonName;
            $('.flex.flex-col.justify-center.items-center.w-2\\/3.m-auto h2:first').text(lessonName);

            let questionNumber = 0;
            // Iterate over the quiz data and update the HTML for each question
            $.each(response.quizData, function (index, questionData) {
                // Clone the card template
                const $card = $(cardHtml);

                // Update the question number and total number of questions
                questionNumber += 1;
                $card.find('.card-title .question-number').text('Question ' + questionNumber);

                // Update the question text
                $card.find('.card-body .question-text').text(questionData.question_text);

                // Update the options
                var $options = $card.find('.card-body .md\\:grid .option');
                $.each(questionData.options, function (index, option) {
                    var $option = $options.eq(index);
                    $option.text(option.option_text);
                    $option.attr('data-is-answer', option.is_answer);
                    $option.attr('data-option-id', option.option_id);
                });

                // Append the card to the HTML
                $('#imgb4card').before($card);
            });
        },
    });

    // Define a variable to store the user's score
    var userScore = 0;
    // Handle button click events
    $(document).on('click', '.card .btn', function () {
        var $button = $(this);
        var isAnswer = $button.attr('data-is-answer');

        // Show the result based on the clicked button
        if (isAnswer === '1') {
            $button.addClass('btn-success').prop('disabled', true);
            $button.siblings('.btn').addClass('btn-disabled').prop('disabled', true);
            userScore++;
        } else {
            $button.addClass('btn-error').prop('disabled', true);
            $button.siblings('.btn[data-is-answer="1"]').addClass('btn-success').prop('disabled', true);
            $button.siblings('.btn[data-is-answer="0"]').addClass('btn-disabled').prop('disabled', true);
        }
    });


    // Handle submit button click event
    $(document).on('click', '.btn.btn-primary', function () {
        var totalQuestions = $('.card').length;
        var answeredQuestions = $('.card .btn.btn-success').length;

        if (answeredQuestions < totalQuestions) {
            alert('Please answer all questions before submitting.');
        } else {
            // Calculate the user's percentage score
            var percentageScore = (userScore / totalQuestions) * 100;

            // Determine the grade based on the percentage score
            var grade;
            if (percentageScore >= 90) {
                grade = 'A';
            } else if (percentageScore >= 80) {
                grade = 'B';
            } else if (percentageScore >= 70) {
                grade = 'C';
            } else if (percentageScore >= 60) {
                grade = 'D';
            } else if (percentageScore >= 50) {
                grade = 'E';
            } else {
                grade = 'F';
            }

            // Get the student ID (you can modify this based on your actual implementation)
            const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
            const name = currentUser.NAME;

            // AJAX request to store the quiz result in the database
            $.ajax({
                url: '../php/store-result.php',
                type: 'POST',
                data: {
                    name: name,
                    lessonName: lessonName,
                    score: percentageScore,
                    grade: grade
                },
                success: function (response) {
                    // Handle the success response

                    if (grade !== 'F') {
                        // If the student passed, show pass message and direct to the QR code page
                        alert('Congratulations! You passed the quiz.');
                        window.location.href = '../pages/qr-code.html?lessonName=' + lessonName + '&name=' + name + '&date=' + new Date().toISOString().slice(0, 10);
                    } else {
                        // If the student failed, prompt to reattempt quiz or go back to the home page
                        var retry = confirm('Unfortunately, you failed the quiz. Would you like to reattempt the quiz?');
                        if (retry) {
                            // Redirect to the quiz page to reattempt
                            window.location.href = '../pages/quiz.html?id=' + lessonId;
                        } else {
                            // Redirect to the home page
                            window.location.href = '../index.html';
                        }
                    }
                },
                error: function () {
                    // Handle the error case
                    alert('An error occurred while storing the quiz result. Please try again.');
                }
            });
        }
    });
});

function getLessonIdFromURL() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}