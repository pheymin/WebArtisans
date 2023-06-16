import { getRandomImageUrl, getCurrentUser, getCurrentUserName, getCurrentUserAvatar } from "./Tools.js";

$(document).ready(function () {

    // $('body').find('.logo-img').attr('src', '../public/vite.svg');

    if (getCurrentUser() != null) {
        initUserArea();
    }


    var query = `SELECT f.*, COUNT(c.FORUM_ID) AS COMMENT_COUNT FROM forums AS f LEFT JOIN comments AS c ON f.ID = c.FORUM_ID GROUP BY f.ID ORDER BY f.DATE`;
    $.ajax({
        url: "../php/forum.php",
        type: "GET",
        data: { query: query },
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                appendPostOnTop(data[i]);
            }
            handleIconEvents();
        },
    });
});

var date = new Date();
var datetime = $("#forum-datetime");
var datestring = date.toDateString().replace(" ", ", ");
datetime.text(datestring);

function handleIconEvents()
{
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
        var id = $(this).closest("[data-id]").data("id");
        var commentCount = $(this).children().last().text().split(" ")[0];
        var count = parseInt(commentCount);
        appendCommentModal(id,count,$(this).children().last());
    });
}

function initUserArea(){
    var userArea = `
        <h2 class="font-semibold text-2xl tracking-wider">Welcome, <span class="text-[#4d2ec8]">${getCurrentUserName()}.</span></h2>
        <h6 id="forum-datetime" class="my-1 text-[#272e3b]"></h6>
        <div class="py-5 px-7 rounded-xl shadow-lg bg-[#f5e8ff] flex flex-col box-border my-6">
            <div class="inline-flex items-start">
                <img src="${getCurrentUserAvatar()}" id="user-profile" alt="profile"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
                <textarea id="txt-create-post" placeholder="Share your question here" class="ml-4 px-5 py-4 rounded-3xl text-sm box-border grow focus:outline-[#7f5be7] h-28 resize-none overflow-hidden"></textarea>
            </div>
            <div class="flex flex-row mt-4 justify-end">
                <button id="btn-create-post" class="bg-[#a38ffd] px-5 py-2 text-white hover:bg-[#805be8] cursor-pointer rounded-md">+ New Post</button>
            </div>
        </div>
    `

    $('#forum-container').prepend(userArea);

    handleCreatePostEvent();
}

var forumTextarea = $("#txt-create-post");

function handleCreatePostEvent(){
    
    var createButton = $("#btn-create-post");

    createButton.on("click", function (e) {
        e.preventDefault();
    
        if ($("#txt-create-post").val().length == 0){
            alert("Please enter your question.");
            return;
        }
    
        var content = $("#txt-create-post").val();
        var title = content.split("\n")[0];
        content = content.replace(title, "");
        content = content.replaceAll("\n", "");
        createNewPost(title, content);
    });
}

const cardContainer = $(".forum-card-container");
var cardNum = cardContainer.children().length;

function createNewPost(title, content) {
    //convert date to format: YYYY-MM-DD HH:MM:SS, time zone is Malaysia
    let date = new Date();
    date.setHours(date.getHours() + 8);
    let datestring = date.toISOString().slice(0, 19).replace("T", " ");

    var post = {
        NAME: getCurrentUserName(),
        TITLE: title,
        CONTENT: content,
        DATE: datestring,
        THUMB: 0,
        COMMENT_COUNT: 0
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
            $("#txt-create-post").val("");
        }
    });
}

