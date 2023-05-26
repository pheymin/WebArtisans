let count = 1; // Initial section count

// Add the initial lesson card on page load
$(document).ready(function () {
    var lesson = JSON.parse(sessionStorage.getItem("lesson"));

    if (lesson.videoUrl.length > 0) {
        // count = lesson.videoUrl.length;
        getCache(lesson);
    }
    else {
        addLessonCard();
    }
});

function getCache(lessonInfo) {
    var videoUrl = lessonInfo.videoUrl;

    // Loop through each lesson data and populate the lesson cards
    for (var i = 0; i < videoUrl.length; i++) {
        addLessonCard();
        $("#title-" + (i + 1)).val(videoUrl[i].title);
        $("#url-" + (i + 1)).val(videoUrl[i].url);
    }
}

// Function to add a lesson card
function addLessonCard() {
    let lessonCard = `
        <div id="lesson-card-${count}" class="card w-full glass mb-10">
            <div class="card-body">
                <div class="card-title flex justify-between text-sm font-thin opacity-80">
                    <h6>Lesson ${count}</h6>
                    <img class="w-6 cursor-pointer delete-icon icon-hover" src="../images/trash.svg" alt="delete icon" data-card-id="${count}">
                </div>
                <div class="w-full mt-2">
                    <textarea id="title-${count}" class="title input input-ghost w-full autoresize-textarea resize-none" placeholder="Enter lesson title" maxlength="1000"></textarea>
                    <label class="label my-2">
                        <span class="label-text-alt text-primary">TITLE</span>
                    </label>
                </div>
                <!-- video url container -->
                <div>
                    <div class="w-full pl-5">
                        <div class="flex items-start w-full">
                            <img class="w-5 mt-4 mr-3 cursor-pointer delete-option-icon icon-hover" src="../images/link.png" alt="link icon">
                            <div class="w-full">
                                <textarea id="url-${count}" class="url input input-ghost w-full autoresize-textarea resize-none" placeholder="Enter video URL" maxlength="500"></textarea>
                                <label class="label my-2">
                                    <span class="label-text-alt text-primary">VIDEO URL</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    $('#lesson-container').append(lessonCard);
    updateLessonNumbers();
    count++;
}

// Function to update lesson numbers
function updateLessonNumbers() {
    $('#lesson-container .card-title h6').each(function (index) {
        const lessonNumber = index + 1;
        $(this).text(`Lesson ${lessonNumber}`);
    });
}

// Function to update card IDs and data attributes
function updateCardIds(deletedCardId) {
    $('#lesson-container .card').each(function (index) {
        const cardId = index + 1;

        // Update card ID
        $(this).attr('id', `lesson-card-${cardId}`);

        // Update title input ID
        $(this)
            .find('.title')
            .attr('id', `title-${cardId}`);

        // Update URL input ID
        $(this)
            .find('.url')
            .attr('id', `url-${cardId}`);
    });
}

// Add a lesson card when the "Add Card" button is clicked
$('#add-card-btn').on('click', function () {
    addLessonCard();
});

// Delete a lesson card when the delete button is clicked
$('#lesson-container').on('click', '.delete-icon', function () {
    const cardId = $(this).data('card-id');

    // Check if it is the first card
    if (cardId === 1) {
        alert('You cannot delete the first lesson card');
        return;
    }

    $(`#lesson-card-${cardId}`).fadeOut(400, function () {
        $(`#lesson-card-${cardId}`).remove();
        updateLessonNumbers();
        updateCardIds(cardId);
    });
});

$('#btn-return').on('click', function () {
    sessionStorage.setItem("lesson", JSON.stringify(getLessonData()));
    window.location.href = 'upload-lesson.html';
});

// Get the section data
function getLessonData() {
    var lessonInfo = JSON.parse(sessionStorage.getItem("lesson"));
    var lessonCount = 1;
    var videoUrl = [];

    // Loop through each section input
    while (true) {
        var lessonTitle = $("#title-" + lessonCount).val();
        var lessonUrl = $("#url-" + lessonCount).val();

        // Check if the section input exists
        if (lessonTitle && lessonUrl) {
            var lesson = {
                title: lessonTitle,
                url: lessonUrl
            };

            videoUrl.push(lesson);
            lessonCount++;
        } else {
            break;
        }
    }

    lessonInfo.videoUrl = videoUrl;

    return lessonInfo;
}

$('#btn-add-lesson').on('click', function () {
    sessionStorage.setItem("lesson", JSON.stringify(getLessonData()));
    window.location.href = 'create-quiz.html';
});