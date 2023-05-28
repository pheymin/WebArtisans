import { getRandomImageUrl } from "./Tools.js";

$(document).ready(function () {
    // console.log("view-feedback.js ready!");
    $('.menu-item').eq(3).addClass('menu-item-active');
    const query = `SELECT * FROM feedback ORDER BY POSTEDTIME DESC`;

    $.ajax({
        url: "../php/get-feedback.php",
        type: "GET",
        data: {query: query},
        success: function (data) {
            // console.log(data);
            for (var i = 0; i < data.length; i++) {
                //console.log(data[i]);
                createCard(data[i]);
            }
        }
    });
});


function createCard(data){
    var datestring = formatPosttime(data.POSTEDTIME);

    var card = `
        <div class="xl:w-1/3 md:w-1/2 w-full p-4" data-id="${data.ID}">
            <div class="border border-gray-200 p-6 rounded-lg shadow-lg">
            <div class="inline-flex items-start mb-4">
                <img src="${getRandomImageUrl()}" id="user-profile" alt="profile"
                    class="w-10 h-10 rounded-full flex-shrink-0 object-cover object-center">
                <div class="ml-2">
                    <h2 class="text-base text-gray-900 font-medium mb-1">${data.NAME}</h2>
                    <h6 class="text-xs text-gray-500">${datestring}</h6>
                </div>
            </div>
            <p class="text-sm">${data.MESSAGE}</p>
            </div>
        </div>
    `;

    $("#feedback-container").append(card)
}

function formatPosttime(datetime){

    var datestring = new Date(datetime).toDateString().replace(" ", ", ");
    datestring = datestring.substring(4);  
    if(datestring[0] == " ") datestring = datestring.substring(1);
    datestring = datestring.substring(0, datestring.length-5) + "," + datestring.substring(datestring.length-5);

    // var hour = date.getHours();
    // var minute = date.getMinutes();
    // var ampm = hour >= 12 ? "PM" : "AM";
    // var time = hour + ":" + minute + " " + ampm;

    return datestring
}