
$(document).ready(function () {

    $('body').find('.logo-img').attr('src', '../public/vite.svg');
    // console.log("forum.js ready!");
    var query = `SELECT * FROM forum ORDER BY DATE ASC`;
    $.ajax({
        url: "../php/forum.php",
        type: "GET",
        data: { query: query },
        // dataType: "json",
        success: function (data) {
            // var data = JSON.parse(result);
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                //console.log(data[i]);
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
            $(this).children().last().text(likeCountInt + 1);
        } else {
            $(this).children().last().text(likeCountInt - 1);
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
        COMMENT: 0,
    };

    //console.log(JSON.stringify(post));

    const query = `INSERT INTO forum (NAME, TITLE, CONTENT, DATE, THUMB, COMMENT) VALUES ('${post.NAME}', '${post.TITLE}', '${post.CONTENT}', '${post.DATE}', ${post.THUMB}, ${post.COMMENT})`
    
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
                        <span class="ml-1">${post.THUMB}</span>
                    </div>
                    <span class="comment-icon cursor-pointer hover:text-[#6aa1ff] text-sm text-gray-500">
                        <i class="fa-regular fa-comment-dots ml-3"></i>
                        <span class="ml-1">${post.COMMENT} comments</span>
                    </span>
                </div>
            </div>
        </div>
    `

    cardContainer.prepend(newPost);
    forumTextarea.val("");
}
