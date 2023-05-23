
$(document).ready(function () {
    const countQy = "SELECT COUNT(*) AS count FROM feedback";
    $.ajax({
        url: "../php/get-feedback.php",
        type: "GET",
        data: { query: countQy },
        dataType: "json",
        success: function (data) {
            //console.log(data);
            $('#total-feedback').text(data[0].count);
        },
        error: function (xhr, status, error) {
            console.error('Request failed. Status:', xhr.status);
        }
    });
    //console.log("dashboard.js ready!");
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
                //console.log(data[i].POSTEDTIME);
            }
        },
        error: function (xhr, status, error) {
            console.error('Request failed. Status:', xhr.status);
        }
    });
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

const course = $('#courseChart');

const courseData = {
    labels: [
        'Process', 'In process'
    ],
    datasets: [{
        label: 'Course Activities',
        data: [300, 50], //ajax fecch data from database
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)'
        ],
        hoverOffset: 4
    }]
};

new Chart(course, {
    type: 'doughnut',
    data: courseData,
    options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
})


const bar = $('#barChart');
const barLabels = ['One', 'Two', 'Three', 'Four', 'Five'];  //course names
const barData = {
    labels: barLabels,
    datasets: [{
        label: 'Number of Subscribers',
        data: [65, 122, 80, 81, 56],
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
        }
    },
};

new Chart(bar, barConfig);
// bar.height(250);
// course.height(250);

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

var feedbackBoard = $('#feedback-board');

function createFeedbackCard(data){
    if(data.MESSAGE.length > 50){
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