function appendPostOnTop(post){

    if (!post.ID) post.ID = $('.forum-card').length+1;

    var datestring = formatDate(post.DATE);
    
    var newPost = `
        <div class="forum-card" data-id="${post.ID}">
            <div class="flex flex-col box-border mb-6 py-5 px-7 rounded-lg shadow-lg bg-[#f5e8ff]">
                <div class="inline-flex">
                    <img src="${getRandomImageUrl()}" id="user-profile" alt="profile"
                        class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
                    <div class="flex flex-col ml-4">
                        <h3 class="text-sm text-[#272e3b] font-semibold">${post.NAME}</h3>
                        <span class="text-xs text-[#4e5969]">${datestring}</span>
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

function commentArea(){
    var commentArea = `
        <div class=" inline-flex items-start mt-4">
            <img src="${getCurrentUserAvatar()}" id="user-profile" alt="profile" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
            <div class="overflow-hidden ml-4 flex-1">
                <textarea rows="3" id="txt-comment" name="comment" class="w-full rounded-lg border-2 text-base border-gray-300 bg-white placeholder-gray-400 py-4 px-4 resize-none outline-none focus:border-blue-400" placeholder="Write a comment..."></textarea>
                <div class="flex justify-end pb-2 ">
                    <button id="btn-post-comment" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Post comment
                    </button>
                </div>
            </div>
        </div>
    `
    if (getCurrentUser() != null){
        return commentArea;
    }
    else
        return "";
}

function appendCommentModal(id,count,ele){

    var data = getComments(id);

    var modal = `
        <div id="comment-modal-backdrop" class="relative z-30" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="z-40 fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div class="fixed inset-0 z-50 overflow-y-auto">
                <div id="modal-panel" class="flex min-h-full justify-center p-4 items-center sm:p-0">
                    <div class="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:my-6 sm:w-full lg:max-w-4xl md:max-w-2xl max-w-xl py-8 px-6" >
                        <div class="flex flex-col">
                            <span class="flex justify-end"><i id="icon-close" class="fa-solid fa-xmark text-gray-500 hover:text-blue-500 text-lg cursor-pointer"></i></span>
                            <h1 id="comment-modal-count" class="font-semibold text-xl text-center">${count} Comments</h1>
                            ${commentArea()}
                            <div id="comment-board" class="flex flex-col mt-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

    $("body").append(modal);

    $(document).on('click', '#icon-close', function () {
        closeCommentModal();
    }); 

    $(document).on('click', '#btn-post-comment', function () {
        var comment = $('#txt-comment').val();

        if (comment == ""){
            alert("Please write a comment");
            return;
        }

        let date = new Date();
        date.setHours(date.getHours() + 8);
        let datestring = date.toISOString().slice(0, 19).replace("T", " ");

        var data = {
            FORUM_ID: id,
            NAME: getCurrentUserName(),
            COMMENT: comment,
            POSTEDTIME: datestring,
            THUMB: 0
        }
        postComment(data);
        $('#comment-modal-count').text(`${count+1} Comments`);
        ele.text(`${count+1} comments`);
        $('#txt-comment').val() = "";
    });


}

function appendComment(data){

    if (!data.ID && !data.FORUM_ID) return;

    if (!data.ID) data.ID = $('.comment-card').length+1;

    var datestring = formatDate(data.POSTEDTIME);

    var comment = `
        <div data-key="${data.ID}" class="comment-card py-6 px-5 bg-[#e8f3ff] rounded-lg flex flex-col items-start my-3">
            <div class="flex items-center">
                <img src="${getRandomImageUrl()}" id="user-profile" alt="profile" class="w-10 h-10 rounded-full flex-shrink-0 object-cover object-center">
                <h4 class="font-semibold text-base ml-4">${data.NAME}</h4>
                <span class="text-base text-gray-500 ml-3">${datestring}</span>
            </div>
            <p class="my-4 text-base">${data.COMMENT}</p>
            <div class="like-icon text-sm text-gray-500 cursor-pointer">
                <i class="fa-regular fa-thumbs-up"></i>
                <span class="ml-1">${data.THUMB} Likes</span>
            </div>
        </div>
    `

    $("#comment-board").prepend(comment);
}

function closeCommentModal(){
    $("#comment-modal-backdrop").remove();
}

async function getComments(id)
{
    var query = `SELECT * FROM comments WHERE FORUM_ID = ${id} ORDER BY POSTEDTIME`
    $.ajax({
        url: "../php/forum.php",
        type: "GET",
        data: {query : query},
        success: function (data) {
            if (data.length == 0) return;
            
            for (var i = 0; i < data.length; i++) {
                appendComment(data[i]);
            }
        }
    })
}

function formatDate(date)
{
    var datestring = new Date(date).toDateString().replace(" ", ", ");
    var datetime = date.split(" ")[1];
    datetime = datetime.substring(0, datetime.length-3);
    
    datestring = datestring.substring(4);  
    if(datestring[0] == " ") datestring = datestring.substring(1);
    datestring = datestring.substring(0, datestring.length-5) + "," + datestring.substring(datestring.length-5);

    var hour = datetime.split(":")[0];
    var ampm = hour >= 12 ? "PM" : "AM";
    return datestring + " " + datetime + " " + ampm;
}

function postComment(commentData)
{
    var query = `INSERT INTO comments (NAME, COMMENT, FORUM_ID) VALUES ('${commentData.NAME}', '${commentData.COMMENT}', '${commentData.FORUM_ID}')`
    // console.log(query);
    $.ajax({
        url: "../php/forum.php",
        type: "POST",
        data: JSON.stringify(query),
        success: function () {
            appendComment(commentData);
        }
    })
}