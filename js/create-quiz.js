$(document).ready(function () {
    $('.autoresize-textarea').each(function () {
        autoResizeTextarea($(this));
    });

    $(document).on('click', '.delete-icon', function () {
        var card = $(this).closest('.card');
        var question = card.find('.card-title h6').text();

        if (question === 'Question 1' && $('.card').length === 2) {
            console.log("Cannot delete Question 1.");
        } else {
            card.fadeOut(400, function () {
                card.remove();
                updateQuestionNumbers();
            });
        }
    });

    $('.btn').on('click', function (e) {
        e.preventDefault();
        var newCard = `
          <div class="card w-full glass mb-10" style="display: none;">
            <div class="card-body">
              <div class="card-title flex justify-between text-sm font-thin opacity-80">
                <h6>Question ${$('.card').length}</h6>
                <img class="w-6 cursor-pointer delete-icon" src="/icons/delete.svg" alt="delete icon">
              </div>
              <div class="form-control w-full mt-2">
                <textarea class="input input-ghost w-full autoresize-textarea resize-none" placeholder="Enter a question" maxlength="1000"></textarea>
                <label class="label my-2">
                  <span class="label-text-alt text-primary">QUESTION</span>
                </label>
              </div>
              <div class="options-container"></div>
            </div>
          </div>`;

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
});

function autoResizeTextarea(textarea) {
    textarea.height(textarea[0].scrollHeight);
    textarea.on('input', function () {
        $(this).height('auto').height(this.scrollHeight);
    });
}

function addOptionsToCard(container) {
    container.empty();
    var cardIndex = $('.card').index(container.closest('.card')) + 1;
    for (let i = 1; i <= 4; i++) {
        var optionIndex = i;
        const optionContent = `
          <div class="form-control w-full pl-5">
            <div class="flex items-start w-full">
              <img class="w-6 mt-4 mr-3 cursor-pointer delete-option-icon" src="/icons/tick.svg"  alt="tick icon">
              <div class="w-full">
                <textarea class="input input-ghost w-full autoresize-textarea resize-none" placeholder="Enter option ${optionIndex}" maxlength="500"></textarea>
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
}

function updateQuestionNumbers() {
    var cards = $('.card');
    cards.each(function (index) {
        var questionNumber = index + 1;
        $(this).find('.card-title h6').text('Question ' + questionNumber);
    });
}

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
