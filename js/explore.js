import { Lesson } from './lessons.js';

// AJAX request
$(document).ready(function () {
    getAllData();

    $('#search-btn').click(function () {
        let search = $('#search-bar').val();
        console.log(search);
        $.ajax({
            url: '../php/explore.php',
            method: 'GET',
            dataType: 'json',
            data: { search: search },
            success: function (response) {
                loadData(response);
            },
            error: function (xhr, status, error) {
                //console.error(xhr.responseText);
                getNoResult("error");
            }
        });
    });

    $('#search-bar').on('input', function () {
        if ($('#search-bar').val() === "") {
            getAllData();
        }
    });
});

function getAllData() {
    let data = "all";
    if (getPageContext() === 'user') {
        let user = JSON.parse(sessionStorage.getItem('currentUser'));
        data = user.ID;
    }

    $.ajax({
        url: '../php/explore.php',
        method: 'GET',
        data: { get: data },
        dataType: 'json',
        success: function (response) {
            loadData(response);
        },
        error: function (xhr, status, error) {
            getNoResult("error");
            // console.error('Request failed. Status:', error);
        }
    });
}

function loadData(data) {
    const cardContainer = $('#card-container');
    cardContainer.empty();

    if (data.length === 0) {
        getNoResult("search");
    } else {
        if (getPageContext() === 'user') {

            // Loop through object
            $.each(data, function (index, item) {
                // Create new card
                let card = new Lesson(item);
                let cardElement = card.getCard();

                let status = item.completed === "1" ? "Completed" : "Ongoing";

                cardElement.find('.status').addClass('bg-[#a38ffd] text-white p-4').text(status);

                cardContainer.append(cardElement);

                // Add click event
                cardElement.click(function () {
                    cardEventHandler(card.id);
                });
            });
        } else {
            // Loop through object
            $.each(data, function (index, item) {
                // Create new card
                let card = new Lesson(item);
                let cardElement = card.getCard();

                cardContainer.append(cardElement);

                // Add click event
                cardElement.click(function () {
                    cardEventHandler(card.id);
                });
            });
        }
    }
}

function cardEventHandler(id) {

    if (!sessionStorage.getItem('currentUser')) {
        alert("Please login to continue");
        return;
    }

    const pageContext = getPageContext();
    let redirectUrl = '';
    if (pageContext === 'explore' || pageContext === 'user') {
        redirectUrl = `./lesson.html?id=${id}`;
        window.location.href = redirectUrl;
    } else if (pageContext === 'edit') {
        redirectUrl = `./upload-lesson.html?id=${id}`;

        $.ajax({
            url: '../php/explore.php',
            method: 'GET',
            data: { id: id },
            dataType: 'json',
            success: function (response) {
                processData(response[0]);
                sessionStorage.removeItem('questions');
                window.location.href = redirectUrl;
            },
            error: function (xhr, status, error) {
                console.error('Request failed. Status:', error);
            }
        });
    }
}

function processData(data) {
    let videoUrl = JSON.parse(data.videoUrl);
    data.videoUrl = videoUrl;

    sessionStorage.setItem('lesson', JSON.stringify(data));
}

function getPageContext() {
    const currentPath = window.location.pathname;

    if (currentPath.includes("edit-lesson.html")) {
        return "edit";
    } else if (currentPath.includes("explore.html")) {
        return "explore";
    } else if (currentPath.includes("user-lesson.html")) {
        return "user";
    }
}

function getNoResult(type) {
    let template = `test`;
    let search = $('#search-bar').val();

    if (type === "error") {
        template = `
        <h2 class="text-xl col-span-full">Unable to connect database, please try again...</h2>
    `;
    }
    else if (type === "search") {
        template = `
        <h2 class="text-xl col-span-full">Sorry, we couldn't find anything for "${search}"</h2>
    `;
    }
    $('#card-container').empty();
    $('#card-container').append(template);
}