
$(document).ready(function () {

    $('body').find('.logo-img').attr('src', '../public/vite.svg');
    // console.log("forum.js ready!");
    var query = `SELECT f.*, COUNT(c.FORUM_ID) AS COMMENT_COUNT FROM forums AS f LEFT JOIN comments AS c ON f.ID = c.FORUM_ID GROUP BY f.ID ORDER BY f.DATE`;
    $.ajax({
        url: "../php/forum.php",
        type: "GET",
        data: { query: query },
        // dataType: "json",
        success: function (data) {
            // var data = JSON.parse(result);
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                //console.log(data[i]);
                appendPostOnTop(data[i]);
            }
            handleIconEvents();
        },
    });
    appendCommentModal();
});

var date = new Date();
var datetime = $("#forum-datetime");
var datestring = date.toDateString().replace(" ", ", ");
datetime.text(datestring);

function handleIconEvents()
{
    /*
    var likeContainer = $(".like-icon");
    likeContainer.hover(function () {
        $(this.children[0]).toggleClass("fa-bounce");
    });

    likeContainer.on("click", function () {
        $(this.children[0]).toggleClass("fa-solid");
        $(this.children[0]).toggleClass("text-red-500");

        //plus one or minus one to children[1]
        var likeCount = $(this.children[1]).text();
        var likeCountInt = parseInt(likeCount);
        if ($(this.children[0]).hasClass("fa-solid")) {
            $(this.children[1]).text(likeCountInt + 1);
        } else {
            $(this.children[1]).text(likeCountInt - 1);
        }
    });

    var commentContainer = $(".comment-icon");
    commentContainer.hover(function () {
        $(this.children[0]).toggleClass("fa-bounce");
    });

    commentContainer.on("click", function () {
        var data = $(this).parent().parent().parent().data("id");
        //appendCommentModal(data);
        console.log(data);
    });
    */
    $(document).on("mouseenter", ".like-icon", function() {
        $(this).children().first().toggleClass("fa-bounce");
    });

    $(document).on("mouseleave", ".like-icon", function() {
        $(this).children().first().toggleClass("fa-bounce");
    });

    $(document).on("click", ".like-icon", function() {
        $(this).children().first().toggleClass("fa-solid text-red-500");

        var likeCount = $(this).children().last().text();
        var likeCountInt = parseInt(likeCount);
        if ($(this).children().first().hasClass("fa-solid")) {
            $(this).children().last().text((likeCountInt + 1) + " Likes");
        } else {
            $(this).children().last().text((likeCountInt - 1) + " Likes");
        }
    });

    $(document).on("mouseenter", ".comment-icon", function() {
        $(this).children().first().toggleClass("fa-bounce");
    });

    $(document).on("mouseleave", ".comment-icon", function() {
        $(this).children().first().toggleClass("fa-bounce");
    });

    $(document).on("click", ".comment-icon", function() {
        var data = $(this).closest("[data-id]").data("id");
        console.log(data);
    });
}

var forumTextarea = $("#txt-create-post");
var createButton = $("#btn-create-post");

createButton.on("click", function (e) {
    e.preventDefault();
    var content = forumTextarea.val();
    var title = content.split("\n")[0];
    content = content.replace(title, "");
    content = content.replaceAll("\n", "");
    createNewPost(title, content);
});

const cardContainer = $(".forum-card-container");
var cardNum = cardContainer.children().length;

function createNewPost(title, content) {
    //convert date to format: YYYY-MM-DD HH:MM:SS, time zone is Malaysia
    let date = new Date();
    date.setHours(date.getHours() + 8);
    let datestring = date.toISOString().slice(0, 19).replace("T", " ");

    var post = {
        NAME: "Vite",
        TITLE: title,
        CONTENT: content,
        DATE: datestring,
        THUMB: 0,
    };

    //console.log(JSON.stringify(post));

    const query = `INSERT INTO forums (NAME, TITLE, CONTENT, DATE, THUMB) VALUES ('${post.NAME}', '${post.TITLE}', '${post.CONTENT}', '${post.DATE}', ${post.THUMB})`
    
    $.ajax({
        url: "../php/forum.php",
        type: "POST",
        data: JSON.stringify(query),
        success: function (result) {
            //console.log(result);
            appendPostOnTop(post);
            // handleIconEvents();
        }
    });
}

