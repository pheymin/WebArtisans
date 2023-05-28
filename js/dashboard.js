import { getRandomImageUrl } from "./Tools.js";

var barChartLabels = [];
var barChartData = [];
var doughnutChartLabels = [];
var doughnutChartData = [];

$(document).ready(function () {

    $('.menu-item').first().addClass('menu-item-active');
    var currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    // if (currentUser == null || currentUser.ROLE != "1") {
    //     window.location.href = "login.html";
    //     return;
    // }

    $('#admin-name').text(currentUser.NAME);
    //remove the space in name and turn into lowercase
    var name = currentUser.NAME.replace(/\s/g, '').toLowerCase();
    var imgUrl = `../public/${name}.svg`
    $('#admin-profile').attr('src', imgUrl);

    initObjCount();
    //console.log("dashboard.js ready!");
    initPopularChart();

    initProgressChart();

    initTableResult();

    initFeedbackBoard();
});

var calendar = `
    <div class="max-w-sm w-full shadow-lg">
        <div class="md:p-4 p-2 bg-white rounded-sm">
            <div class="px-4 flex items-center justify-between">
                <span class="focus:outline-none text-base font-bold text-gray-800">May 2023</span>
                <div class="flex items-center">
                    <button class="hover:text-gray-400 text-gray-800">
                        <i class="fa-solid fa-angle-left"></i>
                    </button>
                    <button class="hover:text-gray-400 ml-3 text-gray-800"> 
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>
            <div class="flex items-center justify-between pt-12 overflow-x-auto">
                <table class="w-full">
                    <thead>
                        <tr>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-sm font-medium text-center text-gray-800">Su</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-sm font-medium text-center text-gray-800">Mo</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-sm font-medium text-center text-gray-800">Tu</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-sm font-medium text-center text-gray-800">We</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-sm font-medium text-center text-gray-800">Th</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-sm font-medium text-center text-gray-800">Fr</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-sm font-medium text-center text-gray-800">Sa</p>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="pt-4">
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                            </td>
                            <td class="pt-4">
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">1</p>
                                </div>
                            </td>
                            <td class="pt-4">
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">2</p>
                                </div>
                            </td>
                            <td class="pt-4">
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">3</p>
                                </div>
                            </td>
                            <td class="pt-4">
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">4</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">5</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">6</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">7</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500  font-medium">8</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">9</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500 ">10</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500 ">11</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500 ">12</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">13</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500 ">14</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">15</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">16</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">17</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">18</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">19</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">20</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">21</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">22</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">23</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">24</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">25</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">26</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">27</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="w-full h-full">
                                    <div
                                        class="flex items-center justify-center w-full rounded-full cursor-pointer">
                                        <a role="link" tabindex="0" class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-sm w-8 h-8 flex items-center justify-center text-white bg-indigo-700 rounded-full">28</a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">29</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">30</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-sm text-gray-500">31</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
`

// $('#sidebar-nav').append(sideNav)
$('#calendar').append(calendar)

const courseData = {
    labels: doughnutChartLabels,
    datasets: [{
        label: 'Course Activities',
        data: doughnutChartData,
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)'
        ],
        hoverOffset: 4
    }]
};

const couseConfig = {
    type: 'doughnut',
    data: courseData,
    options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
}

const barLabels = barChartLabels;
const barData = {
    labels: barLabels,
    datasets: [{
        label: 'Number of Subscribers',
        data: barChartData,
        backgroundColor: [
            'rgba(167, 107, 239,0.5)',
        ],
        borderColor: [
            'rgb(167, 107, 239)',
        ],
        borderWidth: 1
    }]
};

const barConfig = {
    type: 'bar',
    data: barData,
    options: {
        indexAxis: 'y',
        hoverBackgroundColor: 'rgb(167, 107, 239)',
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            y: {
                ticks: {
                    callback: function (value, index, ticks) {
                        var shortened = this.getLabelForValue(value);
                        if (shortened.length > 10) {
                            return shortened.substr(0, 12) + '...'; //truncate
                        }
                        return shortened;
                    }
                }
            }
        }
    },
};

const courseContainer = $('#course-container');
const barContainer = $('#bar-container');

function chartSize(container, charts) {
    function getStyle(el, name) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(el, null)
        } else {
            return el.currentStyle;
        }
    }
    var wi = getStyle(container, 'width').width;
    var hi = getStyle(container, 'height').height;

    //max width and height is 250px
    //min width and height is 150px
    if (parseInt(wi) < 150) {
        wi = '150px';
    }
    if (parseInt(hi) < 150) {
        hi = '150px';
    }
    if (parseInt(wi) > 250) {
        wi = '250px';
    }
    if (parseInt(hi) > 250) {
        hi = '250px';
    }
    charts.style.width = wi
    charts.style.height = hi
}

window.onresize = function () {
    chartSize(courseContainer[0], course[0]);
    chartSize(barContainer[0], bar[0]);
}

function initObjCount() {
    const countQy = `WITH data_count AS (
        SELECT 'STUDENT_COUNT' AS TYPE, COUNT(*) AS DATA_COUNT FROM users WHERE users.ROLE = 0 UNION
        SELECT 'QUIZ_COUNT' AS TYPE, COUNT(*) AS DATA_COUNT FROM quiz UNION
        SELECT 'LESSON_COUNT' AS TYPE, COUNT(*) AS DATA_COUNT FROM lessons UNION
        SELECT 'FEEDBACK_COUNT' AS TYPE, COUNT(*) AS DATA_COUNT FROM feedback 
    )
    SELECT * FROM data_count;
    `
    $.ajax({
        url: "../php/dashboard.php",
        type: "GET",
        data: { query: countQy },
        dataType: "json",
        success: function (data) {
            // console.log(data);
            $('#total-student').text(data[0].DATA_COUNT);
            $('#total-quiz').text(data[1].DATA_COUNT);
            $('#total-course').text(data[2].DATA_COUNT);
            $('#total-feedback').text(data[3].DATA_COUNT);
        },
        error: function (xhr, status, error) {
            console.error('Request failed. Status:', xhr.status);
        }
    });
}

