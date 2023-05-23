import { Lesson } from './lessons.js';

// AJAX request
$(document).ready(function () {
    $.ajax({
        url: '../php/explore.php',
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            loadData(response);
        },
        error: function (xhr, status, error) {
            console.error('Request failed. Status:', xhr.status);
        }
    });
});

function loadData(data) {
    const cardContainer = $('#card-container');

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