function appendPostOnTop(post){

    if (!post.ID) post.ID = $('.forum-card').length+1;

    var datestring = new Date(post.DATE).toDateString().replace(" ", ", ");
    var datetime = post.DATE.split(" ")[1];
    datetime = datetime.substring(0, datetime.length-3);
    
    datestring = datestring.substring(4);  
    if(datestring[0] == " ") datestring = datestring.substring(1);
    datestring = datestring.substring(0, datestring.length-5) + "," + datestring.substring(datestring.length-5);

    var hour = datetime.split(":")[0];
    var ampm = hour >= 12 ? "PM" : "AM";
    post.DATE = datestring + " " + datetime + " " + ampm;
    
    var newPost = `
        <div class="forum-card" data-id="${post.ID}">
            <div class="flex flex-col box-border mb-6 py-5 px-7 rounded-lg shadow-lg bg-[#f5e8ff]">
                <div class="inline-flex">
                    <img src="https://dummyimage.com/106x106" id="user-profile" alt="profile"
                        class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
                    <div class="flex flex-col ml-4">
                        <h3 class="text-sm text-[#272e3b] font-semibold">${post.NAME}</h3>
                        <span class="text-xs text-[#4e5969]">${post.DATE}</span>
                        <h5 class="font-semibold text-lg my-2 text-[#1d2129]">${post.TITLE}</h5>
                        <p class="text-sm">${post.CONTENT}</p>
                    </div>
                </div>
                <div class="inline-flex pl-16 pr-4 mt-4 justify-between">
                    <div class="like-icon text-sm text-gray-500 cursor-pointer">
                        <i class="fa-regular fa-thumbs-up"></i>
                        <span class="ml-1">${post.THUMB} Likes</span>
                    </div>
                    <span class="comment-icon cursor-pointer hover:text-[#6aa1ff] text-sm text-gray-500">
                        <i class="fa-regular fa-comment-dots ml-3"></i>
                        <span class="ml-1">${post.COMMENT_COUNT} comments</span>
                    </span>
                </div>
            </div>
        </div>
    `

    cardContainer.prepend(newPost);
    forumTextarea.val("");
}

function appendCommentModal(){
    var modal = `
    <div id="comment-modal-backdrop" class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-30 overflow-y-auto">
            <div id="modal-panel" class="flex min-h-full justify-center p-4 items-center sm:p-0">
                <div class="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:my-6 sm:w-full lg:max-w-4xl md:max-w-2xl max-w-xl py-8 px-6" >
                    <div class="flex flex-col">
                        <span class="flex justify-end"><i id="icon-close" class="fa-solid fa-xmark text-gray-500 hover:text-blue-500 text-lg cursor-pointer"></i></span>
                        <h1 class="font-semibold text-xl text-center">20 Comments</h1>
                        <div class=" inline-flex items-start mt-4">
                            <img src="https://dummyimage.com/106x106" id="user-profile" alt="profile" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
                            <div class="overflow-hidden ml-4 flex-1">
                                <textarea rows="3" name="comment" class="w-full rounded-lg border-2 text-base border-gray-300 bg-white placeholder-gray-400 py-4 px-4 resize-none outline-none focus:border-blue-400" placeholder="Write a comment..."></textarea>
                                <div class="flex justify-end pb-2 ">
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                                        Post comment
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div id="comment-board" class="flex flex-col mt-4">
                            <div data-key="" class="py-6 px-5 bg-[#e8f3ff] rounded-lg flex flex-col items-start my-3">
                                <div class="flex items-center">
                                    <img src="https://dummyimage.com/106x106" id="user-profile" alt="profile" class="w-10 h-10 rounded-full flex-shrink-0 object-cover object-center">
                                    <h4 class="font-semibold text-base ml-4">John Doe</h4>
                                    <span class="text-base text-gray-500 ml-3">May 21, 2022 11:48 AM</span>
                                </div>
                                <p class="my-4 text-base">These changes should fix the issues you mentioned and provide the desired behavior of opening and closing the modal.</p>
                                <div class="like-icon text-sm text-gray-500 cursor-pointer">
                                    <i class="fa-regular fa-thumbs-up"></i>
                                    <span class="ml-1">14 Likes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

    $("body").append(modal);

    $(document).on('click', '#logout-modal-backdrop', function () {
        closeCommentModal();
    });

    $(document).on('click', '#icon-close', function () {
        closeCommentModal();
    }); 
}

function appendComment(comment){

    var comment = `
        <div data-key="" class="py-6 px-5 bg-[#e8f3ff] rounded-lg flex flex-col items-start my-3">
            <div class="flex items-center">
                <img src="https://dummyimage.com/106x106" id="user-profile" alt="profile" class="w-10 h-10 rounded-full flex-shrink-0 object-cover object-center">
                <h4 class="font-semibold text-base ml-4">John Doe</h4>
                <span class="text-base text-gray-500 ml-3">May 21, 2022 11:48 AM</span>
            </div>
            <p class="my-4 text-base">These changes should fix the issues you mentioned and provide the desired behavior of opening and closing the modal.</p>
            <div class="like-icon text-sm text-gray-500 cursor-pointer">
                <i class="fa-regular fa-thumbs-up"></i>
                <span class="ml-1">14 Likes</span>
            </div>
        </div>
    `

    $("#comment-board").append(comment);
}

function closeCommentModal(){
    $("#comment-modal-backdrop").remove();
}