function initPopularChart() {
    const popularQuery = `SELECT l.title, COUNT(ll.user_id) AS lesson_count from lessons 
                            AS l LEFT JOIN learner_lessons AS ll ON l.id = ll.lesson_id GROUP BY lesson_id ORDER BY lesson_count DESC LIMIT 5`

    $.ajax({
        url: "../php/dashboard.php",
        type: "GET",
        data: { query: popularQuery },
        dataType: "json",
        success: function (data) {
            // console.log(data);
            for (var i = 0; i < data.length; i++) {
                barChartLabels.push(data[i].title);
                barChartData.push(data[i].lesson_count);
            }
            new Chart($('#barChart'), barConfig);
        },
        error: function (xhr, status, error) {
            console.error('Request failed. Status:', xhr.status);
        }
    });
}

function initProgressChart() {
    const progressQuery = `SELECT completed, COUNT(completed) AS progress_count FROM learner_lessons GROUP BY completed`

    $.ajax({
        url: "../php/dashboard.php",
        type: "GET",
        data: { query: progressQuery },
        dataType: "json",
        success: function (data) {
            // console.log(data);
            for (var i = 0; i < data.length; i++) {
                if (data[i].completed == 0) {
                    doughnutChartLabels.push("Not Completed");
                }
                else {
                    doughnutChartLabels.push("Completed");
                }
                doughnutChartData.push(data[i].progress_count);
            }
            new Chart($('#courseChart'), couseConfig);
        },
        error: function (xhr, status, error) {
            console.error('Request failed. Status:', xhr.status);
        }
    });
}

function initTableResult(){
    const resultQuery = `SELECT id, student_name, result, submit_time,
                            CASE WHEN result < 60 THEN 'Fail' ELSE 'Pass' END AS pass_fail,
                            CASE WHEN result >= 80 THEN 'Excellent' WHEN result BETWEEN 59 AND 79 THEN 'Good' ELSE 'Poor' END AS grade
                            FROM quiz_results
                        `
    $.ajax({
        url: "../php/dashboard.php",
        type: "GET",
        data: { query: resultQuery },
        dataType: "json",
        success: function (data) {
            // console.log(data);
            for (var i = 0; i < data.length; i++) {
                createResultCard(data[i]);
            }
        },
        error: function (xhr, status, error) {
            console.error('Request failed. Status:', xhr.status);
        }
    });
}

function initFeedbackBoard() {
    const query = "SELECT * FROM feedback ORDER BY POSTEDTIME DESC LIMIT 5";
    $.ajax({
        url: "../php/get-feedback.php",
        type: "GET",
        data: { query: query },
        dataType: "json",
        success: function (data) {
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                createFeedbackCard(data[i]);
            }
        },
        error: function (xhr, status, error) {
            console.error('Request failed. Status:', xhr.status);
        }
    });
}

var feedbackBoard = $('#feedback-board');

function createFeedbackCard(data) {
    if (data.MESSAGE.length > 50) {
        data.MESSAGE = data.MESSAGE.substring(0, 50) + "...";
    }
    var card = `
        <div class="px-3 py-5 my-2 bg-white rounded-md shadow-md" data-id="${data.ID}">
            <h4 class="font-semibold text-sm text-[#272e3b]">${data.MESSAGE}</h4>
            <p class="text-right text-xs text-[#6b7785] text-medium font-semibold">By - ${data.NAME}</p>
        </div>
    `
    feedbackBoard.append(card)
}

function formatDate(date) {
    var datestring = new Date(date).toDateString().replace(" ", ", ");
    var datetime = date.split(" ")[1];
    datetime = datetime.substring(0, datetime.length - 3);

    datestring = datestring.substring(4);
    if (datestring[0] == " ") datestring = datestring.substring(1);
    datestring = datestring.substring(0, datestring.length - 5) + "," + datestring.substring(datestring.length - 5);

    var hour = datetime.split(":")[0];
    var ampm = hour >= 12 ? "PM" : "AM";
    return datestring + " " + datetime + " " + ampm;
}

function createResultCard(data) {

    var datestring = formatDate(data.submit_time);

    data.result = data.result.split('.')[0];

    var card = `
        <tr data-key="${data.id}" class="hover:bg-[#f8faff]">
            <td class="py-4 px-3">
                <div class="flex items-center">
                    <div class="flex-shrink-0 w-11 h-11">
                        <img class="rounded-full w-11 h-11" src="${getRandomImageUrl()}" alt="photo">
                    </div>
                    <div class="ml-4">
                        <div>${data.student_name}</div>
                    </div>
                </div>
            </td>
            <td class="py-4 px-3">
                <div>${data.result}/100</div>
            </td>
            <td class="py-4 px-3">
                <div>${datestring}</div>
            </td>
            <td class="py-4 px-3">
                <div class="result-grade">${data.grade}</div>
            </td>
            <td class="py-4 px-3 result-badge">
                ${validBadget(data.pass_fail)}
            </td>
        </tr>
    `

    $('#result-table-body').append(card)
}

function validBadget(result) {
    if (result == 'Pass') {
        return `<div class="py-2 px-3 bg-[#e6f6e9] text-[#60c875] rounded-full text-center">Pass</div>`
    }
    else if (result == 'Fail') {
        return `<div class="py-2 px-3 bg-[#ffe7e7] text-[#ff8383] rounded-full text-center">Fail</div>`
    }
}