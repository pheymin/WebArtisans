import { Lesson } from './lessons.js';
import { getCurrentDateTime } from './Tools.js';

$(document).ready(function () {
    $('.menu-item').eq(2).addClass('menu-item-active');
    getCache();
});

function getCache() {
    const lesson = sessionStorage.getItem('lesson');

    if (lesson) {
        const lessonObj = JSON.parse(lesson);
        $('#title').val(lessonObj.title);
        $('#description').val(lessonObj.description);
        $('#lecturer').val(lessonObj.lecturer);
        $('#coverPic').val = "selected";

        cardPreview(lessonObj.coverPic);
    }
    else {
        cardPreview();
    }
}

//basic information
$('#title').on('input', function () {
    let displayElement = $('#title-count');
    limitWordCount(100, this, displayElement);
    cardPreview();
});

$('#description').on('input', function () {
    let displayElement = $('#description-count');
    limitWordCount(800, this, displayElement);
    cardPreview();
});

$('#lecturer').on('input', function () {
    let displayElement = $('#lecturer-count');
    limitWordCount(50, this, displayElement);
    cardPreview();
});

$('#coverPic').on('change', function () {
    if (this.value !== "selected") {
        getFilePath(function (coverPic) {
            cardPreview(coverPic);
            sessionStorage.setItem('coverPicUrl', coverPic);
        });
    }
});

function limitWordCount(max, input, displayElement) {
    let value = input.value;
    if (value.length > max) {
        value = value.substring(0, max); // Truncate the value to the maximum limit
        input.value = value;
    }

    let currentCount = value.length;
    displayElement.text(currentCount + '/' + max);
}

function getFilePath(callback) {
    // Create a FormData object
    const formData = new FormData();

    const fileInput = document.getElementById('coverPic');
    //Check if a file was selected
    if (fileInput.files.length > 0) {
        // Append the file to the FormData object
        formData.append('coverPic', fileInput.files[0]);
        $.ajax({
            url: "../php/upload-lesson.php",
            type: "POST",
            data: formData,
            processData: false, // Set processData to false
            contentType: false, // Set contentType to false
            success: function (data) {
                //coverPic = data;
                callback(data);
            },
            error: function (xhr, status, error) {
                //console.log(error);
                callback("https://dummyimage.com/1280x720");
            }
        });
    }
    else {
        callback("https://dummyimage.com/1280x720");
    }
}

function cardPreview(coverUrl) {
    let lesson = sessionStorage.getItem('lesson');
    lesson = JSON.parse(lesson);

    const title = $("#title").val() || "Title";
    const description = $("#description").val() || "Description";
    const lecturer = $("#lecturer").val() || "Lecturer";
    const coverPic = coverUrl || lesson.coverPic ||"https://dummyimage.com/1280x720";

    const data = {
        title: title,
        description: description,
        lecturer: lecturer,
        coverPic: coverPic,
        upload_time: getCurrentDateTime()
    }

    let card = new Lesson(data);
    let cardElement = card.getCard();

    $('#card-container').html(cardElement);
}

function validateData() {
    let title = $("#title").val();
    let description = $("#description").val();
    let lecturer = $("#lecturer").val();

    if (title === "" || description === "" || lecturer === "") {
        return false;
    }

    return true;
}

$('#btn-add-lesson').on('click', function (e) {
    e.preventDefault();
    let lesson = sessionStorage.getItem('lesson');
    lesson = JSON.parse(lesson);

    if (validateData()) {
        const title = $("#title").val();
        const description = $("#description").val();
        const lecturer = $("#lecturer").val();
        const coverPic = sessionStorage.getItem('coverPicUrl') || lesson.coverPic || "https://dummyimage.com/1280x720";

        // Retrieve lesson data from session storage
        const lessonData = JSON.parse(sessionStorage.getItem('lesson'));

        if (lessonData && lessonData.videoUrl && lessonData.videoUrl.length > 0) {
            // If videoUrl array is not empty, update other details and keep the existing video URLs
            const data = {
                title: title,
                description: description,
                lecturer: lecturer,
                coverPic: coverPic,
                videoUrl: lessonData.videoUrl // Keep the existing video URLs
            };
            sessionStorage.setItem('lesson', JSON.stringify(data));
        } else {
            // If videoUrl array is empty, create new lesson data with the provided details
            const data = {
                title: title,
                description: description,
                lecturer: lecturer,
                coverPic: coverPic,
                videoUrl: []
            };
            sessionStorage.setItem('lesson', JSON.stringify(data));
        }

        pageRedirect();

    } else {
        alert("Please fill all the fields");
    }
});

function pageRedirect() {
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');
    if (id) {
        window.location.href = `./add-lesson.html?id=${id}`;
    } else {
        window.location.href = "add-lesson.html";
    }
}
