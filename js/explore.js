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
            let cardElement = getCard(card);

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

$('#search-bar').on('change', function () {
    if ($('#search-bar').val() === "") {
        getAllData();
    }
});

function getCard(lesson) {
    let shortenDes = lesson.getShortenDes();

    let template = `
      <div id="card" class="card card-compact w-full cursor-pointer border border-solid border-gray bg-white hover:bg-white hover:drop-shadow-md">
          <figure><img src="${lesson.coverPic}" alt="cover_pic" class="object-cover"/></figure>
          <div class="card-body">
              <h4 class="card-title text-lg">${lesson.title}</h4>
              <p>${shortenDes}</p>
              <div>
                  <p class="text-[#86909c] text-xs">${lesson.lecturer}</p>
                  <p class="text-[#86909c] text-xs">Publish on ${lesson.upload_time}</p>
              </div>
          </div>
      </div>
    `;

    return $(template);
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