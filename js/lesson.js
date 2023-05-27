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
            loadData(response[0]);
        },
        error: function (xhr, status, error) {
            console.error('Request failed. Status:', xhr.status);
        }
    });

    // Generate the URL for the quiz.html with the 'id' parameter
    const quizUrl = `quiz.html?id=${id}`;

    // Set the href attribute of the 'Quizz' link
    $('#quiz-link').attr('href', quizUrl);
});

function loadData(data) {
    const lesson = new Lesson(data);
    //console.log(data);

    $('#lesson-title').text(lesson.title);
    $('#lesson-des').text(lesson.description);
    $('#lesson-info').prepend(`
        <p>Lecturer   : ${lesson.lecturer}</p>
        <p>Upload Time: ${lesson.upload_time}</p>
    `);

    let videos = JSON.parse(data.videoUrl);

    $.each(videos, function (index, item) {
        if (index === 0) {
            console.log(item.url);
            $('#lesson-video iframe').attr('src', item.url);
        }

        let sideBar = getsideBar(item);
        $('#side-bar-content').append(sideBar);

        sideBar.click(function () {
            //remove bg color
            $('.side-bar-item').not(sideBar).removeClass('bg-[#d1d7dc]');

            //add bg color
            sideBar.toggleClass('bg-[#d1d7dc]');

            $('#lesson-video iframe').attr('src', item.url);
        }
        );
    }
    );
}

function getsideBar(lesson) {
    //let duration = getVideoDuration(lesson);

    let template = `
    <div class="side-bar-item px-4 py-3 space-y-2 border-b-2 cursor-pointer hover:bg-[#d1d7dc]">
        <h2 class="text-lg">${lesson.title}</h2>
    </div>
    `;

    return $(template);
}

// function getVideoDuration(lesson){
//     $.ajax({
//         url: lesson.url,
//         method: 'GET',
//         dataType: 'text',
//         success: function(response) {
//           const videoDuration = extractVideoDuration(response);
//           if (videoDuration !== null) {
//             // Use the video duration value here
//             console.log('Video Duration:', videoDuration);
//           } else {
//             console.log('Video duration not found.');
//           }
//         },
//         error: function(xhr, status, error) {
//           console.error('Request failed. Status:', xhr.status);
//         }
//       });

//     // lesson.url.addEventListener('loadedmetadata', function() {
//     //     let duration = lesson.url.duration;
//     //     return duration;
//     // });
// }

// // Function to extract video duration from the source file content
// function extractVideoDuration(content) {
//     const regex = /var\s+g_duration\s+=\s+(\d+);/;
//     const match = content.match(regex);
//     if (match && match[1]) {
//       return parseInt(match[1]);
//     }
//     return null;
//   }