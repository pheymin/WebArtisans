let data = {};

$(document).ready(function () {
    // AJAX request
    $.ajax({
        url: '../php/database.php',
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            data = response;
            loadData(data);
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
        let card = new Card(item);
        let cardElement = card.getCard();

        cardContainer.append(cardElement);

        // Add click event
        cardElement.click(function() {
            card.clickCardEvent();
        });
    });

}

class Card {
    constructor(data) {
        this.data = data;
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.lecturer = data.lecturer;
        this.coverPic = data.coverPic;
        this.upload_time = data.upload_time;
    }

    getCard() {
        let shortenDes = this.getShortenDes();

        let template = `
        <div id="card" class="card card-compact w-80 cursor-pointer border border-solid border-gray bg-white hover:bg-white hover:drop-shadow-md">
            <figure><img src="${this.coverPic}" alt="cover_pic" class="object-cover"/></figure>
            <div class="card-body">
                <h4 class="card-title text-lg">${this.title}</h4>
                <p>${shortenDes}</p>
                <div>
                <p class="text-[#86909c] text-xs">${this.lecturer}</p>
                <p class="text-[#86909c] text-xs">Publish on ${this.upload_time}</p></div>
            </div>
        </div>
        `;

        return $(template);
    }

    getShortenDes() {
        const maxDes = 90;
        let shortenDes = this.description;

        if (shortenDes.length > maxDes) {
            shortenDes = shortenDes.substr(0, maxDes) + '...';
        }

        return shortenDes;
    }

    clickCardEvent() {
        window.location.href = `./lesson.html?id=${this.id}`
    }
}