import { Lesson } from './lessons.js';

// AJAX request
$(document).ready(function () {
    getAllData();
});

function getAllData() {
    $.ajax({
        url: '../php/explore.php',
        method: 'GET',
        data: { get: "all" },
        dataType: 'json',
        success: function (response) {
            loadData(response);
        },
        error: function (xhr, status, error) {
            getNoResult("error");
            //console.error('Request failed. Status:', xhr.responseText);
        }
    });
}

function loadData(data) {
    const cardContainer = $('#card-container');
    cardContainer.empty();

    if (data.length === 0) {
        getNoResult("search");
    } else {
        // Loop through object
        $.each(data, function (index, item) {
            // Create new card
            let card = new Lesson(item);
            let cardElement = card.getCard();

            cardContainer.append(cardElement);

            // Add click event
            cardElement.click(function () {
                window.location.href = `./lesson.html?id=${card.id}`;
            });
        });
    }
}

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