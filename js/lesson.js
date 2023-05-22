import { Lesson } from './lessons.js';

$(document).ready(function () {
    let urlParams = new URLSearchParams(window.location.search);
        let id = urlParams.get('id');

    // AJAX request
    $.ajax({
        url: '../php/lesson.php',
        method: 'GET',
        dataType: 'json',
        data: { id: id },
        success: function (response) {
            loadData(response);
        },
        error: function (xhr, status, error) {
            console.error('Request failed. Status:', xhr.status);
        }
    });
});