import { Lesson } from './lessons.js';

$(document).ready(function () {
    let data = getCurrentStatus();

    //lesson info request
    $.ajax({
        url: '../php/lesson.php',
        method: 'GET',
        dataType: 'json',
        data: { id: data.id },
        success: function (response) {
            loadData(response[0]);
        },
        error: function (xhr, status, error) {
            console.error('Request failed. Status:', error);
        }
    });

    let user = sessionStorage.getItem('currentUser');
    user = JSON.parse(user);

    // user subscribe request
    $.ajax({
        url: '../php/lesson.php',
        method: 'GET',
        dataType: 'json',
        data: {
            id: data.id,
            user_id: data.user_id
        },
        success: function (response) {
            userSubscribe(response);
        },
        error: function (xhr, status, error) {
            console.error('Request failed. Status:', error);
        }
    });

    // Generate the URL for the quiz.html with the 'id' parameter
    const quizUrl = `quiz.html?id=${data.id}`;

    // Set the href attribute of the 'Quizz' link
    $('#quiz-link').attr('href', quizUrl);

    $(document).on('click', '#btn-subscribe', function () {
        $('#subscribe-box').fadeOut(400, function () {
            $(this).remove();
        });
        subscribeAction();
    });

    // Dismiss button click event
    $(document).on('click', '#btn-dismiss', function () {
        $('#subscribe-box').fadeOut(400, function () {
            $(this).remove();
        });
    });

    $(document).on('click', '#nav-btn-subscribe', function () {
        subscribeAction();
    });

    $(document).on('click', "#nav-progress", () => {
        $('#nav-progress-dropdown').toggleClass('hidden');
    })

    $(document).on("change", "#check-complete", () => {
        let isChecked = $('#check-complete').is(":checked");
        let data = getCurrentStatus();

        if (isChecked) {
            let sql = `UPDATE learner_lessons SET completed = 1 WHERE user_id = ${data.user_id} AND lesson_id = ${data.id}`;
            
            $.ajax({
                url: '../php/lesson.php',
                method: 'POST',
                data: JSON.stringify(sql),
                success: function (response) {
                    console.log(response);
                },
                error: function (xhr, status, error) {
                    console.error('Request failed. Status:', error);
                }
            });

            $('#nav-progress-dropdown').empty().append(lessonCompleted);
            
        }
    })
});

// user id & lesson id
function getCurrentStatus() {
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');

    let user = sessionStorage.getItem('currentUser');
    user = JSON.parse(user);

    let data = {
        id: id,
        user_id: user.ID
    }

    return data;
}

function userSubscribe(data) {
    if (data.length === 0) {
        $('#notification').empty().append(subscribeNotification);
        $('#action-bar').empty().append(`<button id="nav-btn-subscribe" class="text-white border border-solid border-white px-3 py-2">Subscribe</button>`);
    } else {
        if(data[0].completed === "1"){
            $('#action-bar').empty().append(progressTracking);
            $('#nav-progress-dropdown').empty().append(lessonCompleted);
        }else if(data[0].completed === "0"){
            $('#action-bar').empty().append(progressTracking);
            $('#nav-progress-dropdown').empty().append(lessonNotCompleted);
        }
    }
}

function subscribeAction() {
    let data = getCurrentStatus();
    let sql = `INSERT INTO learner_lessons (user_id, lesson_id, completed) VALUES (${data.user_id}, ${data.id}, 0)`;

    $.ajax({
        url: '../php/lesson.php',
        method: 'POST',
        data: JSON.stringify(sql),
        success: function (response) {
            console.log(response);
        },
        error: function (xhr, status, error) {
            console.error('Request failed. Status:', error);
        }
    });

    alert('subscribe');

    $('#subscribe-box').fadeOut(400, function () {
        $(this).remove();
    });

    $('#action-bar').empty().append(progressTracking);
    $('#nav-progress-dropdown').empty().append(lessonCompleted);
}

function loadData(data) {
    const lesson = new Lesson(data);
    // console.log(data);

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
    });
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

const subscribeNotification = `
<div id="subscribe-box" class="flex flex-row p-6 border m-3">
    <div>
        <img src="../images/subscribe.png" alt="subscribe">
    </div>
    <div class="pl-5">
        <h2 class="font-bold">Get Started</h2>
        <p class="my-2 text-sm">Learning a little each day adds up. Research shows that students who
                                make learning a habit are more likely to reach their goals. Unlock all lessons by
                                subscribing now!</p>
        <button id="btn-subscribe" class="p-3 bg-primary-purple rounded-xl font-semibold hover:bg-tertiary-purple">Subscibe</button>
        <button id="btn-dismiss" class="btn btn-ghost">Dismiss</button>
    </div>
</div>
`;

const progressTracking = `
<div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div class="relative ml-3">
                    <div>
                        <button id="nav-progress" type="button" class="flex rounded-full" id="user-menu-button"
                            aria-expanded="false" aria-haspopup="true">
                            Your Progress
                        </button>
                    </div>
                    <div id="nav-progress-dropdown"
                        class="absolute hidden right-0 z-10 mt-2 w-60 origin-top-right rounded-md bg-white py-6 px-6 shadow-lg focus:outline-none space-y-2"
                        role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                    </div>
                </div>
            </div>
            `;

const lessonCompleted = `
<div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text text-black">Completed</span>
        <input id="check-complete" disabled="true" type="checkbox" class="checkbox checkbox-primary " />
    </label>
</div>`;

const lessonNotCompleted = `
<h2 class="text-black font-bold">Ongoing...</h2>
    <div class="form-control">
        <label class="label cursor-pointer">
            <span class="label-text text-black">Mark as Complete</span>
            <input id="check-complete" type="checkbox" class="checkbox checkbox-primary" />
        </label>
    </div>`;
